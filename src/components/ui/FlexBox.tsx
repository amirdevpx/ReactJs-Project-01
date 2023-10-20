import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../libs/utils";

// Component Variants
const flexBoxVariants = cva("ui flexbox flex", {
  variants: {
    justify: {
      default: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    items: {
      default: "items-start",
      center: "items-center",
      end: "items-end",
    },
    wrap: {
      default: "flex-nowrap",
      wrap: "flex-wrap",
    },
    flex: {
      default: "flex-row",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    gap: {
      default: "gap-4",
      none: "gap-0",
      two: "gap-2",
      six: "gap-6",
      eight: "gap-8",
    },
    col: {
      "1": "children:w-full",
      "2": "children:w-1/2",
      "3": "children:w-1/3",
      "4": "children:w-1/4",
      "5": "children:w-1/5",
    },
    xxl: {
      "1": "max-2xl:children:w-full",
      "2": "max-2xl:children:w-1/2",
      "3": "max-2xl:children:w-1/3",
      "4": "max-2xl:children:w-1/4",
      "5": "max-2xl:children:w-1/5",
    },
    xl: {
      "1": "max-xl:children:w-full",
      "2": "max-xl:children:w-1/2",
      "3": "max-xl:children:w-1/3",
      "4": "max-xl:children:w-1/4",
      "5": "max-xl:children:w-1/5",
    },
    lg: {
      "1": "max-lg:children:w-full",
      "2": "max-lg:children:w-1/2",
      "3": "max-lg:children:w-1/3",
      "4": "max-lg:children:w-1/4",
      "5": "max-lg:children:w-1/5",
    },
    md: {
      default: "",
      "1": "max-md:children:w-full",
      "2": "max-md:children:w-1/2",
      "3": "max-md:children:w-1/3",
      "4": "max-md:children:w-1/4",
      "5": "max-md:children:w-1/5",
    },
  },
  defaultVariants: {
    justify: "default",
    items: "default",
    wrap: "default",
    flex: "default",
    gap: "default",
  },
});

// Component Properties
interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxVariants> {
  children?: React.ReactNode;
}

// Component
const FlexBox = ({
  className,
  children,
  justify,
  items,
  wrap,
  flex,
  gap,
  col,
  xxl,
  xl,
  lg,
  md,
  ...props
}: FlexBoxProps) => {
  return (
    <div
      {...props}
      className={cn(
        flexBoxVariants({
          justify,
          items,
          wrap,
          flex,
          gap,
          col,
          xxl,
          xl,
          lg,
          md,
          className,
        })
      )}
    >
      {children}
    </div>
  );
};

export default FlexBox;
