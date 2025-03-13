import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const items: { label: string; value?: string; icon: ReactNode }[] = [
  {
    label: "Visit my LinkedIn profile",
    value: "https://github.com/hisyamzakariaa",
    icon: <FaGithub />,
  },
  {
    label: "Visit my Github profile",
    value: "https://linkedin.com/in/zulhisyam/",
    icon: <FaLinkedin />,
  },
  { label: "hisyamzakariaa@gmail.com", icon: <HiOutlineMail /> },
  { label: "+60188742369", icon: <IoCall /> },
];

function Footer() {
  return (
    <Stack
      bgColor={"#f5f5f5"}
      border={"1px solid green"}
      color={"#27445d"}
      justifySelf={"flex-end"}
    >
      <VStack>
        {items.map((item, index) => (
          <HStack
            _hover={item.value?.includes("https") ? { color: "#9ACBD0" } : {}}
            key={index}
            cursor={item.value?.includes("https") ? "pointer" : "default"}
            onClick={() => {
              item.value?.includes("https") &&
                window.open(item.value, "_blank");
            }}
          >
            {item.icon} <Text>{item.label}</Text>
          </HStack>
        ))}
      </VStack>
    </Stack>
  );
}

export default Footer;
