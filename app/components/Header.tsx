"use client";
import { useState } from "react";
import { Search, Bell, Heart, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Logo from "../assets/HeaderLogo.svg";

interface HeaderProps {
  status: "loggedIn" | "loggedOut";
}

export default function Header({ status }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center max-w-[1440px] px-24 py-6.25 w-full bg-headerGradient">
      {/* Logo */}
      <div className="flex items-center gap-2  w-[172px] h-[60.14px] flex-shrink-0 aspect-[143/50]">
        <div className="w-[172px] h-[60.14px] flex-shrink-0 aspect-[143/50]">
          <Logo className="w-full h-full" />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex justify-center items-center gap-10">
        <div className="relative">
          {status === "loggedIn" ? (
            <Image
              src="./assets/Avatar.png"
              alt="User Avatar"
              className="rounded-full w-13.75 h-13.75"
            />
          ) : (
            <div className="flex justify-center items-center border border-primary-border-default bg-greyScale-surface-default rounded-full w-13.75 h-13.75 p-2 gap-1 aspect-square">
              <User className="w-4 h-4 text-greyScale-text-title hover:text-primary-text-lighter focus:text-primary-text-default" />
            </div>
          )}
          <button
            className="flex justify-center items-center gap-0.5 text-body-base text-greyScale-text-title hover:text-primary-text-lighter focus:text-primary-text-default"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Shop ▾
          </button>
          {isDropdownOpen && (
            <div className="flex flex-col items-start w-[300px] rounded-l border-t-[2px] border-t-primary-border-lighter bg-greyScale-surface-default shadow-[0_2px_73px_2px_rgba(0,0,0,0.10)] absolute top-full mt-2 z-10">
              {/* shop items */}
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Lifestyle & Daily Use Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Productivity &Learning Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Special Events & Travel Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Family & Personal Interests Planners
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Notebooks
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Packs
              </p>
              <p className="flex flex-col items-start self-stretch gap-[10px] text-subheading text-greyScale-text-title">
                Accessories
              </p>
            </div>
          )}
        </div>
        <a
          href="/contact"
          className="flex justify-center items-center gap-0.5 text-body-base text-greyScale-text-title hover:text-primary-text-lighter focus:text-primary-text-default"
        >
          Contact us
        </a>
      </nav>

      {/* Icons */}
      <div className="flex justify-end items-center gap-10 w-[236px] flex-shrink-0">
        <Search className="w-6 h-6 hover:text-primary-text-lighter cursor-pointer focus:primary-text-default" />

        {status === "loggedIn" ? (
          <>
            <Bell className="w-6 h-6 hover:text-primary-text-lighter cursor-pointer focus:primary-text-default" />
            <Heart className="w-6 h-6 hover:text-primary-text-lighter cursor-pointer focus:primary-text-default" />
          </>
        ) : (
          <>
            <ShoppingCart className="w-6 h-6 hover:text-primary-text-lighter cursor-pointer focus:primary-text-default" />
          </>
        )}
      </div>
    </header>
  );
}
