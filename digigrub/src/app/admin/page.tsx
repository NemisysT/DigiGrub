import { AdminDashboardCards } from "@/components/admin/admin-dashboard-cards"
import { AdminRecentOrders } from "@/components/admin/admin-recent-orders"
import { AdminInventoryStatus } from "@/components/admin/admin-inventory-status"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <AdminDashboardCards />
      <div className="grid gap-6 md:grid-cols-2">
        <AdminRecentOrders />
        <AdminInventoryStatus />
      </div>
    </div>
  )
}

