import React, { HTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  chidlren: ReactNode;
}

function CustomButton({ children }: CustomButtonProps) {
  return <div>{children}</div>;
}

export default CustomButton;
