"use client";
import React from "react";
import { MapPin, HeartIcon } from "lucide-react";

export default function Brand() {
  return (
    <div className="flex h-78 py-15 px-24 justify-center items-center content-center gap-x-20 gap-y-10 flex-wrap bg-primarySurface-darker w-full">
      <div className="rounded-xl border-b-2 border-b-accent1Border-lighter bg-greyScaleSurface-subtle shadow-[0_12px_105px_12px_rgba(0,0,0,0.03)] flex px-12.5 py-5 flex-col justify-center items-center gap-[6px]">
        <HeartIcon className="w-15 h-15" />
        <p className="text-subtitle text-greyScaleText-title">Moroccan brand</p>
        <p className="text-bodyMedium text-greyScaleText-body">
          Every purchase helps our 100% Moroccan brand grow and shine
        </p>
      </div>
      <div className="rounded-xl border-b-2 border-b-accent1Border-lighter bg-greyScaleSurface-subtle shadow-[0_12px_105px_12px_rgba(0,0,0,0.03)] flex px-12.5 py-5 flex-col justify-center items-center gap-[6px]">
        <MapPin className="w-15 h-15" />
        <p className="text-subtitle text-greyScaleText-title">
          Original products
        </p>
        <p className="text-bodyMedium text-greyScaleText-body">
          We design and craft our products with love and the utmost care for
          quality
        </p>
      </div>
    </div>
  );
}
