"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/providers/cart-provider"
import { mockMenuItems } from "@/lib/mock-data"
import { toast } from "sonner"

export function RelatedItems() {
  const [items, setItems] = useState<typeof mockMenuItems>([])
  const { addToCart } = useCart()

  useEffect(() => {
    // In a real app, this would be an API call with related items
    // For now, random items are pulled from the mock data in lib>utils>mock-data.ts
    const randomItems = [...mockMenuItems].sort(() => 0.5 - Math.random()).slice(0, 4)
    setItems(randomItems)
  }, [])

  interface MenuItem {
    id: string
    name: string
    description: string
    price: number
    available: boolean
    image?: string
  }

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item)
    toast.success("Added to cart", {
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <Link href={`/menu/${item.id}`}>
            <div className="aspect-square relative">
              <Image
                src={item.image || "/placeholder.svg?height=300&width=300"}
                alt={item.name}
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
          </Link>
          <CardContent className="p-4">
            <Link href={`/menu/${item.id}`}>
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-medium">${item.price.toFixed(2)}</span>
              {item.available ? (
                <span className="text-xs text-green-500">Available</span>
              ) : (
                <span className="text-xs text-red-500">Unavailable</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => handleAddToCart(item)} className="w-full" disabled={!item.available}>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}