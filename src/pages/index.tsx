import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import { Box, Stack } from "@chakra-ui/react";
import Tech from "@/components/Tech";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Stack h={"100vh"}>
      <Navigation />

      <Stack flex={1} border={"1px solid red"} alignItems={"center"}>
        <About />
        <Tech />
        <WorkHistory />
        <Projects />
      </Stack>

      <Footer />
    </Stack>
  );
}
