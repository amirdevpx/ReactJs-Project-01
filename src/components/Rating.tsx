import React from "react";

import { RiStarFill, RiStarLine } from "react-icons/ri";

import { cn } from "../libs/utils";

import FlexBox from "./ui/FlexBox";

interface RatingProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    rate: number;
}

const Rating = ({ className, rate }: RatingProps) => {
  return (
    <FlexBox gap="two" className={cn("text-yellow-500", className)}>
      {[...Array(5)].map((_, index) =>
        rate >= index + 1 ? (
          <RiStarFill key={index + 1} className="h-6 w-6" />
        ) : (
          <RiStarLine key={index + 1} className="h-6 w-6" />
        )
      )}
    </FlexBox>
  );
};

export default Rating;
