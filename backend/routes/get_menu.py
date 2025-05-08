from fastapi import APIRouter, Depends , HTTPException
from supabase import Client
from typing import List
from models.schemas import MenuItem

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.get("/menu", response_model=List[MenuItem])
async def get_menu(supabase: Client = Depends(get_supabase)):
    """
    Retrieve all available menu items.

    Returns:
        List[MenuItem]: List of available menu items.

    Raises:
        HTTPException: If database query fails.
    """
    try:
        response = supabase.table("menu_items").select("*").eq("is_available", True).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch menu: {str(e)}")