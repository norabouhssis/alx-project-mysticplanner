"use client";
import React from "react";
import Image from "next/image";

export default function Delivery() {
  return (
    <div className="flex h-[604.069px] py-15 px-24 justify-between items-center bg-headerGradient">
      <div className="flex flex-col justify-center items-start flex-1-0-0 pl-[75px]">
        <Image
          src={"/assets/Delivery.png"}
          alt="Delivery Image"
          fill
          className="self-stretch aspect-[157/100]"
        />
      </div>
    </div>
  );
}
