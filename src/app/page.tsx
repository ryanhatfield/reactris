import { ColorModeButton } from "@/components/ui/color-mode";
import { Button, Center, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center>
      <HStack padding={"1em"}>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <ColorModeButton></ColorModeButton>
      </HStack>
    </Center>
  );
}
