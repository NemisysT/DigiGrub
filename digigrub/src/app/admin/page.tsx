import { AdminDashboardCards } from "@/components/admin/admin-dashboard-cards"
import { AdminRecentOrders } from "@/components/admin/admin-recent-orders"
import { AdminInventoryStatus } from "@/components/admin/admin-inventory-status"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
      </div>
      <AdminDashboardCards />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <AdminRecentOrders />
        <AdminInventoryStatus />
      </div>
    </div>
  )
}

