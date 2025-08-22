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
  state?: "default" | "hover" | "focus" | "disabled";
  pill?: "true" | "false";
  iconPosition?: "alone" | "left" | "right" | "none";
  label?: string;
  Icon?: LucideIcon | React.ReactNode;
}

export const Button = ({
  variant = "type1",
  state = "default",
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
        "text-greyScaleText-negative bg-primarySurface hover:bg-primarySurface-lighter hover:text-greyScaleText-negative focus:bg-primarySurface-darker focus:text-greyScaleText-negative",
      accent1:
        "text-greyScaleText-negative bg-accent1Surface hover:bg-accent1Surface-lighter hover:text-greyScaleText-negative focus:bg-accent1Surface-darker focus:text-greyScaleText-negative",
      accent2:
        "text-greyScaleText-negative bg-accent2Surface hover:bg-accent2Surface-lighter hover:text-greyScaleText-negative focus:bg-accent2Surface-darker focus:text-greyScaleText-negative",
      success:
        "text-greyScaleText-negative bg-successSurface hover:bg-successSurface-lighter hover:text-greyScaleText-negative focus:bg-successSurface-darker focus:text-greyScaleText-negative",
      error:
        "text-greyScaleText-negative bg-errorSurface hover:bg-errorSurface-lighter hover:text-greyScaleText-negative focus:bg-errorSurface-darker focus:text-greyScaleText-negative",
      warning:
        "text-greyScaleText-negative bg-warningSurface hover:bg-warningSurface-lighter hover:text-greyScaleText-negative focus:bg-warningSurface-darker focus:text-greyScaleText-negative",
      info: "text-greyScaleText-negative bg-infoSurface hover:bg-infoSurface-lighter hover:text-greyScaleText-negative focus:bg-infoSurface-darker focus:text-greyScaleText-negative",
    },
    type2: {
      primary:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-primaryBorder border-[1px] hover:border-primaryBorder-lighter focus:border-primaryBorder-darker focus:bg-primarySurface-subtle",
      accent1:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-accent1Border border-[1px] hover:border-accent1Border-lighter focus:border-accent1Border-darker focus:bg-accent1Surface-subtle",
      accent2:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-accent2Border border-[1px] hover:border-accent2Border-lighter focus:border-accent2Border-darker focus:bg-accent2Surface-subtle",
      success:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-successBorder border-[1px] hover:border-successBorder-lighter focus:border-successBorder-darker focus:bg-successSurface-subtle",
      error:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-errorBorder border-[1px] hover:border-errorBorder-lighter focus:border-errorBorder-darker focus:bg-errorSurface-subtle",
      warning:
        "text-greyScaleText-title bg-greyScaleSurface-subtle border border-warningBorder border-[1px] hover:border-warningBorder-lighter focus:border-warningBorder-darker focus:bg-warningSurface-subtle",
      info: "text-greyScaleText-title bg-greyScaleSurface-subtle border border-infoBorder border-[1px] hover:border-infoBorder-lighter focus:border-infoBorder-darker focus:bg-infoSurface-subtle",
    },
    type3: {
      primary:
        "text-primaryText bg-greyScaleSurface hover:bg-primarySurface-lighter hover:text-greyScaleText-negative focus:primarySurface-darker focus:text-greyScaleText-negative",
      accent1:
        "text-accent1Text bg-greyScaleSurface hover:bg-accent1Surface-lighter hover:text-greyScaleText-negative focus:accent1Surface-darker focus:text-greyScaleText-negative",
      accent2:
        "text-accent2Text bg-greyScaleSurface hover:bg-accent2Surface-lighter hover:text-greyScaleText-negative focus:accent2Surface-darker focus:text-greyScaleText-negative",
      success:
        "text-successText bg-greyScaleSurface hover:bg-successSurface-lighter hover:text-greyScaleText-negative focus:successSurface-darker focus:text-greyScaleText-negative",
      error:
        "text-errorText bg-greyScaleSurface hover:bg-errorSurface-lighter hover:text-greyScaleText-negative focus:errorSurface-darker focus:text-greyScaleText-negative",
      warning:
        "text-warningText bg-greyScaleSurface hover:bg-warningSurface-lighter hover:text-greyScaleText-negative focus:warningSurface-darker focus:text-greyScaleText-negative",
      info: "text-infoText bg-greyScaleSurface hover:bg-infoSurface-lighter hover:text-greyScaleText-negative focus:infoSurface-darker focus:text-greyScaleText-negative",
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
      pillFalseRadius: "rounded-xl",
      pillTrueRadius: "rounded-full",
    },
  };

  const iconOnly = typeof Icon === "function" ? <Icon /> : Icon;

  type Variant = "type1" | "type2" | "type3";

  type State = "hover" | "focus" | "disabled";

  type Color =
    | "primary"
    | "accent1"
    | "accent2"
    | "success"
    | "error"
    | "warning"
    | "info";

  const stateVariants: Record<State, Record<Variant, Record<Color, string>>> = {
    focus: {
      type1: {
        primary: "!bg-primarySurface-darker !text-greyScaleText-negative",
        accent1: "!bg-accent1Surface-darker !text-greyScaleText-negative",
        accent2: "!bg-accent2Surface-darker !text-greyScaleText-negative",
        success: "!bg-successSurface-darker !text-greyScaleText-negative",
        error: "!bg-errorSurface-darker !text-greyScaleText-negative",
        warning: "!bg-warningSurface-darker !text-greyScaleText-negative",
        info: "!bg-infoSurface-darker !text-greyScaleText-negative",
      },
      type2: {
        primary: "!border-primaryBorder-darker !bg-primarySurface-subtle",
        accent1: "!border-accent1Border-darker !bg-accent1Surface-subtle",
        accent2: "!border-accent2Border-darker !bg-accent2Surface-subtle",
        success: "!border-successBorder-darker !bg-successSurface-subtle",
        error: "!border-errorBorder-darker !bg-errorSurface-subtle",
        warning: "!border-warningBorder-darker !bg-warningSurface-subtle",
        info: "!border-infoBorder-darker !bg-infoSurface-subtle",
      },
      type3: {
        primary: "!bg-primarySurface-darker !text-greyScaleText-negative",
        accent1: "!bg-accent1Surface-darker !text-greyScaleText-negative",
        accent2: "!bg-accent2Surface-darker !text-greyScaleText-negative",
        success: "!bg-successSurface-darker !text-greyScaleText-negative",
        error: "!bg-errorSurface-darker !text-greyScaleText-negative",
        warning: "!bg-warningSurface-darker !text-greyScaleText-negative",
        info: "!bg-infoSurface-darker !text-greyScaleText-negative",
      },
    },
    hover: {
      type1: {
        primary: "!bg-primarySurface-lighter !text-greyScaleText-negative",
        accent1: "!bg-accent1Surface-lighter !text-greyScaleText-negative",
        accent2: "!bg-accent2Surface-lighter !text-greyScaleText-negative",
        success: "!bg-successSurface-lighter !text-greyScaleText-negative",
        error: "!bg-errorSurface-lighter !text-greyScaleText-negative",
        warning: "!bg-warningSurface-lighter !text-greyScaleText-negative",
        info: "!bg-infoSurface-lighter !text-greyScaleText-negative",
      },
      type2: {
        primary: "!border-primaryBorder-lighter ",
        accent1: "!border-accent1Border-lighter ",
        accent2: "!border-accent2Border-lighter ",
        success: "!border-successBorder-lighter ",
        error: "!border-errorBorder-lighter ",
        warning: "!border-warningBorder-lighter ",
        info: "!border-infoBorder-lighter",
      },
      type3: {
        primary: "!bg-primarySurface-lighter !text-greyScaleText-negative",
        accent1: "!bg-accent1Surface-lighter !text-greyScaleText-negative ",
        accent2: "!bg-accent2Surface-lighter !text-greyScaleText-negative ",
        success: "!bg-successSurface-lighter !text-greyScaleText-negative ",
        error: "!bg-errorSurface-lighter !text-greyScaleText-negative",
        warning: "!bg-warningSurface-lighter !text-greyScaleText-negative ",
        info: "!bg-infoSurface-lighter !text-greyScaleText-negative ",
      },
    },
    disabled: {
      type1: {
        primary: "opacity-50 cursor-not-allowed pointer-events-none",
        accent1: "opacity-50 cursor-not-allowed pointer-events-none",
        accent2: "opacity-50 cursor-not-allowed pointer-events-none",
        success: "opacity-50 cursor-not-allowed pointer-events-none",
        error: "opacity-50 cursor-not-allowed pointer-events-none",
        warning: "opacity-50 cursor-not-allowed pointer-events-none",
        info: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      type2: {
        primary: "opacity-50 cursor-not-allowed pointer-events-none",
        accent1: "opacity-50 cursor-not-allowed pointer-events-none",
        accent2: "opacity-50 cursor-not-allowed pointer-events-none",
        success: "opacity-50 cursor-not-allowed pointer-events-none",
        error: "opacity-50 cursor-not-allowed pointer-events-none",
        warning: "opacity-50 cursor-not-allowed pointer-events-none",
        info: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      type3: {
        primary: "opacity-50 cursor-not-allowed pointer-events-none",
        accent1: "opacity-50 cursor-not-allowed pointer-events-none",
        accent2: "opacity-50 cursor-not-allowed pointer-events-none",
        success: "opacity-50 cursor-not-allowed pointer-events-none",
        error: "opacity-50 cursor-not-allowed pointer-events-none",
        warning: "opacity-50 cursor-not-allowed pointer-events-none",
        info: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
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
        state !== "default" && stateVariants[state][variant][color],
        className
      )}
      {...props}
    >
      {iconPosition === "alone" && iconOnly}
      {iconPosition === "left" && (
        <>
          {iconOnly}
          {label}
        </>
      )}
      {iconPosition === "right" && (
        <>
          {label}
          {iconOnly}
        </>
      )}
      {iconPosition === "none" && label}
    </button>
  );
};
