"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const HStack = forwardRef<HTMLDivElement, HStackProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`flex flex-row ${props.className}`}
        style={{ ...props.style }}
      >
        {children}
      </div>
    );
  },
);

export default HStack;
