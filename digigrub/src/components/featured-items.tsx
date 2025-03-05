"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useCart } from "@/components/providers/cart-provider"
import { mockMenuItems } from "@/lib/mock-data"

export function ItemDetail({ id }: { id: string }) {
  const [item, setItem] = useState<{
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
    nutritionalInfo: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
  } | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchedItem = mockMenuItems.find((item) => item.id === id)
    setItem(fetchedItem || null)
    setLoading(false)
  }, [id])

  const handleAddToCart = () => {
    if (item) {
      addToCart({
        ...item,
        quantity,
      })
      toast.success(`${quantity} x ${item.name} has been added to your cart.`)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Item not found</h2>
        <p className="text-muted-foreground">The item you're looking for doesn't exist or has been removed.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="relative aspect-square">
        <Image
          src={item.image || "/placeholder.svg?height=600&width=600"}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-2xl font-semibold mt-2">${item.price.toFixed(2)}</p>
          <div className="flex items-center mt-2">
            {item.available ? (
              <span className="text-sm text-green-500">In Stock</span>
            ) : (
              <span className="text-sm text-red-500">Out of Stock</span>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-muted-foreground mt-2">{item.description}</p>
        </div>
        {item.nutritionalInfo && (
          <div>
            <h2 className="text-lg font-semibold">Nutritional Information</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="font-medium">{item.nutritionalInfo.calories} kcal</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Protein</p>
                <p className="font-medium">{item.nutritionalInfo.protein}g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carbs</p>
                <p className="font-medium">{item.nutritionalInfo.carbs}g</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fat</p>
                <p className="font-medium">{item.nutritionalInfo.fat}g</p>
              </div>
            </div>
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold">Quantity</h2>
          <div className="flex items-center space-x-2 mt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={!item.available}
            >
              -
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)} disabled={!item.available}>
              +
            </Button>
          </div>
        </div>
        <Button className="w-full" size="lg" onClick={handleAddToCart} disabled={!item.available}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
