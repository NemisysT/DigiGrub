import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockInventory } from "@/lib/mock-data"

export function AdminInventoryStatus() {
  // Get items with low stock
  const lowStockItems = mockInventory
    .filter((item) => item.quantity <= item.lowStockThreshold)
    .sort((a, b) => a.quantity - b.quantity)
    .slice(0, 5)

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lowStockItems.length > 0 ? (
            lowStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.quantity} units remaining</p>
                  </div>
                </div>
                <Badge className={getStockStatusColor(item)}>{getStockStatusText(item)}</Badge>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">All items are well-stocked.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

