import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
      <div className="flex-1 flex flex-col items-center justify-center text-center">
      <main className="flex-1  ">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  About DigiGrub
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Revolutionizing campus dining with technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    DigiGrub was founded in 2025 with a simple mission: to eliminate long cafeteria lines and reduce
                    food waste on campus.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px]">
                    What started as a small project by a group of computer science students quickly evolved into a
                    comprehensive solution for campus dining. We noticed that students were spending too much time
                    waiting in line during their short breaks between classes, and cafeterias were struggling with food
                    waste due to unpredictable demand.
                  </p>
                  <p className="max-w-[600px]">
                    By creating a platform that allows students to pre-order meals and cafeterias to better predict
                    demand, we have created a win-win solution that saves time, reduces waste, and improves the overall
                    dining experience.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="DigiGrub team working"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We are on a mission to transform campus dining through technology
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-3">
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
                      className="h-6 w-6 text-primary-foreground"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Save Time</h3>
                  <p className="text-center text-muted-foreground">
                    Eliminate waiting in line by pre-ordering meals for pickup at your convenience.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-3">
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
                      className="h-6 w-6 text-primary-foreground"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Reduce Waste</h3>
                  <p className="text-center text-muted-foreground">
                    Help cafeterias better predict demand and reduce food waste through pre-orders.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="rounded-full bg-primary p-3">
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
                      className="h-6 w-6 text-primary-foreground"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Improve Experience</h3>
                  <p className="text-center text-muted-foreground">
                    Create a better dining experience with personalized recommendations and dietary options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  DigiGrub makes campus dining simple and efficient
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Browse</h3>
                  <p className="text-center text-muted-foreground">Explore the menu and find your favorite meals</p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Order</h3>
                  <p className="text-center text-muted-foreground">Place your order and select your pickup time</p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Pay</h3>
                  <p className="text-center text-muted-foreground">Complete your payment securely online</p>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Pickup</h3>
                  <p className="text-center text-muted-foreground">
                    Skip the line and pick up your meal when its ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the passionate people behind DigiGrub
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Mervin</h3>
                    <p className="text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Anush</h3>
                    <p className="text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Raghava</h3>
                    <p className="text-muted-foreground">CTO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Prateek </h3>
                    <p className="text-muted-foreground">Head of Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
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
