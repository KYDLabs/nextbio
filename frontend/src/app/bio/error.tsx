"use client";

import Image from "@/components/Image";
import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Center height="100vh" flexDirection={"column"}>
      <VStack>
        <Image
          alt="KYD labs logo"
          width={100}
          height={50}
          src="/assets/kydlabs.png"
        />
        <Text color="white" mb={10}>
          Oops, there is an error!
        </Text>
        <Button type="button" onClick={() => reset()}>
          Try again?
        </Button>
      </VStack>
    </Center>
  );
}
