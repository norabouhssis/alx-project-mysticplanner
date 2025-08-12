"use client";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Brand from "./components/sections/Brand";
import Categories from "./components/sections/Categories";
import Delivery from "./components/sections/Delivery";
import BestSellers from "./components/sections/BestSellers";
import SocialMedia from "./components/sections/SocialMedia";

export default function Home() {
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
      <Header status="loggedIn" />
      <Hero />
      <Brand />
      <Categories />
      <Delivery />
      <BestSellers />
      <SocialMedia />
      <Footer />
    </div>
  );
}
