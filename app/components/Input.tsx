import React from "react";
import { cn } from "@/lib/utils";

type InputFieldProps = {
  label?: string;
  placeholder?: string;
  type?: "text" | "date" | "phone";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  helperText?: string;
};

export default function InputField({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  iconStart,
  iconEnd,
  error,
  success,
  disabled,
  helperText,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          className={cn(
            "text-body-bold text-greyScale-text-body hover:text-primary-text-lighter focus:text-primary-text-default",
            disabled && "text-greyScale-text-disabled cursor-not-allowed"
          )}
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex items-center border gap-2 h-[52] border-[1px] rounded-m px-4 py-1 transition-colors bg-greyScale-surface-default border-greyScale-border-default hover:border-primary-border-lighter focus:border-primary-border-default",
          disabled &&
            "bg-greyScale-surface-disabled text-greyScale-text-disabled border-greyScale-border-disabled cursor-not-allowed",
          error
            ? "border-error-border-default bg-error-surface-subtle"
            : success
            ? "border-primary-border-default"
            : "border-greyScale-border-default"
        )}
        style={{ minHeight: "51px" }}
      >
        {iconStart && <div className="h-[24px] w-[24px]">{iconStart}</div>}
        <input
          type={type === "phone" ? "tel" : type}
          className={cn(
            "w-full bg-transparent focus:outline-none",
            disabled && "cursor-not-allowed"
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {iconEnd && <div className="h-[24px] w-[24px]">{iconEnd}</div>}
      </div>

      {helperText && (
        <span
          className={cn(
            "text-xs mt-1",
            error
              ? "text-red-500"
              : success
              ? "text-green-500"
              : "text-gray-500"
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
