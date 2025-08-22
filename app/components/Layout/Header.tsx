"use client";
import React from "react";
import { useState } from "react";
import { Search, Bell, Heart, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/HeaderLogo.svg";

interface HeaderProps {
  status: "loggedIn" | "loggedOut";
}

export default function Header({ status }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{ width: `${width}px` }}
      className="flex justify-between items-center px-24 py-6.25 w-full headerbackground"
    >
      {/* Nav */}
      <nav className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-10 relative">
          {status === "loggedIn" ? (
            <Image
              src="/assets/Avatar.png"
              width={55}
              height={55}
              alt="User Avatar"
              className="rounded-full"
            />
          ) : (
            <div className="flex justify-center items-center border border-primaryBorder bg-greyScaleSurface rounded-full w-13.75 h-13.75 p-2 gap-1 aspect-square">
              <User className="w-4 h-4 text-greyScaleText-title hover:text-primaryText-lighter focus:text-primaryText" />
            </div>
          )}
          <button
            className="flex justify-center items-center gap-0.5 text-body font-medium font-body text-greyScaleText-title hover:text-primaryText-lighter focus:text-primaryText"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Shop ▾
          </button>
          {isDropdownOpen && (
            <div className="flex flex-col items-start w-[300px] rounded-l border-t-[2px] border-t-primary-border-lighter bg-greyScale-surface-default shadow-[0_2px_73px_2px_rgba(0,0,0,0.10)] absolute top-full mt-2 z-10">
              {/* shop items */}
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Lifestyle & Daily Use Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Productivity &Learning Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Special Events & Travel Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Family & Personal Interests Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Notebooks
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Packs
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading font-bold font-title text-greyScaleText-title">
                Accessories
              </p>
            </div>
          )}
        </div>
        <a
          href="/contact"
          className="flex justify-center items-center gap-0.5 text-body font-medium font-body text-greyScaleText-title hover:text-primaryText-lighter focus:text-primaryText"
        >
          Contact us
        </a>
      </nav>

      {/* Logo */}
      <div className="flex items-center gap-2 w-[172px] h-[60.14px] flex-shrink-0 aspect-[143/50]">
        <div className="w-[172px] h-[60.14px] flex-shrink-0 aspect-[143/50]">
          <Logo className="w-full h-full" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex justify-end items-center gap-10 w-[236px] flex-shrink-0">
        <Search className="w-6 h-6 hover:text-primaryText-lighter cursor-pointer focus:primaryText" />

        {status === "loggedIn" ? (
          <>
            <Bell className="w-6 h-6 hover:text-primaryText-lighter cursor-pointer focus:primaryText" />
            <Heart className="w-6 h-6 hover:text-primaryText-lighter cursor-pointer focus:primaryText" />
          </>
        ) : (
          <>
            <ShoppingCart className="w-6 h-6 hover:text-primaryText-lighter cursor-pointer focus:primaryText" />
          </>
        )}
      </div>
    </header>
  );
}
