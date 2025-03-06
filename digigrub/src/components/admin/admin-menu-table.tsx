"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, X, Clock, Edit, Trash2, DollarSign } from 'lucide-react'
import { mockMenuItems } from "@/lib/mock-data"

export function AdminMenuTable() {
  const [menuItems, setMenuItems] = useState(mockMenuItems)

  const toggleItemAvailability = (itemId) => {
    setMenuItems(
      menuItems.map((item) => {
        if (item.id === itemId) {
          const newAvailability = !item.available

          toast(newAvailability ? "Item available" : "Item unavailable", {
            description: `${item.name} is now ${newAvailability ? "available" : "unavailable"} on the menu.`,
            icon: newAvailability ? "✅" : "❌",
          })

          return { ...item, available: newAvailability }
        }
        return item
      }),
    )
  }

  const updateItemPrice = (itemId, newPrice) => {
    setMenuItems(
      menuItems.map((item) => {
        if (item.id === itemId) {
          toast.success("Price updated", {
            description: `${item.name} price updated to $${newPrice.toFixed(2)}.`,
          })
          return { ...item, price: newPrice }
        }
        return item
      }),
    )
  }

  const handleEditItem = (item) => {
    toast.info("Editing menu item", {
      description: `Opening editor for ${item.name}`,
    })
  }

  const handleDeleteItem = (item) => {
    toast.error("Deleting item", {
      description: `Are you sure you want to delete ${item.name}?`,
      action: {
        label: "Undo",
        onClick: () => toast.success("Deletion cancelled"),
      },
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category || "Main"}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={item.available ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => toggleItemAvailability(item.id)}
                    title="Available"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span className="sr-only">Available</span>
                  </Button>
                  <Button
                    variant={!item.available ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => toggleItemAvailability(item.id)}
                    title="Unavailable"
                  >
                    <X className="h-3.5 w-3.5" />
                    <span className="sr-only">Unavailable</span>
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleEditItem(item)}
                    title="Edit Item"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateItemPrice(item.id, item.price + 1)}
                    title="Increase Price"
                  >
                    <DollarSign className="h-3.5 w-3.5" />
                    <span className="sr-only">Increase Price</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 text-red-500 hover:bg-red-50 hover:text-red-600"
                    onClick={() => handleDeleteItem(item)}
                    title="Delete Item"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
