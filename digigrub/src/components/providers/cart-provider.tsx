"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

// Define the structure of a cart item
type CartItem = {
  id: string
  name: string
  price: number
  image?: string
  quantity: number
  description?: string
  available?: boolean
  [key: string]: any // For any additional properties
}

// Define the cart context type
type CartContextType = {
  cart: CartItem[]
  addToCart: (item: any) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  cartTotal: number
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [itemCount, setItemCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))

    // Calculate item count and total
    const count = cart.reduce((total, item) => total + (item.quantity || 1), 0)
    setItemCount(count)

    const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    setCartTotal(total)
  }, [cart])

  // Add an item to the cart
  const addToCart = (item: any) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id)

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedCart = [...prevCart]
        const existingItem = updatedCart[existingItemIndex]
        updatedCart[existingItemIndex] = {
          ...existingItem,
          quantity: (existingItem.quantity || 1) + (item.quantity || 1),
        }
        return updatedCart
      } else {
        // Item doesn't exist, add it
        return [...prevCart, { ...item, quantity: item.quantity || 1 }]
      }
    })
  }

  // Remove an item from the cart
  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  // Update the quantity of an item in the cart
  const updateQuantity = (itemId: string, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === itemId ? { ...item, quantity } : item)))
  }

  // Clear the entire cart
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

