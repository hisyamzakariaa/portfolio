import React, { useEffect, useState } from "react";
import { Button, ButtonProps, HStack } from "@chakra-ui/react";

const items: { label: string; value: string }[] = [
  { label: "About", value: "about" },
  { label: "Technologies", value: "tech" },
  { label: "Work History", value: "work-history" },
  { label: "Projects", value: "projects" },
];

function Navigation() {
  const [selected, setSelected] = useState<string>("about");

  useEffect(() => {
    const section = document.getElementById(selected);
    if (section)
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [selected]);
  return (
    <HStack
      position={"fixed"}
      w={"full"}
      zIndex={1}
      gap={10}
      p={3}
      bgColor={"#f5f5f5"}
      justifyContent={"center"}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          fontWeight={600}
          color={selected === item.value ? "#9ACBD0" : "#27445d"}
          onClick={() => setSelected(item.value)}
          p={2}
        >
          {item.label}
        </Button>
      ))}
    </HStack>
  );
}

export default Navigation;
