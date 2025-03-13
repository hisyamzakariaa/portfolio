import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <HStack h={"100vh"} id="about" maxW={"1100px"} p={3} gap={10}>
      <Image
        borderRadius={"100%"}
        h={"200px"}
        w={"200px"}
        objectFit={"cover"}
        src="/Hisyam.jpeg"
      />
      <Stack justifyContent={"space-between"} flex={1}>
        <Text fontSize={"50px"}>Welcome To</Text>
        <Text fontSize={"50px"} textDecor={"underline"}>
          My Personal Portfolio
        </Text>

        <Text fontSize={"20px"}>
          Hi! My name is zulihsyam and I am a self-taught frontend developer.
        </Text>
        <Text textAlign={"justify"}>
          Self-taught creative and detail-oriented Front-End Developer in
          building responsive, user-centric websites and web applications.
          Specializing in modern web technologies such as React JS and Next JS,
          I am passionate to create seamless and intuitive user experiences.
          Adept at collaborating with cross-functional teams, I focus on writing
          clean, scalable code and leveraging modern tools and framework to
          deliver high-quality solutions. Continuously learning and keeping up
          with the latest web technologies to ensure optimal performance and
          design in every project.
        </Text>
      </Stack>
    </HStack>
  );
}

export default About;
