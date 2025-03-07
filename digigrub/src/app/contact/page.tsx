import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactPage() {
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We would love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Send us a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                  <p className="text-muted-foreground">Here is how you can reach us directly or visit our office.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Mail className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Email</h3>
                      <p className="text-center text-muted-foreground mt-2">
                        <a href="mailto:support@digigrub.com" className="hover:underline">
                          support@digigrub.com
                        </a>
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Phone className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Phone</h3>
                      <p className="text-center text-muted-foreground mt-2">
                        <a href="tel:+1234567890" className="hover:underline">
                          (123) 456-7890
                        </a>
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <MapPin className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Address</h3>
                      <p className="text-center text-muted-foreground mt-2">
                        DSCE campass
                        <br />
                       Kumarswamy Layout 
                        <br />
                        Bangalore
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center p-6">
                      <Clock className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold">Hours</h3>
                      <p className="text-center text-muted-foreground mt-2">
                        Monday - Friday: 9am - 5pm
                        <br />
                        Saturday: 10am - 2pm
                        <br />
                        Sunday: Closed
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2 pt-4">
                  <h3 className="text-xl font-bold">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Find Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Visit our office on campus</p>
              </div>
              <div className="w-full overflow-hidden rounded-lg border bg-background shadow-sm">
                <div className="aspect-[16/9] w-full">
                  
                  <div className="flex h-full w-full items-center justify-center bg-muted p-8">
                    <p className="text-center text-muted-foreground">
                      Interactive map would be displayed here.
                      <br />
                      For implementation, you can use Google Maps, Mapbox, or another mapping service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter">Find Us</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Visit our office on campus
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-lg border bg-background shadow-sm">
        <div className="aspect-[16/9] w-full">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.5542719140126!2d77.56398017484025!3d12.909158287400535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1741346119492!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find quick answers to common questions
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">How do I place an order?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Browse our menu, select the items you want, add them to your cart, and proceed to checkout. You
                      can select your preferred pickup time during checkout.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
                    <p className="mt-2 text-muted-foreground">
                      We accept credit/debit cards, campus meal plans, and mobile payment options like Apple Pay and
                      Google Pay.
                    </p>
                  </CardContent>
                </Card>
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
              </div>
              <div>
                <Link href="/faq">
                  <Button variant="outline">View All FAQs</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

