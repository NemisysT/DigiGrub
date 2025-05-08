from fastapi import FastAPI
from routes.get_menu import router as get_menu_router
from routes.create_menu import router as create_menu_router
from routes.update_menu import router as update_menu_router
from routes.delete_menu import router as delete_menu_router
from routes.create_order import router as create_order_router
from routes.get_orders import router as get_orders_router
from routes.get_order import router as get_order_router
from routes.update_order_status import router as update_order_status_router

app = FastAPI(
    title="Virtual Canteen API",
    description="API for the Virtual Canteen System with Supabase integration.",
    openapi_tags=[
        {"name": "menu", "description": "Operations related to menu items"},
        {"name": "orders", "description": "Operations related to orders"}
    ],
    # Define only BearerAuth security scheme
    openapi_extra={
        "components": {
            "securitySchemes": {
                "BearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT"
                }
            }
        },
        "security": [{"BearerAuth": []}]
    }
)

# Include routers for each endpoint
app.include_router(get_menu_router)
app.include_router(create_menu_router)
app.include_router(update_menu_router)
app.include_router(delete_menu_router)
app.include_router(create_order_router)
app.include_router(get_orders_router)
app.include_router(get_order_router)
app.include_router(update_order_status_router)

@app.get("/")
async def root():
    """Root endpoint for API health check."""
    return {"message": "Virtual Canteen API is running"}