import Image from "next/image"
import { CartItemCardProps } from "@/app/interfaces"
import { useCart } from "@/app/context/CartContext";
import { Button } from "../UI/Button";
import { Minus, Plus, X } from "lucide-react";

export default function CartItemCard({
    productId,
    title,
    price,
    image,
    color,
    quantity,
}: CartItemCardProps) {

    const { removeFromCart, updateQuantity } = useCart();

    const increase = () => updateQuantity(productId, quantity + 1);
    const decrease = () => {
        if (quantity > 1) updateQuantity(productId, quantity - 1);
    };

    return (
        <div className="flex items-center justify-center self-stretch gap-[58px]">
            <div className="flex items-center gap-[17px] flex-[1_0_0]">
                {/* Product Image */}
                <Image
                    src={image.Image1}
                    alt={title}
                    width={117}
                    height={114}
                    className="rounded-lg aspect-[117/110] object-cover"
                />

                {/* Product Info */}
                <div className="flex flex-col gap-[34px] items-start">
                    <div className="flex flex-col gap-[5px] self-stretch items-start">
                        <p className="self-stretch text-bodyBold text-greyScaleText-body">{title}</p>
                        <div className="flex gap-[5px] self-stretch items-start">
                            <p className="text-bodySmall text-greyScaleText-body">Color:</p>
                            <p className="text-bodySmallBold text-greyScaleText-body">{color}</p>
                        </div>
                    </div>
                    <p className="text-bodyBold text-accent1Text">{price} MAD</p>
                </div>

                {/* Quantity Input */}
                <div className="flex justify-center items-center gap-[2px] bg-greyScaleSurface-subtle rounded-bl-3xl">
                    <Button
                        variant="type3"
                        color="primary"
                        size="sm"
                        pill="true"
                        iconPosition="alone"
                        Icon={<Minus />}
                        onClick={decrease} />
                    <input
                        readOnly
                        value={quantity}
                        className="w-[24px] text-bodyBold text-greyScaleText-body text-center">
                    </input>
                    <Button
                        variant="type1"
                        color="primary"
                        size="sm"
                        pill="true"
                        iconPosition="alone"
                        Icon={<Plus />}
                        onClick={increase} />
                </div>

                {/* Total Price */}
                <div className="flex items-center justify-center p-[10px] gap-[2px]">
                    <p className="text-bodyBold text-greyScaleText-body"> {price * quantity}</p>
                </div>

                {/* Remove Button */}
                <Button
                    variant="type2"
                    color="error"
                    size="sm"
                    pill="true"
                    iconPosition="alone"
                    Icon={<X />}
                    onClick={() => removeFromCart(productId)}

                />
            </div>
        </div>
    )
}