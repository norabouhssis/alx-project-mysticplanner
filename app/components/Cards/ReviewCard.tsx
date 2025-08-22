import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Review } from "@/app/interfaces";

export function ReviewCard({
  title,
  comment,
  images,
  avatar,
  customer,
  rating,
  time,
}: Review) {
  return (
    <div className="w-[350px] flex flex-col items-start gap-[26px] rounded-[20px] border-b-2 border-primarySurface bg-greyScaleSurface p-[44px_30px] boxshadow">
      <div className="flex items-start self-stretch gap-[10px]">
        <Image src="/assets/quotes.png" alt="quotes" width={48} height={34} />
        <p className="text-heading text-greyScaleText-body">“{title}”</p>
      </div>
      <div className="flex flex-col items-start self-stretch gap-[10px]">
        <p className="text-body text-greyScaleText-body">{comment}</p>
        <div
          className={`flex flex-row justify-center items-start gap-[15px] self-stretch 
    ${
      images.length === 0
        ? "h-[81px] bg-greyScaleSurface border border-dashed border-greyScaleBorder-subtle rounded-lg"
        : ""
    }`}
        >
          {images.length > 0 ? (
            images.map((src, i) => (
              <div
                key={i}
                className="w-[81px] h-[81px] rounded-lg overflow-hidden cursor-pointer relative"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))
          ) : (
            <p className="text-greyScaleText-disabled text-caption flex items-center justify-center w-full">
              No images available
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start gap-[15px] self-stretch bg-greyScaleSurface py-[10px]">
        <Image
          src={avatar}
          alt={customer}
          width={54}
          height={54}
          className="rounded-full"
        />
        <div>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primarySurface" />
            ))}
          </div>
          <div className="flex items-center">
            <p className="text-bodyBold text-primaryText">{customer}</p>
            <p className="text-bodySmall text-greyScaleText-subtitle">
              {time} ago
            </p>
          </div>
          <p className="text-bodyMedium text-greyScaleText-subtitle">
            Happy Client
          </p>
        </div>
      </div>
    </div>
  );
}
