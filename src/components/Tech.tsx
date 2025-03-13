import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";

const items: { label: string; icon: ReactNode }[] = [
  { label: "React JS", icon: <FaReact size={"100px"} /> },
  { label: "HTML", icon: <FaHtml5 size={"100px"} /> },
  { label: "TypeScript", icon: <BiLogoTypescript size={"100px"} /> },
  { label: "JavaScript", icon: <RiJavascriptFill size={"100px"} /> },
  { label: "Next JS", icon: <RiNextjsFill size={"100px"} /> },
  //   {
  //     label: "Chakra UI",
  //     icon: <SiChakraui size={"80px"} style={{ border: "1px solid black" }} />,
  //   },
];

function Tech() {
  return (
    <Flex
      border={"1px solid red"}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {items.map((item, index) => (
        <Stack position={"relative"} key={index}>
          {item.icon}
          <Text textAlign={"center"}>{item.label}</Text>
        </Stack>
      ))}
    </Flex>
  );
}

export default Tech;
