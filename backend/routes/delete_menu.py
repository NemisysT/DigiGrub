from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from dependencies.auth import get_current_user

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.delete("/menu/{item_id}")
async def delete_menu_item(item_id: int, user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    Delete a menu item (admin only).

    Args:
        item_id (int): ID of the menu item to delete.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        dict: Success message.

    Raises:
        HTTPException: If user is not admin, item not found, or database operation fails.
    """
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    try:
        response = supabase.table("menu_items").delete().eq("id", item_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Menu item not found")
        return {"message": "Menu item deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete menu item: {str(e)}")