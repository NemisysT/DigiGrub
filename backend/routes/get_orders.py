from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from typing import List
from models.schemas import OrderResponse
from dependencies.auth import get_current_user

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.get("/orders", response_model=List[OrderResponse])
async def get_orders(user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    List orders (users see own orders, admins see all).

    Args:
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        List[OrderResponse]: List of orders with details.

    Raises:
        HTTPException: If database query fails.
    """
    try:
        if user["role"] == "admin":
            response = supabase.table("orders").select("*, order_items(*)").execute()
        else:
            response = supabase.table("orders").select("*, order_items(*)").eq("user_id", user["user_id"]).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch orders: {str(e)}")