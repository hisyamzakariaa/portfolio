import { HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
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
    <Stack p={3} bgColor={"#f5f5f5"} color={"#27445d"} alignItems={"center"}>
      <SimpleGrid columns={2} columnGap={10} rowGap={3} w={"fit-content"}>
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
      </SimpleGrid>
      <HStack>
        <FaCopyright />
        <Text fontSize={"xs"}>Created by Hisyam Zakaria</Text>
      </HStack>
    </Stack>
  );
}

export default Footer;
