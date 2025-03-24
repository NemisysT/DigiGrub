import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for user activity
const mockUserActivity = [
  {
    id: "1",
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "placed an order",
    details: "Cheese Burger, Fries, and Soda",
    time: "5 minutes ago",
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "left a review",
    details: "5 stars for Veggie Pizza",
    time: "15 minutes ago",
  },
  {
    id: "3",
    user: {
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "created an account",
    details: "",
    time: "30 minutes ago",
  },
  {
    id: "4",
    user: {
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "updated their profile",
    details: "Changed dietary preferences",
    time: "1 hour ago",
  },
  {
    id: "5",
    user: {
      name: "Alex Brown",
      email: "alex.brown@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "cancelled an order",
    details: "Order #1234",
    time: "2 hours ago",
  },
]

export function AdminUserActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {mockUserActivity.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}
                </p>
                {activity.details && <p className="text-sm text-muted-foreground">{activity.details}</p>}
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

