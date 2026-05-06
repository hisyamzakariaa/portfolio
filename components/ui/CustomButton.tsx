import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function CustomButton({ children, ...props }: CustomButtonProps) {
  return (
    <button
      {...props}
      style={{ ...props.style }}
      className={twMerge(
        clsx(
          `bg-[#8B7FA8] py-3 px-6 rounded-[33px] text-white ${props.className}`,
        ),
      )}
    >
      {children}
    </button>
  );
}

export default CustomButton;
