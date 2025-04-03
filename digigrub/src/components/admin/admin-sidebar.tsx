"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  ClipboardList,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Users,
  MessageSquare,
  Menu,
  X,
} from "lucide-react" // Import the correct icons
import { useState } from "react"

export function AdminSidebar() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const isActive = (path: string | null) => {
    return pathname === path
  };
  return (
    <div className="lg:flex lg:h-screen lg:w-64 lg:flex-col lg:border-r lg:bg-muted/40">
      {/* Mobile Header */}
      <div className="flex items-center justify-between border-b px-4 py-2 lg:hidden">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>DigiGrub Admin</span>
        </Link>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-muted-foreground hover:text-foreground"
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "bg-muted/95 translate-x-0" : "bg-muted/40 -translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>DigiGrub Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 py-4 text-sm font-medium">
            <Link
              href="/admin"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/orders"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/orders")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Link>
            <Link
              href="/admin/menu"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/menu")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <ClipboardList className="h-4 w-4" />
              Menu
            </Link>
            <Link
              href="/admin/inventory"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/inventory")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <Package className="h-4 w-4" />
              Inventory
            </Link>
            <Link
              href="/admin/users"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/users")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <Users className="h-4 w-4" />
              Users
            </Link>
            <Link
              href="/admin/analytics"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/analytics")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <BarChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/admin/reviews"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/reviews")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <MessageSquare className="h-4 w-4" />
              Reviews
            </Link>
            <Link
              href="/admin/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/settings")
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              } transition-all`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Link href="/">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
              <span className="text-sm font-medium">Exit Admin</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}
