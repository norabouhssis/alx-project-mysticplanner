// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import { Review } from "@/app/interfaces/index";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const reviews: Review[] = [
    {
      id: "r1",
      customer: "Sara B.",
      time: "2025-08-10T14:32:00Z",
      title: "Love this planner!",
      comment:
        "The Mystic Floral Planner helps me stay organized every day. The design is so calming, and the paper quality is excellent.",
      avatar: "/assets/reviews/r1/avatar.jpg",
      images: [
        "/assets/reviews/r1/Image1.jpg",
        "/assets/reviews/r1/Image2.jpg",
        "/assets/reviews/r1/Image3.jpg",
      ],
      rating: 5,
      productId: "p1",
    },
    {
      id: "r2",
      customer: "Ahmed K.",
      time: "2025-08-12T09:15:00Z",
      title: "Very practical",
      comment:
        "I bought the Classic Planner and it’s perfect for work. The weekly layout is just what I needed to keep track of meetings.",
      avatar: "/assets/reviews/r2/avatar.jpg",
      images: [],
      rating: 4,
      productId: "p1",
    },
    {
      id: "r3",
      customer: "Lina M.",
      time: "2025-08-15T18:45:00Z",
      title: "Cute but a bit small",
      comment:
        "The Mini Planner is adorable and fits in my bag easily. I just wish the writing space was a little bigger.",
      avatar: "/assets/reviews/r3/avatar.jpg",
      images: [],
      rating: 3,
      productId: "p1",
    },
    {
      id: "r4",
      customer: "John D.",
      time: "2025-08-18T11:05:00Z",
      title: "Great for meal prep",
      comment:
        "The Meal & Recipe Planner has made cooking so much easier. I can plan weekly menus and shopping lists effortlessly.",
      avatar: "/assets/reviews/r4/avatar.jpg",
      images: [],
      rating: 5,
      productId: "p2",
    },
    {
      id: "r5",
      customer: "Maya R.",
      time: "2025-08-20T21:20:00Z",
      title: "Good but pricey",
      comment:
        "The Wellness Planner is really useful for tracking habits and mood, but I think the price is a little high.",
      avatar: "/assets/reviews/r5/avatar.jpg",
      images: [],
      rating: 4,
      productId: "p2",
    },
  ];

  const productReviews = reviews.filter((review) => review.productId === id);

  return NextResponse.json(productReviews);
}
