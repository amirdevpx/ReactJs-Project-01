import React from "react";
import { cn } from "../../libs/utils";

// Component Properties
interface BoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

// Component
function Box({ children, className, ...props }: BoxProps) {
  return (
    <div {...props} className={cn("ui box", className)}>
      {children}
    </div>
  );
}

export default Box;
