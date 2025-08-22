// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import { Product } from "@/app/interfaces/index";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Mock database
  const products: Record<string, Product> = {
    p1: {
      id: "p1",
      title: "Mystic Floral Planner",
      description:
        "A big vertical planner with soft floral patterns for mindful daily planning.",
      price: 249,
      rating: 4.5,
      theme: "Floral",
      size: "Big",
      layout: "Vertical",
      color: "Red",
      image: {
        Image1: "/assets/planners/p1/Image1.jpg",
        Image2: "/assets/planners/p1/Image2.jpg",
        Image3: "/assets/planners/p1/Image3.jpg",
        Image4: "/assets/planners/p1/Image4.jpg",
      },
      createdAt: "2025-07-01T09:30:00.000Z",
    },
    p2: {
      id: "p2",
      title: "Bold & Bright Classic",
      description:
        "Colorful and vibrant planner designed to keep your energy high throughout the year.",
      price: 199,
      rating: 4.7,
      theme: "Bold & Bright",
      size: "Classic",
      layout: "Dashboard",
      color: "Black",
      image: {
        Image1: "/assets/planners/p2/Image1.jpg",
        Image2: "/assets/planners/p2/Image2.jpg",
        Image3: "/assets/planners/p2/Image3.jpg",
        Image4: "/assets/planners/p2/Image4.jpg",
      },
      createdAt: "2025-07-15T11:00:00.000Z",
    },
    p3: {
      id: "p3",
      title: "Stargazer Skinny Layout",
      description:
        "Compact skinny planner with cosmic stargazer theme for dreamers and night owls.",
      price: 159,
      rating: 4.2,
      theme: "Stargazer",
      size: "Skinny",
      layout: "Checklist",
      color: "Black",
      image: {
        Image1: "/assets/planners/p3/Image1.jpg",
        Image2: "/assets/planners/p3/Image2.jpg",
        Image3: "/assets/planners/p3/Image3.jpg",
        Image4: "/assets/planners/p3/Image4.jpg",
      },
      createdAt: "2025-06-25T14:20:00.000Z",
    },
    p4: {
      id: "p4",
      title: "Pets Prints Mini Planner",
      description:
        "Mini planner decorated with playful pet paw prints, ideal for pet lovers.",
      price: 129,
      rating: 4.8,
      theme: "Pets prints",
      size: "Mini",
      layout: "Horizontal",
      color: "Yellow",
      image: {
        Image1: "/assets/planners/p4/Image1.jpg",
        Image2: "/assets/planners/p4/Image2.jpg",
        Image3: "/assets/planners/p4/Image3.jpg",
        Image4: "/assets/planners/p4/Image4.jpg",
      },
      createdAt: "2025-05-10T08:45:00.000Z",
    },
    p5: {
      id: "p5",
      title: "Wellness & Self-care Dashboard",
      description:
        "Planner designed with wellness prompts, affirmations, and daily mood tracking.",
      price: 229,
      rating: 4.6,
      theme: "Wellness & Self-care",
      size: "Classic",
      layout: "Dashboard",
      color: "Green",
      image: {
        Image1: "/assets/planners/p5/Image1.jpg",
        Image2: "/assets/planners/p5/Image2.jpg",
        Image3: "/assets/planners/p5/Image3.jpg",
        Image4: "/assets/planners/p5/Image4.jpg",
      },
      createdAt: "2025-06-05T10:00:00.000Z",
    },
    p6: {
      id: "p6",
      title: "Work Life Color Block",
      description:
        "Professional planner with structured layouts and bold color blocks for focus.",
      price: 279,
      rating: 4.3,
      theme: "Work life",
      size: "Big",
      layout: "Color block",
      color: "White",
      image: {
        Image1: "/assets/planners/p6/Image1.jpg",
        Image2: "/assets/planners/p6/Image2.jpg",
        Image3: "/assets/planners/p6/Image3.jpg",
        Image4: "/assets/planners/p6/Image4.jpg",
      },
      createdAt: "2025-08-01T12:15:00.000Z",
    },
  };

  if (!products[id]) {
    return NextResponse.json({ message: "Planner not found" }, { status: 404 });
  }

  return NextResponse.json(products[id]);
}
