"use client";
import React from "react";
import CategoriesCard from "../Cards/CategoriesCard";

export default function Categories() {
  return (
    <div className="flex w-full py-15 px-24 flex-col items-center gap-10">
      <p>
        <span className="text-greyScaleText-body text-title">Explore Our</span>{" "}
        <span className="text-primaryText text-title">Collections</span>
      </p>
      <div className="flex flex-wrap items-start content-start justify-center self-stretch gap-10">
        <CategoriesCard
          imageSrc="/assets/categories/Category1.png"
          label="Lifestyle & Daily Use"
        />
        <CategoriesCard
          imageSrc="/assets/categories/Category2.png"
          label="Productivity &Learning"
        />
        <CategoriesCard
          imageSrc="/assets/categories/Category3.png"
          label="Special Events & Travel"
        />
        <CategoriesCard
          imageSrc="/assets/categories/Category4.png"
          label="Family & Personal Interests"
        />
      </div>
    </div>
  );
}
