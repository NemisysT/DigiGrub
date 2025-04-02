import { AdminAnalyticsCards } from "@/components/admin/admin-analytics-cards"
import { AdminSalesChart } from "@/components/admin/admin-sales-chart"
import { AdminPopularItems } from "@/components/admin/admin-popular-items"
import { AdminUserActivity } from "@/components/admin/admin-user-activity"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

export default function AdminAnalyticsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <AdminAnalyticsCards />
      <div className="grid gap-6 md:grid-cols-2">
        <AdminSalesChart /> 
        <AdminUserActivity />
      </div>
      <AdminPopularItems /> 
    </div>
  )
}
