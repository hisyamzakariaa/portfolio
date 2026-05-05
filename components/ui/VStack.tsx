import { HTMLAttributes, ReactNode } from "react";

interface VStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function VStack({ children, ...props }: VStackProps) {
  return (
    <div
      {...props}
      className={`flex flex-col ${props.className}`}
      style={{ ...props.style }}
    >
      {children}
    </div>
  );
}

export default VStack;
