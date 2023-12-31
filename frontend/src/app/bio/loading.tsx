import Image from "@/components/Image";
import { Center, Spinner, VStack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center height="100vh" flexDirection={"column"}>
      <VStack>
        <Image
          alt="KYD labs logo"
          width={100}
          height={50}
          src="/assets/kydlabs.png"
        />
        <Spinner color="white" />
      </VStack>
    </Center>
  );
}
