from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt
import os
from dotenv import load_dotenv

load_dotenv()

bearer_scheme = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    """
    Verify JWT token and return user details.

    Args:
        credentials (HTTPAuthorizationCredentials): Bearer token from Authorization header.

    Returns:
        dict: User details with user_id and role.

    Raises:
        HTTPException: If token is invalid or user_id is missing.
    """
    token = credentials.credentials
    try:
        payload = jwt.decode(token, os.getenv("SUPABASE_JWT_SECRET"), algorithms=["HS256"])
        user_id: str = payload.get("sub")
        role: str = payload.get("role", "student")
        if not user_id:
            raise HTTPException(status_code=401, detail="Invalid token")
        return {"user_id": user_id, "role": role}
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")