import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";

const items: { label: string; icon: ReactNode }[] = [
  { label: "HTML", icon: <FaHtml5 size={"100px"} /> },
  { label: "JavaScript", icon: <RiJavascriptFill size={"100px"} /> },
  { label: "TypeScript", icon: <BiLogoTypescript size={"100px"} /> },
  { label: "React JS", icon: <FaReact size={"100px"} /> },
  { label: "Next JS", icon: <RiNextjsFill size={"100px"} /> },
  //   {
  //     label: "Chakra UI",
  //     icon: <SiChakraui size={"80px"} style={{ border: "1px solid black" }} />,
  //   },
];

function Tech() {
  return (
    <Stack
      p={3}
      h={"100vh"}
      id="tech"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text textDecor={"underline"} fontSize={"50px"} textAlign={"center"}>
        My Stacks
      </Text>
      <Text textAlign={"justify"} maxW={"60%"}>
        There are a lot of great frameworks out there that can help me create
        and develop websites but I have always went with React Js. I also use
        extra tools to make my work easier. Some of the tools are, Formik,
        Tanstack Query, Tanstack Table and Chakra UI.
      </Text>
      <Flex my={10} gap={10} justifyContent={"center"} alignItems={"center"}>
        {items.map((item, index) => (
          <Stack position={"relative"} key={index}>
            {item.icon}
            <Text textAlign={"center"}>{item.label}</Text>
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
}

export default Tech;
