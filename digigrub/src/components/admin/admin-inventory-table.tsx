"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { mockInventory } from "@/lib/mock-data"

export function AdminInventoryTable() {
  const [inventory, setInventory] = useState(mockInventory)

  const getStockStatusColor = (item) => {
    if (item.quantity === 0) return "bg-red-500"
    if (item.quantity <= item.lowStockThreshold) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getStockStatusText = (item) => {
    if (item.quantity === 0) return "Out of Stock"
    if (item.quantity <= item.lowStockThreshold) return "Low Stock"
    return "In Stock"
  }

  const updateInventoryQuantity = (itemId, newQuantity) => {
    setInventory(inventory.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))

    const item = inventory.find((item) => item.id === itemId)

    toast.success("Inventory updated", {
      description: `${item?.name} quantity has been updated to ${newQuantity}.`,
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateInventoryQuantity(item.id, Number.parseInt(e.target.value))}
                    className="h-8 w-16"
                  />
                </div>
              </TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>
                <Badge className={getStockStatusColor(item)}>{getStockStatusText(item)}</Badge>
              </TableCell>
              <TableCell>{new Date(item.lastUpdated).toLocaleDateString()}</TableCell>
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
                        toast.info("Editing item", {
                          description: `Opening editor for ${item.name}`,
                        })
                      }}
                    >
                      Edit item
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateInventoryQuantity(item.id, item.quantity + 10)}>
                      Add 10 units
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        toast.info("Viewing history", {
                          description: `Viewing inventory history for ${item.name}`,
                        })
                      }}
                    >
                      View history
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

