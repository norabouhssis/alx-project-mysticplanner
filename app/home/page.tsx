"use client";
import React from "react";
import { ChevronRight, MapPin, HeartIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../components/UI/Button";
import CategoriesCard from "../components/Cards/CategoriesCard";
import Facebook from "../../assets/socialMedia/Facebook.svg";
import FacebookHover from "../../assets/socialMedia/FacebookHover.svg";
import Twitter from "../../assets/socialMedia/Twitter.svg";
import Instagram from "../../assets/socialMedia/Instagram.svg";
import TwitterHover from "../../assets/socialMedia/TwitterHover.svg";
import InstagramHover from "../../assets/socialMedia/InstagramHover.svg";

/* Hero section */
const HeroSection = () => {
  return (
    <div className="flex flex-row content-center items-center justify-center gap-[32px] flex-wrap px-24 py-15 herobackground">
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
};

/* Brand section */
const BrandSection = () => {
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
};

/* Categories section */
const CategoriesSection = () => {
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
};

/* Delivery section */
const DeliverySection = () => {
  return (
    <div className="flex flex-row content-center items-center justify-center gap-[32px] flex-wrap px-24 py-15 herobackground">
      <div className="flex flex-col items-start justify-center pl-[175px] flex-1">
        <Image
          src={"/assets/Delivery.png"}
          alt="Delivery Image"
          height={484.069}
          width={760}
          className="self-stretch object-cover ratio-[157/100]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-[30px]">
        <div className="flex flex-col items-center justify-center gap-[10px] px-[49px] py-[19px] border-[10px] border-solid border-b-purple-950">
          <p className="align-center text-subtitle">
            <span className="text-greyScaleText-title">We deliver to all</span>{" "}
            <span className="text-primaryText">MORROCO</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-[25px]">
          <p className="align-center text-subtitle text-greyScaleText-title">
            Payment on delivery or by credit card
          </p>
        </div>
        <Button
          variant="type1"
          color="primary"
          size="lg"
          pill="false"
          iconPosition="none"
          label="Browse for delivery details"
          className="flex px-[64px] py-[14px] items-center rounded-s text-subtitle"
        />
      </div>
    </div>
  );
};

/* SocialMedia section */
const SocialMediaSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-15 px-24 gap-10 bg-greyScale-surface">
      <p>
        <span className="text-greyScaleText-body text-title">Folow us on </span>{" "}
        <span className="text-primaryText text-title">the internet</span>
      </p>
      <div className="h-[131px] self-stretch flex flex-row justify-center">
        <div className="shrink-0 rounded-full w-[60px] h-[60px] bg-accent1Surface"></div>
        <div className="flex flex-col justify-center items-center gap-8 shrink-0 w-[1128px] h-[100px]">
          <p className="flex flex-col justify-center items-center shrink-0 self-stretch h-[26px] text-greyScaleText-subtitle text-subheading">
            Join our online communities for updates, special deals, and more!
          </p>
          <div className="flex justify-center items-center self-stretch gap-8">
            <div className="group relative w-[60px] h-[60px] cursor-pointer">
              <Facebook className="absolute inset-0 w-full h-full group-hover:hidden" />
              <FacebookHover className="absolute inset-0 w-full h-full hidden group-hover:block" />
            </div>
            <div className="group relative w-[60px] h-[60px] cursor-pointer">
              <Instagram className="absolute inset-0 w-full h-full group-hover:hidden" />
              <InstagramHover className="absolute inset-0 w-full h-full hidden group-hover:block" />
            </div>
            <div className="group relative w-[60px] h-[60px] cursor-pointer">
              <Twitter className="absolute inset-0 w-full h-full group-hover:hidden" />
              <TwitterHover className="absolute inset-0 w-full h-full hidden group-hover:block" />
            </div>
          </div>
        </div>
        <div className="shrink-0 rounded-full w-[60px] h-[60px] bg-primarySurface mt-[40px]"></div>
      </div>
    </div>
  );
};

/* Main page */
const HomePage = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ width: `${width}px` }}
      className="flex flex-col justify-end items-start"
    >
      <HeroSection />
      <BrandSection />
      <CategoriesSection />
      <DeliverySection />
      <SocialMediaSection />
    </div>
  );
};

export default HomePage;
