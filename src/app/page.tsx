"use client";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
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

enum Block {
  I = "I",
  J = "J",
  L = "L",
  O = "O",
  S = "S",
  T = "T",
  Z = "Z",
}

enum EmptyCell {
  Empty = "Empty",
}

interface CellOptions {
  block: Block | EmptyCell;
}

interface BoardProps {
  currentBoard: CellOptions[][];
}

function Board(props: BoardProps) {
  return (
    <Flex>
      <Box />
      <Box />
      <Box />
    </Flex>
  );
}

function BoardCard() {
  return (
    <Card.Root>
      <Card.Body>
        <Board />
      </Card.Body>
    </Card.Root>
  );
}

export default function Home() {
  const off = useColorModeValue("#f9f9f9", "");
  return (
    <Center colorPalette={"blue"} bgColor={off} minH={"vh"} paddingY={"0.5em"}>
      <VStack>
        <HStack minW={"100%"}>
          <Heading marginRight={"auto"}>Reactris</Heading>
          <ColorModeButton />
        </HStack>
        <BoardCard />
        <InputCard />
      </VStack>
    </Center>
  );
}
