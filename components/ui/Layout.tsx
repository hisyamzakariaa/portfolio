"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import HStack from "./HStack";

function Layout({ children }: { children: ReactNode }) {
  const navItems = [
    { label: "home", value: "" },
    { label: "about", value: "" },
    { label: "services", value: "" },
    { label: "Hisyam Zakaria", value: "" },
    { label: "works", value: "" },
    { label: "contact", value: "" },
    { label: "blog", value: "" },
  ];

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef) {
    }
  }, [navRef]);
  return (
    <>
      <HStack
        ref={navRef}
        className="gap-[18px] py-[24px] justify-center items-center fixed bg-transparent w-full "
      >
        {navItems.map((item, index) => (
          <p
            key={index}
            className={`py-[4px] ${index === 3 ? "px-[24px] text-[18px] font-[600]" : "px-[8px] text-[16px] font-[500]"} `}
          >
            {item.label}
          </p>
        ))}
      </HStack>

      <HStack className="min-h-full flex flex-col bg-red">
        test
        {children}
      </HStack>
    </>
  );
}

export default Layout;
