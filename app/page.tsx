import { Button } from "@/components/ui/button";
import HStack from "@/components/ui/HStack";
import StarIcon from "@/components/ui/StarIcon";
import VStack from "@/components/ui/VStack";

export default function Home() {
  return (
    <>
      <VStack className="bg-[#faf9f8] h-screen items-center justify-center">
        <HStack className="bg-[#F7D4E84D] py-2 px-4 rounded-2xl items-center gap-2">
          <StarIcon />
          <p className="text-[#2D3748CC]">Welcome to my portfolio</p>
        </HStack>

        <h1 className="text-[72px]">
          Hi, I'm <span className="text-[#8B7FA8]">Hisyam Zakaria</span>
        </h1>

        <p className="text-[24px] text-[#6B7280] max-w-[672px] text-center">
          A creative developer crafting beautiful digital experiences with clean
          code and thoughtful design
        </p>

        <HStack>
          <Button>View My Work</Button>
        </HStack>
      </VStack>

      <VStack>oi</VStack>
    </>
  );
}
