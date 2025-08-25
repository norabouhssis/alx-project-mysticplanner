"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "../interfaces";

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.productId === item.productId);
            if (existing) {
                return prev.map((p) =>
                    p.productId === item.productId
                        ? { ...p, quantity: p.quantity + item.quantity }
                        : p
                );
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((p) => p.productId !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        setCart((prev) =>
            prev.map((p) =>
                p.productId === productId ? { ...p, quantity } : p
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used inside CartProvider");
    return context;
};
