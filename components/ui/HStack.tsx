import { HTMLAttributes, ReactNode } from "react";

interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function HStack({ children, ...props }: HStackProps) {
  return (
    <div
      {...props}
      className={`flex flex-row ${props.className}`}
      style={{ ...props.style }}
    >
      {children}
    </div>
  );
}

export default HStack;
