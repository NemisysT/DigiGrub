import { MainNav } from "@/components/main-nav";
// import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { OrderHistory } from "@/components/order-history";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col w-full">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
            <MainNav className="hidden md:flex" />
            {/* <MobileNav className="md:hidden" /> */}
            <div className="ml-auto flex items-center space-x-4">
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
        <main className="flex-1 flex flex-col items-center justify-center">
          <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
            <div className="container mx-auto flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Orders
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl mx-auto">
                  Track and manage your orders
                </p>
              </div>
              <div className="w-full overflow-x-auto">
                <OrderHistory />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
