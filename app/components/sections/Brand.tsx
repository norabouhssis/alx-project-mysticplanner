"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

export default function Brand() {
  return (
    <div className="flex flex-row content-center items-center justify-center gap-[32px] flex-wrap px-24 py-15">
      <div className="flex flex-col items-start justify-center gap-[32px] min-w-109 flex-[1_0_0]">
        <p className="text-display text-greyScaleText-title">
          Discover the Joy of Planning
        </p>
        <p className="text-subheading text-greyScaleText-body">
          Our notebook planners blend elegance and functionality, empowering
          your creativity and productivity while turning ideas into beautifully
          organized plans
        </p>
        <Button
          variant="type1"
          color="accent1"
          size="lg"
          pill="true"
          iconPosition="right"
          label="Browse Our Planners"
          Icon={<ChevronRight />}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-[483px] px-[5px] min-w-109 w-[608px]">
        <Image
          src={"/assets/Hero.png"}
          alt="Hero Image"
          width={608}
          height={483}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
