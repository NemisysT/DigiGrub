import { AdminMenuTable } from "@/components/admin/admin-menu-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminMenuPage() {
  return (
    <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Menu Management</h1>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">Add Menu Item</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Input className="w-full sm:w-[250px]" placeholder="Search menu items..." />
          <Button variant="outline" size="sm">
            Search
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="main">Main Dishes</SelectItem>
              <SelectItem value="sides">Side Dishes</SelectItem>
              <SelectItem value="drinks">Drinks</SelectItem>
              <SelectItem value="desserts">Desserts</SelectItem>
              <SelectItem value="snacks">Snacks</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <AdminMenuTable />
    </div>
  )
}

