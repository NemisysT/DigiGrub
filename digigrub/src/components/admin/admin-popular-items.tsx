import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for popular items
const mockPopularItems = [
  {
    id: "1",
    name: "Cheese Burger",
    category: "Burgers",
    sales: 142,
    revenue: 1276.58,
    trend: "up",
  },
  {
    id: "2",
    name: "Veggie Pizza",
    category: "Pizzas",
    sales: 98,
    revenue: 1273.02,
    trend: "up",
  },
  {
    id: "3",
    name: "Caesar Salad",
    category: "Salads",
    sales: 87,
    revenue: 695.13,
    trend: "down",
  },
  {
    id: "4",
    name: "Chocolate Cake",
    category: "Desserts",
    sales: 76,
    revenue: 455.24,
    trend: "up",
  },
  {
    id: "5",
    name: "Iced Coffee",
    category: "Drinks",
    sales: 65,
    revenue: 259.35,
    trend: "same",
  },
]

export function AdminPopularItems() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {mockPopularItems.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {item.id}
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <div className="text-right">
                  <p className="text-sm font-medium">{item.sales} sold</p>
                  <p className="text-sm text-muted-foreground">${item.revenue.toFixed(2)}</p>
                </div>
                <div className="w-16">
                  {item.trend === "up" && (
                    <Badge className="bg-green-500 w-full">↑ {Math.floor(Math.random() * 10) + 1}%</Badge>
                  )}
                  {item.trend === "down" && (
                    <Badge className="bg-red-500 w-full">↓ {Math.floor(Math.random() * 10) + 1}%</Badge>
                  )}
                  {item.trend === "same" && <Badge className="bg-gray-500 w-full">― 0%</Badge>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

