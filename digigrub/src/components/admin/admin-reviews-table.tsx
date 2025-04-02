"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Trash2, Flag, MessageSquare } from "lucide-react"

// Mock data for reviews
const mockReviews = [
  {
    id: "1",
    itemId: "1",
    itemName: "Cheese Burger",
    customerName: "John Doe",
    rating: 5,
    comment: "Absolutely delicious! The cheese was perfectly melted and the patty was juicy.",
    date: "2023-10-05T14:30:00Z",
    status: "published",
  },
  {
    id: "2",
    itemId: "2",
    itemName: "Veggie Pizza",
    customerName: "Jane Smith",
    rating: 4,
    comment: "Great pizza with fresh vegetables. Could use a bit more sauce though.",
    date: "2023-10-04T10:15:00Z",
    status: "published",
  },
  {
    id: "3",
    itemId: "3",
    itemName: "Caesar Salad",
    customerName: "Mike Johnson",
    rating: 2,
    comment: "The lettuce wasn't fresh and there was too much dressing.",
    date: "2023-10-03T16:45:00Z",
    status: "flagged",
  },
  {
    id: "4",
    itemId: "4",
    itemName: "Chocolate Cake",
    customerName: "Sarah Williams",
    rating: 5,
    comment: "Best chocolate cake I've ever had! So moist and rich.",
    date: "2023-10-02T13:20:00Z",
    status: "published",
  },
  {
    id: "5",
    itemId: "1",
    itemName: "Cheese Burger",
    customerName: "Alex Brown",
    rating: 3,
    comment: "It was okay. Nothing special but not bad either.",
    date: "2023-10-01T11:10:00Z",
    status: "pending",
  },
]

export function AdminReviewsTable() {
  const [reviews, setReviews] = useState(mockReviews)

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>
      case "flagged":
        return <Badge className="bg-red-500">Flagged</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  const approveReview = (reviewId) => {
    setReviews(reviews.map((review) => (review.id === reviewId ? { ...review, status: "published" } : review)))
    toast.success("Review approved", {
      description: "The review has been published.",
    })
  }

  const flagReview = (reviewId) => {
    setReviews(reviews.map((review) => (review.id === reviewId ? { ...review, status: "flagged" } : review)))
    toast.warning("Review flagged", {
      description: "The review has been flagged for further review.",
    })
  }

  const deleteReview = (reviewId) => {
    setReviews(reviews.filter((review) => review.id !== reviewId))
    toast.success("Review deleted", {
      description: "The review has been permanently deleted.",
    })
  }

  const respondToReview = (reviewId) => {
    toast.info("Respond to review", {
      description: "Opening response form for this review.",
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell className="font-medium">{review.itemName}</TableCell>
              <TableCell>{review.customerName}</TableCell>
              <TableCell>{renderStars(review.rating)}</TableCell>
              <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
              <TableCell>{new Date(review.date).toLocaleDateString()}</TableCell>
              <TableCell>{getStatusBadge(review.status)}</TableCell>
              <TableCell>
                <div className="flex flex-wrap items-center gap-1">
                  <Button
                    variant={review.status === "published" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => approveReview(review.id)}
                    title="Approve Review"
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span className="sr-only">Approve</span>
                  </Button>
                  <Button
                    variant={review.status === "flagged" ? "default" : "outline"}
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => flagReview(review.id)}
                    title="Flag Review"
                  >
                    <Flag className="h-3.5 w-3.5" />
                    <span className="sr-only">Flag</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => respondToReview(review.id)}
                    title="Respond to Review"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span className="sr-only">Respond</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 text-red-500 hover:bg-red-50 hover:text-red-600"
                    onClick={() => deleteReview(review.id)}
                    title="Delete Review"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

