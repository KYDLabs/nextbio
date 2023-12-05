import Image from "@/components/Image";
import config from "@/util/config";
import { HStack, Link, Spacer, Text, VStack } from "@chakra-ui/react";

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
        <Image
          alt="KYD labs logo"
          width={60}
          height={45}
          maxW={"60px"}
          src="/assets/kydlabs-black.png"
        />
        <Spacer />
        <Spacer />
        <Link
          isExternal
          href={config.externalLinks.termsAndConditions}
          fontSize={"small"}
        >
          Terms of Service
        </Link>
        <Spacer />
        <Link
          isExternal
          href={config.externalLinks.privacyPolicy}
          fontSize={"small"}
        >
          Privacy Policy
        </Link>
        <Spacer />
        <Link
          isExternal
          href={config.externalLinks.requestAccess}
          fontSize={"small"}
        >
          Create your own page
        </Link>
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
