"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { mockCategories } from "@/lib/mock-data"

export function MenuFilters() {
  const [priceRange, setPriceRange] = useState([0, 20])
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handlePriceChange = (value) => {
    setPriceRange(value)
  }

  const handleReset = () => {
    setPriceRange([0, 20])
    setSelectedCategories([])
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-medium">Categories</h3>
        <div className="space-y-2">
          {mockCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => handleCategoryChange(category.id)}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm font-normal">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Price Range</h3>
        <Slider
          defaultValue={[0, 20]}
          max={20}
          step={0.5}
          value={priceRange}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">${priceRange[0].toFixed(2)}</span>
          <span className="text-sm">${priceRange[1].toFixed(2)}</span>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-lg font-medium">Dietary Preferences</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="vegetarian" />
            <Label htmlFor="vegetarian" className="text-sm font-normal">
              Vegetarian
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="vegan" />
            <Label htmlFor="vegan" className="text-sm font-normal">
              Vegan
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="gluten-free" />
            <Label htmlFor="gluten-free" className="text-sm font-normal">
              Gluten Free
            </Label>
          </div>
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={handleReset}>
        Reset Filters
      </Button>
    </div>
  )
}

