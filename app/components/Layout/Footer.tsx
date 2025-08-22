"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/FooterLogo.svg";
import { Button } from "../UI/Button";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col gap-10 px-37.5 pt-20 w-full bg-primarySurface relative">
      <div className="flex justify-center flex-row items-center gap-21 w-full self-stretch flex-wrap">
        <div className="flex justify-center items-center gap-21 w-min self-stretch flex-wrap min-w-[525px]">
          {/* Logo */}
          <div className="w-[222px] h-[77.622px] min-w-[222px] m-h-[77.622px] aspect-[143/50]">
            <Logo className="w-full h-full" />
          </div>

          {/* Nav */}
          <div className="flex justify-center items-center flex-col w-[222px] min-w-[222px] gap-6 p-[10px]">
            <p className="text-heading text-greyScaleText-negative">
              Navigation
            </p>
            {/* Nav items */}
            <div className="flex flex-wrap items-center gap-[32px]">
              <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="flex flex-col text-center justify-center w-2 h-2 bg-accent1Surface-lighter rounded-full"></span>
                  <p className="text-body text-greyScaleText-negative">Home</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="inline-flex items-center w-2 h-2 bg-accent1Surface-lighter rounded-full"></span>
                  <p className="text-body text-greyScaleText-negative">Shop</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-accent1Surface-lighter rounded-full"></span>
                  <p className="text-body text-greyScaleText-negative">
                    Contact
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-accent1Surface-lighter rounded-full"></span>
                  <p className="text-body text-greyScaleText-negative">
                    Delivery
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-accent1Surface-lighter rounded-full"></span>
                  <p className="text-body text-greyScaleText-negative">Blog </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-accent1Surface-lighter rounded-full"></span>
                  <p className="text-body text-greyScaleText-negative">
                    Contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-21 w-min self-stretch flex-wrap min-w-[525px]">
          {/* Adress */}
          <div className="flex flex-col items-start gap-6 w-[222px] min-w-[222px]">
            <div className="flex items-start gap-[15px] w-45.75">
              <Button
                variant="type1"
                color="accent1"
                size="sm"
                pill="true"
                iconPosition="alone"
                Icon={<MapPin />}
              />

              <div className="flex flex-col items-start gap-[10px]">
                <p className="text-body text-greyScaleText-negative flex justify-center self-stretch flex-col">
                  Address:
                </p>
                <p className="text-bodySmall text-greyScaleText-negative flex justify-center self-stretch flex-col w-lvw">
                  Boulevard Sebta, Mohammedia, Morocco
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[15px] w-45.75">
              <Button
                variant="type1"
                color="accent1"
                size="sm"
                pill="true"
                iconPosition="alone"
                Icon={<Mail />}
              />
              <div className="flex flex-col items-start gap-[10px]">
                <p className="text-body text-greyScaleText-negative">Email:</p>
                <p className="text-bodySmall text-greyScaleText-negative">
                  mysticplanner@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
          {/* Phone/Social media */}
          <div className="flex flex-col justify-center items-center w-[13.875rem] min-w-[13.875rem] gap-4">
            <div className="flex items-center justify-center gap-[15px]">
              <Phone className="w-[30px] h-[30px] text-greyScaleText-negative" />
              <div className="flex justify-center flex-col items-start gap-1">
                <p className="text-subheading font-bold font-title text-greyScaleText-negative">
                  +123456780123
                </p>
                <p className="text-bodySmall font-medium font-body text-greyScaleText-negative">
                  Got Questions? Call us 24/7
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <Button
                variant="type1"
                color="accent1"
                size="sm"
                pill="true"
                iconPosition="alone"
                Icon={<FaFacebook />}
              />
              <Button
                variant="type1"
                color="accent1"
                size="sm"
                pill="true"
                iconPosition="alone"
                Icon={<FaInstagram />}
              />
              <Button
                variant="type1"
                color="accent1"
                size="sm"
                pill="true"
                iconPosition="alone"
                Icon={<FaTiktok />}
              />
              <Button
                variant="type1"
                color="accent1"
                size="sm"
                pill="true"
                iconPosition="alone"
                Icon={<FaTwitter />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center self-stretch pt-4.5 pb-4.25 h-[49px] w-full">
        <p className="text-body font-medium font-body text-greyScaleText-negative">
          Copyright @ 2025 MysticPlanner
        </p>
      </div>
    </footer>
  );
}
