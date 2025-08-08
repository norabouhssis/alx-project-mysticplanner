import React from "react";
import clsx from "clsx";

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
  icon?: React.ReactNode;
}

export const Button = ({
  variant = "type1",
  color = "primary",
  size = "md",
  pill = "false",
  iconPosition = "none",
  className,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center transition-all duration-200";
  const variants = {
    type1: {
      primary:
        "text-greyScale-text-negative bg-primary-surface-default hover:bg-primary-surface-lighter focus:bg-primary-surface-darker",
      accent1:
        "text-greyScale-text-negative bg-accent1-surface-default hover:bg-accent1-surface-lighter focus:bg-accent1-surface-darker",
      accent2:
        "text-greyScale-text-negative bg-accent2-surface-default hover:bg-accent2-surface-lighter focus:bg-accent2-surface-darker",
      success:
        "text-greyScale-text-negative bg-success-surface-default hover:bg-success-surface-lighter focus:bg-success-surface-darker",
      error:
        "text-greyScale-text-negative bg-error-surface-default hover:bg-error-surface-lighter focus:bg-error-surface-darker",
      warning:
        "text-greyScale-text-negative bg-warning-surface-default hover:bg-warning-surface-lighter focus:bg-warning-surface-darker",
      info: "text-greyScale-text-negative bg-info-surface-default hover:bg-info-surface-lighter focus:bg-info-surface-darker",
    },
    type2: {
      primary:
        "text-greyScale-text-title bg-greyScale-surface-subtle border border-primary-border-default border-[1px] hover:border-primary-border-darker focus:border-primary-border-darker focus:bg-primary-surface-subtle",
      accent1:
        "text-greyScale-text-title bg-greyScale-surface-subtle border border-accent1-border-default border-[1px] hover:border-accent1-border-darker focus:border-accent1-border-darker focus:bg-accent1-surface-subtle",
      accent2:
        "text-greyScale-text-title bg-greyScale-surface-subtle border border-accent2-border-default border-[1px] hover:border-accent2-border-darker focus:border-accent2-border-darker focus:bg-accent2-surface-subtle",
      success:
        "text-greyScale-text-title bg-greyScale-surface-subtle border border-success-border-default border-[1px] hover:border-success-border-darker focus:border-success-border-darker focus:bg-success-surface-subtle",
      error:
        "text-greyScale-text-title bg-greyScale-surface-subtle border border-error-border-default border-[1px] hover:border-error-border-darker focus:border-error-border-darker focus:bg-error-surface-subtle",
      warning:
        "text-greyScale-text-title bg-greyScale-surface-subtle border border-warning-border-default border-[1px] hover:border-warning-border-darker focus:border-warning-border-darker focus:bg-warning-surface-subtle",
      info: "text-greyScale-text-title bg-greyScale-surface-subtle border border-info-border-default border-[1px] hover:border-info-border-darker focus:border-info-border-darker focus:bg-info-surface-subtle",
    },
    type3: {
      primary:
        "text-primary-text-default bg-greyScale-surface-default hover:bg-primary-surface-lighter hover:text-greyScale-text-negative focus:bg-primary-surface-darker focus:text-greyScale-text-negative",
      accent1:
        "text-accent1-text-default bg-greyScale-surface-default hover:bg-accent1-surface-lighter hover:text-greyScale-text-negative focus:bg-accent1-surface-darker focus:text-greyScale-text-negative",
      accent2:
        "text-accent2-text-default bg-greyScale-surface-default hover:bg-accent2-surface-lighter hover:text-greyScale-text-negative focus:bg-accent2-surface-darker focus:text-greyScale-text-negative",
      success:
        "text-success-text-default bg-greyScale-surface-default hover:bg-success-surface-lighter hover:text-greyScale-text-negative focus:bg-success-surface-darker focus:text-greyScale-text-negative",
      error:
        "text-error-text-default bg-greyScale-surface-default hover:bg-error-surface-lighter hover:text-greyScale-text-negative focus:bg-error-surface-darker focus:text-greyScale-text-negative",
      warning:
        "text-warning-text-default bg-greyScale-surface-default hover:bg-warning-surface-lighter hover:text-greyScale-text-negative focus:bg-warning-surface-darker focus:text-greyScale-text-negative",
      info: "text-info-text-default bg-greyScale-surface-default hover:bg-info-surface-lighter hover:text-greyScale-text-negative focus:bg-info-surface-darker focus:text-greyScale-text-negative",
    },
  };
  const sizes = {
    esm: {
      classes: "px-2 py-1 flex items-center gap-0.5 text-body-small",
      icon: "w-3 h-3",
      pillFalseRadius: "rounded-xs",
      pillTrueRadius: "rounded-xl",
    },
    sm: {
      classes: "px-4 py-2 flex items-center gap-1 text-body-small",
      icon: "w-4 h-4",
      pillFalseRadius: "rounded-s",
      pillTrueRadius: "rounded-xl",
    },
    md: {
      classes: "px-5 py-3 flex items-center gap-2 text-body",
      icon: "w-5 h-5",
      pillFalseRadius: "rounded-m",
      pillTrueRadius: "rounded-xl",
    },
    lg: {
      classes: "px-6 py-4 flex items-center gap-3 text-subheading",
      icon: "w-8 h-8",
      pillFalseRadius: "rounded-l",
      pillTrueRadius: "rounded-xl",
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
        className
      )}
      {...props}
    />
  );
};
