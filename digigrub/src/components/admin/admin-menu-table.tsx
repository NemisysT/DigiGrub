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

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Available</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menuItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category || "Main"}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <Switch checked={item.available} onCheckedChange={() => toggleItemAvailability(item.id)} />
              </TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() => {
                        toast.info("Editing menu item", {
                          description: `Opening editor for ${item.name}`,
                        })
                      }}
                    >
                      Edit item
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateItemPrice(item.id, item.price + 1)}>
                      Increase price by $1
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        toast.error("Deleting item", {
                          description: `Are you sure you want to delete ${item.name}?`,
                          action: {
                            label: "Undo",
                            onClick: () => toast.success("Deletion cancelled"),
                          },
                        })
                      }}
                      className="text-red-600"
                    >
                      Delete item
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

