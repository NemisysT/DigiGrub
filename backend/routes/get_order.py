from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from models.schemas import OrderResponse
from dependencies.auth import get_current_user

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.get("/orders/{order_id}", response_model=OrderResponse)
async def get_order(order_id: int, user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    Retrieve a specific order by ID.

    Args:
        order_id (int): ID of the order to retrieve.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        OrderResponse: Order details.

    Raises:
        HTTPException: If order not found, user not authorized, or database query fails.
    """
    try:
        response = supabase.table("orders").select("*, order_items(*)").eq("id", order_id).single().execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Order not found")
        if user["role"] != "admin" and response.data["user_id"] != user["user_id"]:
            raise HTTPException(status_code=403, detail="Not authorized")
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch order: {str(e)}")