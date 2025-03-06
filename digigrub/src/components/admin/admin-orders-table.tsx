"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle2, XCircle, Loader2, AlertCircle, Eye } from 'lucide-react'
import { mockOrders } from "@/lib/mock-data"

export function AdminOrdersTable() {
  const [orders, setOrders] = useState(mockOrders)

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500"
      case "processing":
        return "bg-blue-500"
      case "ready":
        return "bg-green-500"
      case "completed":
        return "bg-gray-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))

    toast.success("Order status updated", {
      description: `Order #${orderId} has been marked as ${newStatus}.`,
    })
  }

  const viewOrderDetails = (orderId) => {
    toast.info("Viewing order details", {
      description: `Viewing details for Order #${orderId}`
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{new Date(order.date).toLocaleString()}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap items-center gap-1">
                  <Button
                    variant={order.status === "pending" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateOrderStatus(order.id, "pending")}
                    title="Mark as Pending"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    <span className="sr-only">Pending</span>
                  </Button>
                  <Button
                    variant={order.status === "processing" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateOrderStatus(order.id, "processing")}
                    title="Mark as Processing"
                  >
                    <Loader2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Processing</span>
                  </Button>
                  <Button
                    variant={order.status === "ready" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateOrderStatus(order.id, "ready")}
                    title="Mark as Ready"
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span className="sr-only">Ready</span>
                  </Button>
                  <Button
                    variant={order.status === "completed" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateOrderStatus(order.id, "completed")}
                    title="Mark as Completed"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Completed</span>
                  </Button>
                  <Button
                    variant={order.status === "cancelled" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateOrderStatus(order.id, "cancelled")}
                    title="Mark as Cancelled"
                  >
                    <XCircle className="h-3.5 w-3.5" />
                    <span className="sr-only">Cancelled</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 ml-1"
                    onClick={() => viewOrderDetails(order.id)}
                    title="View Details"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="sr-only">View</span>
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
