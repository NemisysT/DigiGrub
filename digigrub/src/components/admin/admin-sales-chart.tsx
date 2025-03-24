"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdminSalesChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d")

  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>Sales Overview</CardTitle>
          <CardDescription>View your sales data across different time periods</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList className="mb-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="items">Items Sold</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue" className="space-y-4">
            <div className="h-[300px] w-full flex items-end space-x-2">
              {/* This is a placeholder for the chart. In a real app, you would use a charting library like Recharts, Chart.js, or D3.js */}
              {Array.from({ length: 7 }).map((_, i) => {
                const height = Math.floor(Math.random() * 70) + 30
                return (
                  <div key={i} className="relative flex-1">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </TabsContent>
          <TabsContent value="orders" className="space-y-4">
            <div className="h-[300px] w-full flex items-end space-x-2">
              {/* This is a placeholder for the chart. In a real app, you would use a charting library like Recharts, Chart.js, or D3.js */}
              {Array.from({ length: 7 }).map((_, i) => {
                const height = Math.floor(Math.random() * 70) + 30
                return (
                  <div key={i} className="relative flex-1">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-md"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </TabsContent>
          <TabsContent value="items" className="space-y-4">
            <div className="h-[300px] w-full flex items-end space-x-2">
              {/* This is a placeholder for the chart. In a real app, you would use a charting library like Recharts, Chart.js, or D3.js */}
              {Array.from({ length: 7 }).map((_, i) => {
                const height = Math.floor(Math.random() * 70) + 30
                return (
                  <div key={i} className="relative flex-1">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-md"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-4 flex justify-between text-sm">
          <div>
            <p className="text-muted-foreground">Total Revenue</p>
            <p className="text-xl font-bold">$12,458.75</p>
          </div>
          <div>
            <p className="text-muted-foreground">Orders</p>
            <p className="text-xl font-bold">573</p>
          </div>
          <div>
            <p className="text-muted-foreground">Items Sold</p>
            <p className="text-xl font-bold">1,842</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

