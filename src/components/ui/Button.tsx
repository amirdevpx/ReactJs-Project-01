import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

// Component Variants
const buttonVariants = cva(
  "ui button inline-flex items-center gap-2 font-montserrat font-normal text-base max-lg:text-sm border [&>svg]:w-5 [&>svg]:h-5 transition",
  {
    variants: {
      variant: {
        deafult:
          "bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600",
        ghost:
          "bg-white border-white text-blue-500 hover:bg-blue-100 hover:border-blue-100",
        outline: "bg-white border-blue-500 text-blue-500",
        link: "bg-white border-white text-blue-400 hover:text-blue-500",
        "link-muted": "bg-white border-white text-gray-500 hover:text-black",
      },
      size: {
        default: "py-1 px-4",
        large: "py-4 px-8",
        icon: "p-1 icon",
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
      variant: "deafult",
      rounded: "default",
      size: "default",
    },
  }
);

// Component Properties
interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

// Component
const Button = ({
  children,
  className,
  variant,
  rounded,
  size,
  ...props
}: ButtonProps) => {
  console.log(className)
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, rounded, size, className }))}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
