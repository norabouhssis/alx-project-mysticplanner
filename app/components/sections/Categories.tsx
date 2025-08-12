"use client";
import React from "react";
import { MapPin, HeartIcon } from "lucide-react";

export default function Categories() {
  return (
    <div className="flex w-full py-15 px-24 flex-col items-center gap-10">
      <p>
        <span className="text-greyScaleText-body">Explore Our</span>{" "}
        <span className="text-primaryText">Collections</span>
      </p>
    </div>
  );
}
