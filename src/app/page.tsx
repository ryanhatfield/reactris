import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Card,
  Center,
  ClientOnly,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { LuMoveDown, LuMoveLeft, LuMoveRight } from "react-icons/lu";

function Inputs() {
  return (
    <Card.Root>
      <Card.Body>
        <VStack>
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
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}

export default function Home() {
  const off = useColorModeValue("#f9f9f9", "");
  return (
    <ClientOnly>
      <Center colorPalette={"blue"} bgColor={off} minH={"vh"}>
        <VStack>
          <HStack minWidth={"100%"} alignItems={"end"}>
            <ColorModeButton />
          </HStack>
          <Card.Root>
            <Card.Body>
              <Box height={"30em"} width={"20em"} as="canvas" />
            </Card.Body>
          </Card.Root>
          <Inputs />
        </VStack>
      </Center>
    </ClientOnly>
  );
}
