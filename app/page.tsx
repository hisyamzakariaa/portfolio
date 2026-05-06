import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import HStack from "@/components/ui/HStack";
import StarIcon from "@/components/ui/StarIcon";
import VStack from "@/components/ui/VStack";

export default function Home() {
  return (
    <>
      <VStack className="bg-[#faf9f8] h-screen items-center justify-center gap-[48px]">
        <VStack className="gap-[16px] items-center ">
          <HStack className="bg-[#F7D4E84D] py-2 px-4 rounded-2xl items-center gap-2">
            <StarIcon />
            <p className="text-[#2D3748CC]">Welcome to my portfolio</p>
          </HStack>

          <VStack className="gap-[23px]">
            <h1 className="text-[72px] leading-[72px]">
              Hi, I'm <span className="text-[#8B7FA8]">Hisyam Zakaria</span>
            </h1>

            <p className="text-[24px] text-[#6B7280] max-w-[672px] text-center leading-[32px]">
              A creative developer crafting beautiful digital experiences with
              clean code and thoughtful design
            </p>
          </VStack>
        </VStack>

        <HStack className="gap-[16px]">
          <CustomButton>View My Work</CustomButton>

          <CustomButton className="text-[#2D3748] bg-[#C4DFF680]">
            Get In Touch
          </CustomButton>
        </HStack>
      </VStack>
    </>
  );
}
