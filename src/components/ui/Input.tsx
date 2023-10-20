import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../libs/utils";

// Component Variants
const inputVariants = cva(
  "ui input w-full max-w-md font-montserrat font-normal text-base max-lg:text-sm text-black border tansition",
  {
    variants: {
      variant: {
        default: "border-blue-400",
      },
      sizes: {
        default: "py-1 px-4",
        large: "py-4 px-8",
      },
      rounded: {
        sm: "rounded-sm",
        default: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
      sizes: "default",
    },
  }
);

// Component Properties
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

// Component
export const Input = ({
  className,
  variant,
  sizes,
  rounded,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={cn(inputVariants({ variant, sizes, rounded, className }))}
    />
  );
};
