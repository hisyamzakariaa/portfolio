import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function Projects() {
  return (
    <Stack
      id="projects"
      justifyContent={"center"}
      // h={"100vh"}
      alignItems={"center"}
      p={3}
      pb={100}
    >
      <Text textDecor={"underline"} fontSize={"50px"} textAlign={"center"}>
        Projects
      </Text>
      <Stack gap={100}>
        <Stack alignItems={"center"} gap={0}>
          <HStack>
            <Text fontSize={"20px"}>1) Pcari:</Text>
            <Text
              fontSize={"20px"}
              textDecor={"underline"}
              cursor={"pointer"}
              _hover={{ color: "#9ACBD0" }}
              onClick={() => window.open("https://www.pcari.my/", "_blank")}
            >
              https://www.pcari.my/
            </Text>
          </HStack>
          <Image my={5} src={"/Pcari.png"} w={"70%"} borderRadius={"30px"} />
          <Text textAlign={"justify"} w={{ base: "unset", lg: "60%" }}>
            Pcari is a product of RF Infinite Sdn Bhd. It is a platform of
            multiple purposes and one of them is Booking. I was assigned to this
            part of the project where I successfully delivered the tasks which
            consist of API integration, build the UI and create process flow.
          </Text>
        </Stack>

        <Stack alignItems={"center"} gap={0}>
          <HStack>
            <Text fontSize={"20px"}>2) Sistem Pinjaman Buku Teks(ESPBT)</Text>
          </HStack>
          <Image
            backgroundColor={"#f5f5f5"}
            fit={"contain"}
            borderRadius={"30px"}
            aspectRatio={4 / 2}
            my={5}
            src={"/in-progress.png"}
            w={"70%"}
          />
          <Text textAlign={"justify"} w={{ base: "unset", lg: "60%" }}>
            ESPBT is a government project that we are currently working on. The
            development stage is almost finish. I played a very crucial part in
            developing the submodules within the project. My responsibilities
            include API integration and UIUX development. Other than that, I
            also help to create reuseable components and optimizing the code.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Projects;
