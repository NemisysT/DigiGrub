import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, ShoppingBag, Clock, DollarSign } from "lucide-react"

export function AdminAnalyticsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$24.50</div>
          <div className="flex items-center text-xs text-green-500">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>+5.2% from last month</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Based on the last 500 orders</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">32.5%</div>
          <div className="flex items-center text-xs text-red-500">
            <TrendingDown className="mr-1 h-4 w-4" />
            <span>-2.1% from last month</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Visitors who completed an order</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Preparation Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12 min</div>
          <div className="flex items-center text-xs text-green-500">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>+8.3% faster than target</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">From order to ready for pickup</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Repeat Customer Rate</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">68.7%</div>
          <div className="flex items-center text-xs text-green-500">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>+3.4% from last month</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Customers who ordered more than once</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Items Per Order</CardTitle>
          <ShoppingBag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2.8</div>
          <div className="flex items-center text-xs text-green-500">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>+0.3 from last month</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Average number of items per order</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.7/5</div>
          <div className="flex items-center text-xs text-green-500">
            <TrendingUp className="mr-1 h-4 w-4" />
            <span>+0.2 from last month</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Based on post-order surveys</p>
        </CardContent>
      </Card>
    </div>
  )
}

