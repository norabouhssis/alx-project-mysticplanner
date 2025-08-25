import React from "react";
import { useState } from "react";
import { Product } from "@/app/interfaces";
import { Tabs } from "@/app/components/Tabs";
import Image from "next/image";
import { Home, ShoppingCart, Minus, Plus, Heart, Star } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaCopy } from "react-icons/fa";
import { Button } from "@/app/components/UI/Button";
import { RatingStars } from "@/app/components/Cards/utils";
import { SIZES, COLORS } from "@/app/interfaces";
import { ProductCard } from "@/app/components/Cards/ProductCard";
import ReviewSection from "./ReviewSection";

export function ProductDetails({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );
  const related: Product[] = [
    {
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
    {
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
    {
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
  ];

  const [selectedImage, setSelectedImage] = useState(product.image.Image1);
  const [selectedColor, setSelectedColor] = useState(product.color);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Title section */}
      <TitleSection product={product} />

      {/* Product Section */}
      <main className="flex flex-col items-center gap-[50px] px-24 py-15 w-screen">
        <div className="flex flex-row items-center justify-center gap-8">
          {/* Left: Gallery */}
          <div className="flex flex-start gap-[20px]">
            {/* Thumbnails */}
            <div className="flex flex-col justify-center items-center gap-[8px] h-[570px] py-[20px]">
              {Object.values(product.image).map((src: string, i: number) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(src)}
                  className={`w-[117px] h-[110px] rounded-lg border-2 border-solid overflow-hidden cursor-pointer relative 
              ${selectedImage === src
                      ? "border-primaryBorder-lighter"
                      : "border-primaryBorder"
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex flex-col justify-center shrink-0 items-center self-stretch w-[600px] h-[571px] rounded-lg relative">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col items-start gap-[20px] w-[445px]">
            <RatingStars rating={product.rating} />
            <p className="text-heading text-greyScaleText-body">
              {product.title}
            </p>
            <p className="text-subheading text-accent1Text">
              {product.price} MAD
            </p>
            <p className="text-bodyMedium text-greyScaleText-body">
              {product.description}
            </p>
            {/* Sizes */}
            <div className="flex items-start justify-between self-stretch">
              <div className="flex flex-col items-start gap-4">
                <p className="text-subheading text-greyScaleText-title">Size</p>
                <ul className="flex justify-center flex-row items-start self-stretch gap-[10px]">
                  {SIZES.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li
                        key={s.id}
                        className="flex flex-col justify-center items-center rounded-m bg-greyScaleSurface w-[46px] py-1"
                      >
                        <div className="flex justify-center items-center gap-[10px] w-[46px]">
                          <Icon className="w-[37.25px] h-[51px] shrink-0" />
                        </div>
                        <label
                          htmlFor={`size-${s}`}
                          className="text-bodyMedium text-greyScaleText-title"
                        >
                          {s.title}
                        </label>
                        <label
                          htmlFor={`size-${s}`}
                          className="text-caption text-greyScaleText-title text-center w-full"
                        >
                          {s.subtitle}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4 w-[152px]">
                <p className="text-subheading text-greyScaleText-title">
                  Color
                </p>
                <div className="flex flex-row items-start gap-[4px] self-stretch flex-wrap">
                  {COLORS.map((c) => (
                    <div
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className="w-[32px] h-[32px] border-1 stroke-1 border-greyScaleBorder rounded-full flex items-center justify-center"
                    >
                      <span
                        className={`shrink-0 rounded-[18px]
              ${selectedColor === c ? "w-[24px] h-[24px]" : "w-[18px] h-[18px]"
                          }`}
                        style={{ backgroundColor: c }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Add to cart */}
            <div className="flex flex-row items-center justify-between self-stretch pt-[20px] border-t-1 border-t-solid border-t-greyScaleBorder">
              <div className="flex justify-center items-center gap-[10px] bg-greyScaleSurface-subtle rounded-bl-3xl">
                <Button
                  variant="type3"
                  color="primary"
                  size="md"
                  pill="true"
                  iconPosition="alone"
                  Icon={<Minus />}
                />
                <p className="w-[24px] text-bodyBold text-greyScaleText-body text-center">
                  1
                </p>
                <Button
                  variant="type1"
                  color="primary"
                  size="md"
                  pill="true"
                  iconPosition="alone"
                  Icon={<Plus />}
                />
              </div>
              <Button
                variant="type1"
                color="primary"
                size="md"
                pill="true"
                label="Add to cart"
                iconPosition="right"
                Icon={<ShoppingCart />}
              />
            </div>
            <div className="flex flex-row items-center justify-between self-stretch pt-[20px] border-t-1 border-t-solid border-t-greyScaleBorder">
              <div className="flex justify-center items-center gap-[10px] bg-greyScaleSurface-subtle rounded-bl-3xl">
                <Heart className="w-[20px] h-[20px]" />
                <p className="w-full text-bodySmall text-greyScaleText-body text-center">
                  Add to wishlist
                </p>
              </div>
              <div className="flex justify-center items-center gap-[10px]">
                <p className="text-bodyMedium text-greyScaleText-body">
                  Share product on
                </p>
                <div className="flex justify-center items-center gap-[5px]">
                  <FaCopy className="w-[20px] h-[20px]" />
                  <FaFacebook className="w-[20px] h-[20px]" />
                  <FaInstagram className="w-[20px] h-[20px]" />
                  <FaTwitter className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="flex items-center self-stretch gap-[42px] border-b-1 border-b-solid border-b-greyScaleBorder"
        >
          <nav className="flex items-center self-stretch gap-[42px] border-b-1 border-b-solid border-b-greyScaleBorder">
            <div
              onClick={() => setActiveTab("features")}
              className={`flex justify-center items-start h-[41px] hover:border-b-3 hover:border-b-solid hover:border-b-primaryBorder-lighter ${activeTab === "features"
                ? "border-b-3 border-b-solid border-b-primaryBorder"
                : ""
                }`}
            >
              <p
                className={`text-bodyBold hover:text-primaryText-lighter ${activeTab === "features"
                  ? "text-primaryText"
                  : "text-greyScaleText-body"
                  }`}
              >
                Features
              </p>
            </div>
            <div
              onClick={() => setActiveTab("reviews")}
              className={`flex justify-center items-start h-[41px] hover:border-b-3 hover:border-b-solid hover:border-b-primaryBorder-lighter ${activeTab === "reviews"
                ? "border-b-3 border-b-solid border-b-primaryBorder"
                : ""
                }`}
            >
              <p
                className={`text-bodyBold hover:text-primaryText-lighter ${activeTab === "reviews"
                  ? "text-primaryText"
                  : "text-greyScaleText-body"
                  }`}
              >
                Reviews
              </p>
            </div>
          </nav>
        </Tabs>

        {/* Tab Content */}
        <div className="flex items-start self-stretch w-full gap-[10px]">
          {activeTab === "features" && (
            <p className="text-bodyBase text-greyScaleText-body">
              {product.description}
            </p>
          )}
          {activeTab === "reviews" && (
            <section className="flex flex-col items-center self-stretch py-[40px] w-full gap-[40px] border-b-1 border-b-solid border-b-greyScaleBorder">
              {/* Review Summary */}
              <div className="flex flex-row justify-center items-center gap-[32px]">
                {/* Average Rating */}
                <div className="flex flex-col items-center justify-center p-[32px] gap-[12px] rounded-lg bg-primarySurface-subtle">
                  <p className="w-[232px] h-[59px] text-center text-title text-greyScaleText-body">
                    {product.rating}
                  </p>
                  <div className="flex items-center w-[128px] h-[24px] gap-[3px]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4
                          ? "fill-primarySurface"
                          : "fill-greyScaleSurface"
                          }`}
                      />
                    ))}
                  </div>
                  <p className="w-[232px] text-bodyBold text-greyScaleText-body">
                    Customers Rating (934,516)
                  </p>
                </div>

                {/* Ratings Breakdown */}
                <div className="flex flex-col items-start gap-[16px]">
                  {[5, 4, 3, 2, 1].map((stars, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-[16px] w-[655px]"
                    >
                      {/* Stars */}
                      <div className="flex text-primarySurface">
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 ${j < stars ? "fill-primarySurface" : "fill-none"
                              }`}
                          />
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div className="flex-1 h-2 bg-greyScaleSurface rounded">
                        <div
                          className="h-2 bg-primarySurface rounded"
                          style={{ width: `${[63, 24, 9, 1, 7][i]}%` }}
                        />
                      </div>

                      {/* Percentage */}
                      <span className="text-bodySmall text-greyScaleText-body">
                        {[63, 24, 9, 1, 7][i]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Cards */}
              <div className="flex flex-row items-start justify-center flex-wrap px-[79px] gap-[20px]">
                <ReviewSection productId={product.id} />
              </div>
            </section>
          )}
        </div>

        {/* Related Products */}
        <div className="flex flex-col items-center gap-[40px] self-stretch">
          <p className="flex flex-row justify-center self-stretch h-[75px] text-center text-title">
            <span className="text-greyScaleText-body">More to</span>
            <span className="text-primaryText">Love</span>
          </p>
          <p className="text-subheading text-greyScaleText-body">
            Discover the favorites that keep our customers coming back for more.
          </p>
          <div className="flex flex-row justify-center items-center gap-[20px]">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* Title section */
const TitleSection = ({ product }: { product: Product }) => (
  <div className="flex flex-col items-center w-full px-24 py-15 gap-3 herobackground ">
    <div className="flex items-center gap-[10px] px-[35px] py-2 rounded-m bg-greyScaleSurface boxshadow">
      <Home className="w-4 h-4 text-greyScaleText-title" />
      <p className="text-bodyMediumBold text-greyScaleText-title">Home</p>
      <p className="text-bodyMediumBold text-greyScaleText-title">/</p>
      <p className="text-bodyMediumBold text-greyScaleText-title">Planners</p>
      <p className="text-bodyMediumBold text-greyScaleText-title">/</p>
      <div className="flex items-start justify-center border-b-2 border-b-solid border-b-accent1Border">
        <p className="text-bodyMediumBold text-accent1Text">{product.title}</p>
      </div>
    </div>
  </div>
);
