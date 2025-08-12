import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface CategoriesCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  Image?: React.ReactNode;
}

export const CategoriesCard = ({
  Image,
  label,
  className,
  ...props
}: CategoriesCardProps) => {
  const base =
    "rounded-l h-[373px] flex-1 aspect-[61/79]";
  return (
    <div
      className={clsx(
        base,
        Image,
        className
      )}
      {...props}
    >
        <Image src="" alt="" className="w-full h-full object-cover rounded-l" />
  <div className="flex-shrink-0 w-[17.8125rem] h-[23.3125rem]">
  </div>
  <div className="flex items-center gap-3 pt-[var(--V-padding,] pb-[var(--H-padding,] pl-[24px)] pr-[16px)] py-4 px-6 w-[16.5rem] rounded-xl bg-white">
    <div className="label " lobster two")'] 20px)] 700)] text-[#ac18ca] font-['var(--headings-subheading-family, text-[var(--text-subheading, font-[var(--headings-subheading-weight, leading-[120%]">Family &amp; Personal Interests</div>
    <svg width={32} height={33} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8297 5.94279C10.529 6.24355 10.3601 6.65141 10.3601 7.07669C10.3601 7.50197 10.529 7.90984 10.8297 8.2106L18.7686 16.1496L10.8297 24.0885C10.5375 24.391 10.3759 24.7961 10.3795 25.2166C10.3832 25.6372 10.5519 26.0394 10.8492 26.3368C11.1466 26.6342 11.5488 26.8028 11.9694 26.8065C12.3899 26.8101 12.795 26.6485 13.0975 26.3563L22.1704 17.2835C22.471 16.9827 22.6399 16.5748 22.6399 16.1496C22.6399 15.7243 22.471 15.3164 22.1704 15.0156L13.0975 5.94279C12.7967 5.64211 12.3889 5.47321 11.9636 5.47321C11.5383 5.47321 11.1304 5.64211 10.8297 5.94279Z" fill="#AC18CA" />
    </svg>
  </div>
</div>
  );
};
