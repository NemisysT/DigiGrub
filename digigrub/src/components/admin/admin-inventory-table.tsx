"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Minus, Edit, History, RefreshCw } from "lucide-react"
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

  const handleEditItem = (item) => {
    toast.info("Editing item", {
      description: `Opening editor for ${item.name}`,
    })
  }

  const handleViewHistory = (item) => {
    toast.info("Viewing history", {
      description: `Viewing inventory history for ${item.name}`,
    })
  }

  const handleRefreshStock = (item) => {
    toast.success("Stock refreshed", {
      description: `${item.name} stock has been refreshed.`,
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
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category || "Ingredient"}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateInventoryQuantity(item.id, Math.max(0, item.quantity - 1))}
                    title="Decrease Quantity"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateInventoryQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                    className="h-8 w-16"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateInventoryQuantity(item.id, item.quantity + 1)}
                    title="Increase Quantity"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={getStockStatusColor(item)}>{getStockStatusText(item)}</Badge>
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
                    onClick={() => updateInventoryQuantity(item.id, item.quantity + 10)}
                    title="Add 10 Units"
                  >
                    <span className="text-xs font-medium">+10</span>
                    <span className="sr-only">Add 10</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleRefreshStock(item)}
                    title="Refresh Stock"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span className="sr-only">Refresh</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleViewHistory(item)}
                    title="View History"
                  >
                    <History className="h-3.5 w-3.5" />
                    <span className="sr-only">History</span>
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

