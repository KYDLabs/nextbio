import { HStack, Link, Spacer, Text, VStack, Image as ChakraImage } from "@chakra-ui/react";

const KYDLabsCardFooter = () => {
  return (
    <HStack
      display={["none", "flex"]}
      bg="gray.200"
      borderWidth={1}
      borderColor={"gray.300"}
      borderBottomLeftRadius={"xl"}
      borderBottomRightRadius={"xl"}
      p={4}
      justifyContent={"space-between"}
    >
      <HStack>
        <ChakraImage maxW={"60px"} src="assets/kydlabs-black.png" />
        <Spacer />
        <Spacer />
        <Link fontSize={"small"}>Terms of Service</Link>
        <Spacer />
        <Link fontSize={"small"}>Privacy Policy</Link>
        <Spacer />
        <Link fontSize={"small"}>Create your own page</Link>
      </HStack>
      <VStack alignItems={"flex-end"}>
        <Text fontSize={"small"} suppressHydrationWarning>
          {`© `}
          {new Date().getFullYear()} KYD Labs Inc.
        </Text>
        <Text fontSize={"small"} color="gray.500" align={"right"}>
          1.9.7
        </Text>
      </VStack>
    </HStack>
  );
};

export default KYDLabsCardFooter;