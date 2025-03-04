"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/providers/cart-provider"

export function CheckoutForm() {
  const router = useRouter()
  const { clearCart } = useCart()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and will be ready for pickup soon.",
    })

    clearCart()
    router.push("/orders")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Checkout Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label>Pickup time</Label>
              <RadioGroup defaultValue="asap">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="asap" id="asap" />
                  <Label htmlFor="asap">As soon as possible</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="later" id="later" />
                  <Label htmlFor="later">Schedule for later</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Special instructions</Label>
              <Textarea id="notes" placeholder="Any special requests or dietary requirements?" />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Place Order"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

