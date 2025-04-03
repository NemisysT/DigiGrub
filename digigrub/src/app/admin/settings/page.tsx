import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminSettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <Button>Save Changes</Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="business">Business Hours</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Update your business details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input id="business-name" defaultValue="DigiGrub Canteen" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" type="email" defaultValue="contact@digigrub.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" defaultValue="https://digigrub.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Campus Drive, University District, Collegetown, CT 10101" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure general system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="order-prefix">Order Number Prefix</Label>
                    <Input id="order-prefix" defaultValue="DG-" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                    <Input id="tax-rate" type="number" defaultValue="10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                        <SelectItem value="cad">CAD ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="est">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="est">Eastern Time (ET)</SelectItem>
                        <SelectItem value="cst">Central Time (CT)</SelectItem>
                        <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="maintenance-mode" />
                  <Label htmlFor="maintenance-mode">Enable Maintenance Mode</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Business Hours */}
        <TabsContent value="business">
          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>Set your operating hours for each day of the week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <div key={day} className="grid grid-cols-1 gap-4 sm:grid-cols-4 items-center">
                  <div className="font-medium">{day}</div>
                  <div className="flex items-center space-x-2 sm:col-span-2">
                    <div className="space-y-2 flex-1">
                      <Label htmlFor={`${day.toLowerCase()}-open`}>Opening Time</Label>
                      <Select defaultValue={day === "Sunday" ? "closed" : "08:00"}>
                        <SelectTrigger id={`${day.toLowerCase()}-open`}>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="closed">Closed</SelectItem>
                          <SelectItem value="07:00">7:00 AM</SelectItem>
                          <SelectItem value="08:00">8:00 AM</SelectItem>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 flex-1">
                      <Label htmlFor={`${day.toLowerCase()}-close`}>Closing Time</Label>
                      <Select defaultValue={day === "Sunday" ? "closed" : "18:00"}>
                        <SelectTrigger id={`${day.toLowerCase()}-close`}>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="closed">Closed</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id={`${day.toLowerCase()}-closed`} defaultChecked={day !== "Sunday"} />
                    <Label htmlFor={`${day.toLowerCase()}-closed`}>Open</Label>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods */}
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Configure the payment methods available to customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    <div>
                      <div className="font-medium">Credit/Debit Cards</div>
                      <div className="text-sm text-muted-foreground">Accept Visa, Mastercard, Amex</div>
                    </div>
                  </div>
                  <Switch id="credit-card-enabled" defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <div>
                      <div className="font-medium">Campus Meal Plan</div>
                      <div className="text-sm text-muted-foreground">Accept student meal plans</div>
                    </div>
                  </div>
                  <Switch id="meal-plan-enabled" defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="12" x="2" y="6" rx="2" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M6 12h.01M18 12h.01" />
                    </svg>
                    <div>
                      <div className="font-medium">Apple Pay</div>
                      <div className="text-sm text-muted-foreground">Accept Apple Pay payments</div>
                    </div>
                  </div>
                  <Switch id="apple-pay-enabled" defaultChecked />
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 22V3" />
                      <path d="M5 8H2a10 10 0 0 0 20 0h-3" />
                      <path d="M5 16H2a10 10 0 0 1 20 0h-3" />
                    </svg>
                    <div>
                      <div className="font-medium">Google Pay</div>
                      <div className="text-sm text-muted-foreground">Accept Google Pay payments</div>
                    </div>
                  </div>
                  <Switch id="google-pay-enabled" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                      <path d="M12 18V6" />
                    </svg>
                    <div>
                      <div className="font-medium">Cash on Pickup</div>
                      <div className="text-sm text-muted-foreground">Accept cash payments at pickup</div>
                    </div>
                  </div>
                  <Switch id="cash-enabled" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Customer Notifications</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Order Confirmation</div>
                      <div className="text-sm text-muted-foreground">Send when an order is placed</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="order-confirmation-email" defaultChecked />
                      <Label htmlFor="order-confirmation-email">Email</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Order Status Updates</div>
                      <div className="text-sm text-muted-foreground">Send when order status changes</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="order-status-email" defaultChecked />
                      <Label htmlFor="order-status-email">Email</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Order Ready Notification</div>
                      <div className="text-sm text-muted-foreground">Send when order is ready for pickup</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="order-ready-email" defaultChecked />
                      <Label htmlFor="order-ready-email">Email</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Order Feedback Request</div>
                      <div className="text-sm text-muted-foreground">Send after order is completed</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="feedback-email" defaultChecked />
                      <Label htmlFor="feedback-email">Email</Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Staff Notifications</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">New Order Alert</div>
                      <div className="text-sm text-muted-foreground">Send when a new order is placed</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="new-order-email" defaultChecked />
                      <Label htmlFor="new-order-email">Email</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Low Stock Alert</div>
                      <div className="text-sm text-muted-foreground">Send when inventory is running low</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="low-stock-email" defaultChecked />
                      <Label htmlFor="low-stock-email">Email</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Daily Order Summary</div>
                      <div className="text-sm text-muted-foreground">Send a daily summary of all orders</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="daily-summary-email" defaultChecked />
                      <Label htmlFor="daily-summary-email">Email</Label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border p-4 rounded-md">
                    <div>
                      <div className="font-medium">Customer Feedback Alert</div>
                      <div className="text-sm text-muted-foreground">Send when a customer leaves feedback</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="feedback-alert-email" defaultChecked />
                      <Label htmlFor="feedback-alert-email">Email</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations */}
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with third-party services and APIs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <div>
                      <div className="font-medium">Student Information System</div>
                      <div className="text-sm text-muted-foreground">
                        Connect to campus SIS for meal plan validation
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sis-integration" defaultChecked />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <div>
                      <div className="font-medium">Payment Gateway</div>
                      <div className="text-sm text-muted-foreground">Connect to payment processor</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="payment-integration" defaultChecked />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <div className="font-medium">Email Service</div>
                      <div className="text-sm text-muted-foreground">Connect to email delivery service</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="email-integration" defaultChecked />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                      <path d="M11 17v.01" />
                      <path d="M7 14v.01" />
                    </svg>
                    <div>
                      <div className="font-medium">Analytics Platform</div>
                      <div className="text-sm text-muted-foreground">Connect to analytics service</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="analytics-integration" />
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

