import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { mockCategories } from "@/lib/mock-data"

export function CategoryCards() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 text-center">
      {mockCategories.map((category) => (
        <Link key={category.id} href={`/menu?category=${category.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-[4/3] relative">
              <Image
                src={category.image || "/placeholder.svg?height=225&width=300"}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-base sm:text-lg font-semibold">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.itemCount} items</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

