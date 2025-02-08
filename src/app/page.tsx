"use client";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Card,
  Center,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { LuMoveDown, LuMoveLeft, LuMoveRight } from "react-icons/lu";

function Inputs() {
  return (
    <HStack>
      <IconButton color={"white"}>
        <LuMoveLeft />
      </IconButton>
      <IconButton>
        <LuMoveDown />
      </IconButton>
      <IconButton>
        <LuMoveRight />
      </IconButton>
    </HStack>
  );
}

function InputCard() {
  return (
    <Card.Root>
      <Card.Body>
        <Inputs />
      </Card.Body>
    </Card.Root>
  );
}

function GameCanvas() {
  return <Box height={"30em"} width={"20em"} as="canvas" />;
}

function GameCard() {
  return (
    <Card.Root>
      <Card.Body>
        <GameCanvas />
      </Card.Body>
    </Card.Root>
  );
}

export default function Home() {
  const off = useColorModeValue("#f9f9f9", "");
  return (
    <Center colorPalette={"blue"} bgColor={off} minH={"vh"}>
      <VStack>
        <HStack minWidth={"100%"} alignItems={"end"}>
          <ColorModeButton />
        </HStack>
        <GameCard />
        <InputCard />
      </VStack>
    </Center>
  );
}
