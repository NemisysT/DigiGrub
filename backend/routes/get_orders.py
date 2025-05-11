from fastapi import APIRouter, Depends, HTTPException, status, Query
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
async def get_orders(
    user_type: str = Query(..., alias="user", regex="^(admin|user)$"),
    user: dict = Depends(get_current_user),
    supabase: Client = Depends(get_supabase)
):
    """
    List orders (admin sees all orders, user sees own orders).

    Args:
        user_type (str): Type of user ('admin' or 'user') from query parameter.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        List[OrderResponse]: List of orders with details.

    Raises:
        HTTPException: If database query fails.
    """
    try:
        if user_type == "admin" and user["role"] == "admin":
            response = supabase.table("orders").select("*, order_items(*, menu_items(name, price))").execute()
        else:
            response = supabase.table("orders").select("*, order_items(*, menu_items(name, price))").eq("user_id", user["user_id"]).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch orders: {str(e)}")