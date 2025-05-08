from fastapi import APIRouter, Depends, HTTPException, status
from supabase import Client
from models.schemas import OrderCreate, OrderResponse
from dependencies.auth import get_current_user

router = APIRouter()

def get_supabase() -> Client:
    """Helper function to get Supabase client (injected via Depends)."""
    from supabase import create_client
    import os
    return create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

@router.post("/orders", response_model=OrderResponse)
async def create_order(order: OrderCreate, user: dict = Depends(get_current_user), supabase: Client = Depends(get_supabase)):
    """
    Create a new order with items.

    Args:
        order (OrderCreate): Order details with items.
        user (dict): Current user details from JWT.
        supabase (Client): Supabase client.

    Returns:
        OrderResponse: Created order with details.

    Raises:
        HTTPException: If items are unavailable, stock is insufficient, or database operation fails.
    """
    try:
        total_amount = 0
        for item in order.items:
            menu_item = supabase.table("menu_items").select("*").eq("id", item.menu_item_id).single().execute()
            if not menu_item.data or menu_item.data["stock"] < item.quantity:
                raise HTTPException(status_code=400, detail=f"Item {item.menu_item_id} not available or insufficient stock")
            total_amount += menu_item.data["price"] * item.quantity

        order_data = {
            "user_id": user["user_id"],
            "total_amount": total_amount,
            "status": "pending"
        }
        order_response = supabase.table("orders").insert(order_data).execute()
        order_id = order_response.data[0]["id"]

        for item in order.items:
            menu_item = supabase.table("menu_items").select("*").eq("id", item.menu_item_id).single().execute()
            order_item_data = {
                "order_id": order_id,
                "menu_item_id": item.menu_item_id,
                "quantity": item.quantity,
                "price_at_time": menu_item.data["price"]
            }
            supabase.table("order_items").insert(order_item_data).execute()
            new_stock = menu_item.data["stock"] - item.quantity
            supabase.table("menu_items").update({"stock": new_stock, "is_available": new_stock > 0}).eq("id", item.menu_item_id).execute()

        full_order = supabase.table("orders").select("*, order_items(*)").eq("id", order_id).single().execute()
        return full_order.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create order: {str(e)}")