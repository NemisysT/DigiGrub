from pydantic import BaseModel
from typing import List
from datetime import datetime

class MenuItem(BaseModel):
    """Schema for a menu item."""
    name: str
    description: str | None
    price: float
    stock: int
    is_available: bool = True

class OrderItem(BaseModel):
    """Schema for an item in an order."""
    menu_item_id: int
    quantity: int

class OrderCreate(BaseModel):
    """Schema for creating an order."""
    items: List[OrderItem]

class OrderResponse(BaseModel):
    """Schema for order response with details."""
    id: int
    user_id: str
    total_amount: float
    status: str
    created_at: datetime
    items: List[OrderItem]

class StatusUpdate(BaseModel):
    """Schema for updating order status."""
    status: str