"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, UserX, UserCheck, Mail, Key } from "lucide-react"

// Mock data for users
const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "customer",
    status: "active",
    joinDate: "2023-08-15T10:30:00Z",
    lastLogin: "2023-10-05T14:30:00Z",
    ordersCount: 12,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "customer",
    status: "active",
    joinDate: "2023-07-22T09:15:00Z",
    lastLogin: "2023-10-04T11:45:00Z",
    ordersCount: 8,
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "staff",
    status: "active",
    joinDate: "2023-06-10T08:20:00Z",
    lastLogin: "2023-10-05T09:30:00Z",
    ordersCount: 0,
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    role: "customer",
    status: "inactive",
    joinDate: "2023-05-05T14:10:00Z",
    lastLogin: "2023-09-15T16:20:00Z",
    ordersCount: 3,
  },
  {
    id: "5",
    name: "Alex Brown",
    email: "alex.brown@example.com",
    role: "admin",
    status: "active",
    joinDate: "2023-04-18T11:25:00Z",
    lastLogin: "2023-10-05T08:15:00Z",
    ordersCount: 0,
  },
]

export function AdminUsersTable() {
  const [users, setUsers] = useState(mockUsers)

  const getRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-purple-500">Admin</Badge>
      case "staff":
        return <Badge className="bg-blue-500">Staff</Badge>
      case "customer":
        return <Badge className="bg-green-500">Customer</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "inactive":
        return <Badge className="bg-yellow-500">Inactive</Badge>
      case "suspended":
        return <Badge className="bg-red-500">Suspended</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  const toggleUserStatus = (userId) => {
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          const newStatus = user.status === "active" ? "inactive" : "active"
          toast.success(`User ${newStatus}`, {
            description: `${user.name}'s account has been ${newStatus === "active" ? "activated" : "deactivated"}.`,
          })
          return { ...user, status: newStatus }
        }
        return user
      }),
    )
  }

  const editUser = (userId) => {
    toast.info("Edit user", {
      description: `Opening editor for user ID: ${userId}`,
    })
  }

  const deleteUser = (userId) => {
    const user = users.find((u) => u.id === userId)
    toast.error("Delete user", {
      description: `Are you sure you want to delete ${user?.name}?`,
      action: {
        label: "Undo",
        onClick: () => toast.success("Deletion cancelled"),
      },
    })
  }

  const resetPassword = (userId) => {
    toast.success("Password reset email sent", {
      description: "A password reset link has been sent to the user's email.",
    })
  }

  const sendEmail = (userId) => {
    toast.info("Send email", {
      description: "Opening email composer for this user.",
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{getRoleBadge(user.role)}</TableCell>
              <TableCell>{getStatusBadge(user.status)}</TableCell>
              <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
              <TableCell>{user.ordersCount}</TableCell>
              <TableCell>
                <div className="flex flex-wrap items-center gap-1">
                  <Button
                    variant={user.status === "active" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => toggleUserStatus(user.id)}
                    title={user.status === "active" ? "Deactivate User" : "Activate User"}
                  >
                    {user.status === "active" ? (
                      <UserX className="h-3.5 w-3.5" />
                    ) : (
                      <UserCheck className="h-3.5 w-3.5" />
                    )}
                    <span className="sr-only">{user.status === "active" ? "Deactivate" : "Activate"}</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => editUser(user.id)}
                    title="Edit User"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => sendEmail(user.id)}
                    title="Send Email"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => resetPassword(user.id)}
                    title="Reset Password"
                  >
                    <Key className="h-3.5 w-3.5" />
                    <span className="sr-only">Reset Password</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 text-red-500 hover:bg-red-50 hover:text-red-600"
                    onClick={() => deleteUser(user.id)}
                    title="Delete User"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Delete</span>
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

