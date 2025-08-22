import React from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../UI/Button";
import { RatingStars, toCurrencyMAD } from "./utils";
import { Product } from "@/app/interfaces";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col items-start shrink-0 w-[288px] h-[460px] min-w-[241px] p-[10px] gap-[5px] bg-greyScaleSurface rounded-lg boxshadow overflow-hidden">
      <div className="flex flex-col justify-center shrink-0 items-center self-stretch min-w-[185px] w-[268px] h-[297px] relative">
        <Image
          src={product.image.Image1}
          alt={product.title}
          fill
          className="object-cover"
        />
        <Button
          variant="type2"
          color="primary"
          size="md"
          pill="true"
          iconPosition="alone"
          Icon={<Heart />}
          aria-label="Add to wishlist"
          className="absolute left-[10px] top-[10px]"
        />
      </div>
      <div className="flex flex-col items-start self-stretch min-w-[165px] gap-[5px]">
        <div className="flex flex-col items-start self-stretch">
          <p className="text-subheading text-greyScaleText-body">
            {product.title}
          </p>
          <p className="text-bodyMedium text-greyScaleText-body">
            {product.description}
          </p>
          <RatingStars rating={product.rating} />
        </div>
        <div className="flex items-center self-stretch justify-between h-[30px]">
          <span className="text-bodyBold text-primaryText">
            {toCurrencyMAD(product.price)}
          </span>
          <Button
            variant="type1"
            color="primary"
            size="md"
            pill="true"
            iconPosition="alone"
            Icon={<ShoppingCart />}
          />
        </div>
      </div>
    </article>
  );
}

export function ProductCardRow({ product }: { product: Product }) {
  return (
    <article className="group flex flex-row items-center w-full self-stretch gap-[40px] py-[10px] pl-[10px] pr-[20px] bg-greyScaleSurface rounded-lg boxshadow overflow-hidden">
      <div className="flex flex-col justify-center shrink-0 items-center w-[283px] h-[220px] relative">
        <Image
          src={product.image.Image1}
          alt={product.title}
          fill
          className="object-cover"
        />
        <Button
          variant="type2"
          color="primary"
          size="md"
          pill="true"
          iconPosition="alone"
          Icon={<Heart />}
          aria-label="Add to wishlist"
          className="absolute left-[10px] top-[10px]"
        />
      </div>
      <div className="flex flex-row justify-between items-center gap-[40px] flex-1">
        <div className="flex flex-col items-center flex-1 gap-[5px]">
          <div className="flex flex-col items-center self-stretch">
            <p className="text-subheading text-greyScaleText-body">
              {product.title}
            </p>
            <p className="text-bodyMedium text-greyScaleText-body">
              {product.description}
            </p>
            <RatingStars rating={product.rating} />
          </div>
          <div className="flex items-center justify-center w-[301px] pt-[10px] gap-0.5">
            <span className="text-bodyBold text-primaryText">
              {toCurrencyMAD(product.price)}
            </span>
          </div>
        </div>
        <Button
          variant="type1"
          color="primary"
          size="md"
          pill="true"
          iconPosition="alone"
          Icon={<ShoppingCart />}
        />
      </div>
    </article>
  );
}

export function ProductCardBig({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col items-center shrink-0 w-[458px] h-[430px] p-[10px] gap-[10px] bg-greyScaleSurface rounded-lg boxshadow overflow-hidden">
      <div className="flex flex-col justify-center shrink-0 items-center w-[283px] h-[220px] relative">
        <Image
          src={product.image.Image1}
          alt={product.title}
          fill
          className="object-cover"
        />
        <Button
          variant="type2"
          color="primary"
          size="md"
          pill="true"
          iconPosition="alone"
          Icon={<Heart />}
          aria-label="Add to wishlist"
          className="absolute left-[10px] top-[10px]"
        />
      </div>
      <div className="flex flex-col items-center min-w-[268px] gap-[5px] self-stretch">
        <div className="flex flex-col items-center self-stretch">
          <p className="text-subheading text-greyScaleText-body">
            {product.title}
          </p>
          <p className="text-bodyMedium text-greyScaleText-body h-[42px]">
            {product.description}
          </p>
          <RatingStars rating={product.rating} />
        </div>
        <div className="flex items-center justify-center w-[301px] pt-[10px] gap-0.5">
          <span className="text-bodyBold text-primaryText">
            {toCurrencyMAD(product.price)}
          </span>
        </div>
      </div>
      <Button
        variant="type1"
        color="primary"
        size="md"
        pill="true"
        iconPosition="right"
        Icon={<ShoppingCart />}
        label="Add to cart"
      />
    </article>
  );
}
