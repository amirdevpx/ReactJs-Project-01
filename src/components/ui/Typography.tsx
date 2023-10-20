import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

// Component Variants
const typographyvariants = cva("ui typography", {
  variants: {
    element: {
      default: "p",
      span: "span",
      i: "i",
    },
    size: {
      default: "text-base max-lg:text-sm",
      small: "text-sm max-lg:text-xs",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Component Properties
interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyvariants> {
  children?: React.ReactNode;
}

// Component
const Typography = ({
  children,
  className,
  element,
  size,
  ...props
}: TypographyProps) => {
  return React.createElement(element || "p", {
    ...props,
    className: cn(typographyvariants({ element, size, className })),
    children,
  });
};

export default Typography;
