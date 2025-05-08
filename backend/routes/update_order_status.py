from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from models.schemas import StatusUpdate
from dependencies.auth import get_current_user

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.put("/orders/{order_id}/status")
async def update_order_status(order_id: int, status_update: StatusUpdate, user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    Update order status (admin only).

    Args:
        order_id (int): ID of the order to update.
        status_update (StatusUpdate): New status for the order.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        dict: Updated order details.

    Raises:
        HTTPException: If user is not admin, status is invalid, order not found, or database operation fails.
    """
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Not authorized")
    if status_update.status not in ["pending", "confirmed", "completed", "cancelled"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    try:
        response = supabase.table("orders").update({"status": status_update.status}).eq("id", order_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Order not found")
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update order status: {str(e)}")