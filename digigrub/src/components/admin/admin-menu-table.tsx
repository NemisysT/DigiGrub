"use client"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { mockMenuItems } from "@/lib/mock-data"

export function AdminMenuTable() {
  const [menuItems, setMenuItems] = useState(mockMenuItems)
  const { toast } = useToast()

  const toggleItemAvailability = (itemId) => {
    setMenuItems(menuItems.map(item => 
      item.id === itemId ? { ...item, available: !item\

