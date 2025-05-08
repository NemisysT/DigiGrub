import { MainNav } from "@/components/main-nav"
// import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { ItemDetail } from "@/components/featured-items"
import { CategoryCards } from "@/components/category-cards"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background">
      <div className="flex flex-col w-full max-w-screen-xl mx-auto relative">
        <div className="absolute inset-0 bg-muted -z-10"></div>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-2 md:px-4">
            <MainNav />
            {/* <MobileNav className="hidden md:flex" /> */}
            <div className="flex flex-1 items-center justify-end space-x-4 flex-wrap">
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
                  <Button variant="ghost" size="sm">Log in</Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm">Sign up</Button>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2 text-center lg:text-left">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                      Order ahead, skip the line
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                      Pre-order your meals from the campus canteen and pick them up when they&apos;re ready. No more waiting in line!
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    <Link href="/menu">
                      <Button size="lg">Browse Menu</Button>
                    </Link>
                    <Link href="/how-it-works">
                      <Button size="lg" variant="outline">How it works</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    alt="Hero Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover w-full"
                    height="550"
                    width="800"
                    src="/images/canteen.jpeg?height=550&width=800"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Items Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-screen-xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Items</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                Check out today&apos;s specials and most popular items
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { id: "item-1", name: "Pizza", description: "Delicious cheese pizza" },
                  { id: "item-2", name: "Burger", description: "Juicy beef burger" },
                  { id: "item-3", name: "Pasta", description: "Creamy Alfredo pasta" },
                ].map((item) => (
                  <ItemDetail key={item.id} {...item} />
                ))}
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto px-4 md:px-6 max-w-screen-xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Categories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                Browse our menu by category
              </p>
              <CategoryCards />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
