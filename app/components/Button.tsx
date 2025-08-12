import React from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "type1" | "type2" | "type3";
  color?:
    | "primary"
    | "accent1"
    | "accent2"
    | "success"
    | "error"
    | "warning"
    | "info";
  size?: "esm" | "sm" | "md" | "lg";
  state?: "default" | "hover" | "disabled" | "focus";
  pill?: "true" | "false";
  iconPosition?: "alone" | "left" | "right" | "none";
  label?: string;
  Icon?: LucideIcon | React.ReactNode;
}

export const Button = ({
  variant = "type1",
  color = "primary",
  size = "md",
  pill = "false",
  iconPosition = "none",
  Icon,
  label,
  className,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center transition-all duration-200";
  const variants = {
    type1: {
      primary:
        "text-greyScaleText-negative bg-primarySurface hover:bg-primarySurface-lighter focus:bg-primarySurface-darker",
      accent1:
        "text-greyScaleText-negative bg-accent1Surface hover:bg-accent1Surface-lighter focus:bg-accent1Surface-darker",
      accent2:
        "text-greyScaleText-negative bg-accent2Surface hover:bg-accent2Surface-lighter focus:bg-accent2Surface-darker",
      success:
        "text-greyScaleText-negative bg-successSurface hover:bg-successSurface-lighter focus:bg-successSurface-darker",
      error:
        "text-greyScaleText-negative bg-errorSurface hover:bg-errorSurface-lighter focus:bg-errorSurface-darker",
      warning:
        "text-greyScaleText-negative bg-warningSurface hover:bg-warningSurface-lighter focus:bg-warningSurface-darker",
      info: "text-greyScaleText-negative bg-infoSurface hover:bg-infoSurface-lighter focus:bg-infoSurface-darker",
    },
    type2: {
      primary:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-primaryBorder border-[1px] hover:border-primaryBorder-darker focus:border-primaryBorder-darker focus:bg-primarySurface-subtle",
      accent1:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-accent1Border border-[1px] hover:border-accent1Border-darker focus:border-accent1Border-darker focus:bg-accent1Surface-subtle",
      accent2:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-accent2Border border-[1px] hover:border-accent2Border-darker focus:border-accent2Border-darker focus:bg-accent2Surface-subtle",
      success:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-successBorder border-[1px] hover:border-successBorder-darker focus:border-successBorder-darker focus:bg-successSurface-subtle",
      error:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-errorBorder border-[1px] hover:border-errorBorder-darker focus:border-errorBorder-darker focus:bg-errorSurface-subtle",
      warning:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-warningBorder border-[1px] hover:border-warningBorder-darker focus:border-warningBorder-darker focus:bg-warningSurface-subtle",
      info: "text-greyScaleText-title bg-greyScaleSurface-subtle border border-infoBorder border-[1px] hover:border-infoBorder-darker focus:border-infoBorder-darker focus:bg-infoSurface-subtle",
    },
    type3: {
      primary:
        "text-primaryText bg-greyScaleSurface hover:bg-primarySurface-lighter hover:text-greyScaleText-negative focus:bg-primarySurface-darker focus:text-greyScaleText-negative",
      accent1:
        "text-accent1Text bg-greyScaleSurface hover:bg-accent1Surface-lighter hover:text-greyScaleText-negative focus:bg-accent1Surface-darker focus:text-greyScaleText-negative",
      accent2:
        "text-accent2Text bg-greyScaleSurface hover:bg-accent2Surface-lighter hover:text-greyScaleText-negative focus:bg-accent2Surface-darker focus:text-greyScaleText-negative",
      success:
        "text-successText bg-greyScaleSurface hover:bg-successSurface-lighter hover:text-greyScaleText-negative focus:bg-successSurface-darker focus:text-greyScaleText-negative",
      error:
        "text-errorText bg-greyScaleSurface hover:bg-errorSurface-lighter hover:text-greyScaleText-negative focus:bg-errorSurface-darker focus:text-greyScaleText-negative",
      warning:
        "text-warningText bg-greyScaleSurface hover:bg-warningSurface-lighter hover:text-greyScaleText-negative focus:bg-warningSurface-darker focus:text-greyScaleText-negative",
      info: "text-infoText bg-greyScaleSurface hover:bg-infoSurface-lighter hover:text-greyScaleText-negative focus:bg-infoSurface-darker focus:text-greyScaleText-negative",
    },
  };
  const sizes = {
    esm: {
      classes:
        "px-2 py-1 flex items-center gap-0.5 text-body-small font-medium font-body",
      icon: "w-3 h-3",
      pillFalseRadius: "rounded-xs",
      pillTrueRadius: "rounded-full",
    },
    sm: {
      classes:
        "px-4 py-2 flex items-center gap-1 text-body-small font-medium font-body",
      icon: "w-4 h-4",
      pillFalseRadius: "rounded-s",
      pillTrueRadius: "rounded-full",
    },
    md: {
      classes:
        "px-5 py-3 flex items-center gap-2 text-body font-medium font-body",
      icon: "w-5 h-5",
      pillFalseRadius: "rounded-m",
      pillTrueRadius: "rounded-full",
    },
    lg: {
      classes:
        "px-6 py-4 flex items-center gap-3 text-subheading font-bold font-title",
      icon: "w-8 h-8",
      pillFalseRadius: "rounded-l",
      pillTrueRadius: "rounded-full",
    },
  };
  const iconPositions = {
    alone: "flex items-center justify-center",
    left: "flex items-center justify-start",
    right: "flex items-center justify-end",
    none: "",
  };
  return (
    <button
      className={clsx(
        base,
        variants[variant][color],
        sizes[size].classes,
        pill === "true"
          ? sizes[size].pillTrueRadius
          : sizes[size].pillFalseRadius,
        iconPositions[iconPosition],
        Icon,
        className
      )}
      {...props}
    >
      {typeof Icon === "function" ? <Icon /> : Icon}
      {label}
    </button>
  );
};
