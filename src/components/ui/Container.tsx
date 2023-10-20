import React from "react";
import { cn } from "../../libs/utils";

// Component Properties
interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

// Component
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div {...props} className={cn("ui container mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
