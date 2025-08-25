"use client";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Home, Grid2X2, AlignJustify, Square } from "lucide-react";
import { Button } from "../components/UI/Button";
import InputField from "../components/UI/Input";
import clsx from "clsx";
import {
    ProductCard,
    ProductCardRow,
    ProductCardBig,
} from "../components/Cards/ProductCard";
import {
    Theme,
    Layout,
    Size,
    ViewMode,
    SortKey,
    FiltersState,
    SIZES,
    LAYOUTS,
    THEMES,
} from "../interfaces/index";
import { PRODUCTSSAMPLE } from "../constants";
import { useCart } from "../context/CartContext";
import CartItemCard from "../components/Cards/CartItemCard";

export default function CartPage() {

    const { cart, removeFromCart, updateQuantity } = useCart();

    if (cart.length === 0) {
        return <p className="text-center text-subheading text-greyScaleText-body">Your cart is empty 🛍️</p>;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="w-screen">
            {/* Title section */}
            <TitleSection />

            <div className="flex items-start justify-center py-15 px-24 h-[818px] gap-[50px] bg-greyScaleSurface">
                <div className="flex flex-col items-start gap-[40px] flex-[1_0_0]">
                    <div className="flex items-end self-stretch py-[10px]"><p className="text-heading text-greyScaleText-body">Cart Items</p></div>
                    <ul className="flex flex-col w-[880px] items-center">
                        {cart.map((item) => (
                            <CartItemCard key={item.productId}
                                productId={item.productId}
                                title={item.title}
                                price={item.price}
                                image={item.image.Image1}
                                color={item.color}
                                quantity={item.quantity} />
                        ))}
                    </ul>
                </div>
                <div className="flex w-[318.5px] py-[2px] flex-col items-center rounded-lg border-t-2 border-accent1Border-lighter bg-greyScaleSurface shadow-[0_2px_73px_2px_rgba(0,0,0,0.04)]"></div>
            </div>
        </div>
    );
}

/* Components */

/* Title section */
const TitleSection = () => (
    <div className="flex flex-col items-center w-full px-24 py-15 gap-3 herobackground ">
        <p className="self-stretch text-center text-title">
            <span className="text-greyScaleText-title">Our </span>
            <span className="text-primaryText">planners</span>
        </p>
        <div className="flex items-center gap-[10px] px-[35px] py-2 rounded-m bg-greyScaleSurface boxshadow">
            <Home className="w-4 h-4 text-greyScaleText-title" />
            <p className="text-bodyMediumBold text-greyScaleText-title">Home</p>
            <p className="text-bodyMediumBold text-greyScaleText-title">/</p>
            <p className="text-bodyMediumBold text-greyScaleText-title">Planners</p>
            <p className="text-bodyMediumBold text-greyScaleText-title">/</p>
            <div className="flex items-start justify-center border-b-2 border-b-solid border-b-accent1Border">
                <p className="text-bodyMediumBold text-accent1Text">Shopping Cart</p>
            </div>
        </div>
    </div>
);
