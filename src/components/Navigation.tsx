import React, { useState } from "react";
import { Button, ButtonProps, HStack } from "@chakra-ui/react";

const items: { label: string }[] = [
  { label: "About" },
  { label: "Technologies" },
  { label: "Work History" },
  { label: "Projects" },
];

function Navigation() {
  const [selected, setSelected] = useState<string>("About");
  return (
    <HStack gap={10} p={3} bgColor={"#f5f5f5"} justifyContent={"center"}>
      {items.map((item, index) => (
        <Button
          key={index}
          fontWeight={600}
          color={selected === item.label ? "#9ACBD0" : "#27445d"}
          onClick={() => setSelected(item.label)}
          p={2}
        >
          {item.label}
        </Button>
      ))}
    </HStack>
  );
}

export default Navigation;
