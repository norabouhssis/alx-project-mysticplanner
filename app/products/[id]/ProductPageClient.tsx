"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/app/interfaces/index";
import { ProductDetails } from "@/app/components/product/ProductDetails";

export default function ProductPageClient({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div>
      <ProductDetails product={product} />

      <button
        onClick={() => router.push("/products")}
        className="mt-4 rounded bg-purple-500 px-4 py-2 text-white"
      >
        Back to Planners
      </button>
    </div>
  );
}
