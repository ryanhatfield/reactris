"use client";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Card, Center, HStack, VStack } from "@chakra-ui/react";

export default function Home() {
  const blue = useColorModeValue("lightBlue", "blue");
  const off = useColorModeValue("#f9f9f9", "");
  return (
    <Center backgroundColor={off} minHeight={"vh"}>
      <VStack>
        <HStack padding={"1em"} minWidth={"100%"}>
          <Button>Click me</Button>
          <Button>Click me</Button>
          <ColorModeButton
            marginLeft={"auto"}
            marginRight={"0"}
          ></ColorModeButton>
        </HStack>
        <Card.Root>
          <Card.Body>
            <Box width={"20em"} height={"20em"} backgroundColor={blue} />
          </Card.Body>
        </Card.Root>
      </VStack>
    </Center>
  );
}
