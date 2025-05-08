from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from models.schemas import MenuItem
from dependencies.auth import get_current_user  # Fixed import path

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.post("/menu", response_model=MenuItem)
async def create_menu_item(item: MenuItem, user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    Create a new menu item (admin only).

    Args:
        item (MenuItem): Menu item details.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        MenuItem: Created menu item.

    Raises:
        HTTPException: If user is not admin or database operation fails.
    """
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    try:
        response = supabase.table("menu_items").insert(item.dict()).execute()
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create menu item: {str(e)}")