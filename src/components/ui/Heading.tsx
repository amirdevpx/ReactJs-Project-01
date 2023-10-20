import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../libs/utils";

// Component Variants
const headingVariants = cva("ui heading", {
  variants: {
    level: {
      h1: "text-4xl max-lg:text-3xl",
      h2: "text-3xl max-lg:text-2xl",
      default: "text-2xl max-lg:text-xl",
      h4: "text-xl max-lg:text-lg",
      h5: "text-lg max-lg:text-base",
      h6: "text-base max-lg:text-sm",
    },
    weight: {
      default: "font-bold",
      semibold: "font-semibold",
      normal: "font-normal",
    },
  },
  defaultVariants: {
    level: "default",
    weight: "default",
  },
});

// Component Properties
interface HeadingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children?: React.ReactNode;
}

// Component
const Heading = ({
  children,
  className,
  level,
  weight,
  ...props
}: HeadingProps) => {
  return React.createElement(level || "h3", {
    ...props,
    className: cn(headingVariants({ level, weight, className })),
    children,
  });
};

export default Heading;
