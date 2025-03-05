"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/providers/cart-provider"

export function CartItems() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-muted-foreground mt-2">Add some items to your cart to get started.</p>
        <Link href="/menu">
          <Button className="mt-4">Browse Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="flex items-start space-x-4 py-4 border-b">
          <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
            <Image
              src={item.image || "/placeholder.svg?height=96&width=96"}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <Link href={`/menu/${item.id}`}>
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
            <div className="mt-2 flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
              >
                -
              </Button>
              <span className="w-8 text-center">{item.quantity || 1}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className="font-medium">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-muted-foreground"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

//test5