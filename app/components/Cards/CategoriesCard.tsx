import React from "react";
import { Button } from "../UI/Button";
import { ChevronRight } from "lucide-react";

type CategoriesCardrops = {
  imageSrc: string;
  label: string;
};

export default function CategoriesCard({
  imageSrc,
  label,
}: CategoriesCardrops) {
  return (
    <div
      className="rounded-l flex-shrink-0 w-[288px] h-[373px] flex flex-col justify-center items-center aspect-[61/79] bg-[position:50%] bg-cover bg-no-repeat pt-[284px] pb-[9px] px-[12px]"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <Button
        variant="type3"
        color="primary"
        size="lg"
        pill="false"
        iconPosition="right"
        label={label}
        Icon={<ChevronRight />}
        className="flex w-[264px] h-[84px] py-4 px-6 items-center gap-3"
      />
    </div>
  );
}
