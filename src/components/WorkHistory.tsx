import { List, ListItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { LuCircleCheck } from "react-icons/lu";

function WorkHistory() {
  return (
    <Stack
      justifyContent={"center"}
      id="work-history"
      h={"100vh"}
      w={{ base: "unset", lg: "60%" }}
      p={3}
    >
      <Text textDecor={"underline"} fontSize={"50px"} textAlign={"center"}>
        Work History
      </Text>
      <Stack gap={0}>
        <Text fontSize={"30px"}>
          RF Infinite Sdn Bhd{" "}
          <span style={{ fontStyle: "italic" }}>(June 2024 - current)</span>
        </Text>
        <Text fontSize={"20px"}>Jr Frontend Developer</Text>
        <Text textAlign={"justify"}>
          This is my first ever company as a frontend developer. I have learnt a
          lot through out my time at the company. The environment is great and
          it is such a joy to work here. My tasks here include:
        </Text>
        <List.Root gap={2} mt={3} variant={"plain"} textAlign={"justify"}>
          <List.Item>
            <List.Indicator asChild mr={2}>
              <LuCircleCheck />
            </List.Indicator>
            Responsible in developing website, converting design wireframes and
            prototype into fully functional web pages with responsive design
            feature using React JS, Next JS and Chakra UI as the UI library.
          </List.Item>

          <List.Item>
            <List.Indicator asChild mr={2}>
              <LuCircleCheck />
            </List.Indicator>
            Optimizing the website using Tanstack Query for data fetching, and
            Tanstack Table for displaying data.
          </List.Item>

          <List.Item>
            <List.Indicator asChild mr={2}>
              <LuCircleCheck />
            </List.Indicator>
            Collaborate with back-end developers and UI designers to integrate
            RESTful APIs response and shape web pages into client’s requests.
          </List.Item>

          <List.Item>
            <List.Indicator asChild mr={2}>
              <LuCircleCheck />
            </List.Indicator>
            Develop reusable components for the team to be used throughout the
            project.
          </List.Item>
        </List.Root>
      </Stack>
    </Stack>
  );
}

export default WorkHistory;
