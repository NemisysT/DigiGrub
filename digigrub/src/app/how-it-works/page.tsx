import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingCart, CreditCard, Clock } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/cart">
                <Button variant="ghost" size="icon" aria-label="Cart">
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
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">Sign up</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col justify-center items-center text-center">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  How DigiGrub Works
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Skip the line and enjoy your meal with our simple 4-step process
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative mb-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    1
                  </div>
                  <Search className="absolute -right-2 -top-2 h-10 w-10 rounded-full bg-background p-2 shadow-md" />
                </div>
                <h2 className="text-2xl font-bold">Browse Menu</h2>
                <p className="text-muted-foreground">
                  Explore our diverse menu of delicious meals, snacks, and beverages. Filter by category, dietary
                  preferences, or search for your favorites.
                </p>
                <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Browse menu screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative mb-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    2
                  </div>
                  <ShoppingCart className="absolute -right-2 -top-2 h-10 w-10 rounded-full bg-background p-2 shadow-md" />
                </div>
                <h2 className="text-2xl font-bold">Place Your Order</h2>
                <p className="text-muted-foreground">
                  Add items to your cart, customize as needed, and specify your pickup time. You can order for now or
                  schedule for later.
                </p>
                <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Place order screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative mb-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    3
                  </div>
                  <CreditCard className="absolute -right-2 -top-2 h-10 w-10 rounded-full bg-background p-2 shadow-md" />
                </div>
                <h2 className="text-2xl font-bold">Pay Securely</h2>
                <p className="text-muted-foreground">
                  Complete your payment securely online using credit/debit cards, campus meal plans, or mobile payment
                  options.
                </p>
                <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Payment screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative mb-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                    4
                  </div>
                  <Clock className="absolute -right-2 -top-2 h-10 w-10 rounded-full bg-background p-2 shadow-md" />
                </div>
                <h2 className="text-2xl font-bold">Pick Up Your Order</h2>
                <p className="text-muted-foreground">
                  Skip the line and head straight to the pickup counter when your order is ready. Youll receive a
                  notification when its time.
                </p>
                <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Pickup screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Use DigiGrub?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our virtual canteen system offers numerous benefits
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Save Time</h3>
                    <p className="text-center text-muted-foreground mt-2">
                      No more waiting in long lines during your short breaks. Order ahead and pick up when ready.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                        <path d="M8.5 8.5v.01" />
                        <path d="M16 15.5v.01" />
                        <path d="M12 12v.01" />
                        <path d="M11 17v.01" />
                        <path d="M7 14v.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Personalized Experience</h3>
                    <p className="text-center text-muted-foreground mt-2">
                      Save your favorite orders, set dietary preferences, and get personalized recommendations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
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
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Flexible Options</h3>
                    <p className="text-center text-muted-foreground mt-2">
                      Customize your meals, schedule orders in advance, and choose from multiple payment methods.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about using DigiGrub
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8 w-full max-w-4xl">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">How far in advance can I place an order?</h3>
                    <p className="mt-2 text-muted-foreground">
                      You can place orders up to 7 days in advance. For same-day orders, please order at least 30
                      minutes before your desired pickup time.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">What if I need to cancel my order?</h3>
                    <p className="mt-2 text-muted-foreground">
                      You can cancel your order through your account up to 1 hour before the scheduled pickup time for a
                      full refund.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">How will I know when my order is ready?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Youll receive a notification via email and/or push notification (if enabled) when your order is
                      ready for pickup.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Can I use my meal plan to pay for orders?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Yes, you can link your campus meal plan to your DigiGrub account and use it as a payment method.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of students already using DigiGrub to save time and enjoy better campus dining.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/menu">
                  <Button size="lg">Browse Menu</Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="lg" variant="outline">
                    Sign Up Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
        </div>
        
      <Footer />
    </div>
  )
}

