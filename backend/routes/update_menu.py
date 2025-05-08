from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from models.schemas import MenuItem
from dependencies.auth import get_current_user

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.put("/menu/{item_id}", response_model=MenuItem)
async def update_menu_item(item_id: int, item: MenuItem, user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    Update an existing menu item (admin only).

    Args:
        item_id (int): ID of the menu item to update.
        item (MenuItem): Updated menu item details.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        MenuItem: Updated menu item.

    Raises:
        HTTPException: If user is not admin, item not found, or database operation fails.
    """
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    try:
        response = supabase.table("menu_items").update(item.dict()).eq("id", item_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Menu item not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update menu item: {str(e)}")