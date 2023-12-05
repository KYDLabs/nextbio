import Image from "@/components/Image";
import config from "@/util/config";
import { VStack, Spacer, Text, HStack, Link } from "@chakra-ui/react";

const KYDLabsFooter = () => {
  return (
    <VStack
      mt={5}
      display={["flex", "none"]}
      p={4}
      justifyContent={"space-between"}
    >
      <Image
        alt="KYD labs log"
        width={75}
        height={37}
        maxW={"75px"}
        src="/assets/kydlabs.png"
      />
      <HStack>
        <Link
          href={config.externalLinks.termsAndConditions}
          color="white"
          fontSize={"small"}
        >
          Terms of Service
        </Link>
        <Spacer />
        <Link
          href={config.externalLinks.privacyPolicy}
          color="white"
          fontSize={"small"}
        >
          Privacy Policy
        </Link>
        <Spacer />
      </HStack>
      <Link
        href={config.externalLinks.requestAccess}
        color="white"
        fontSize={"small"}
      >
        Create your own page
      </Link>
      <Spacer />
      <Text
        fontSize={"small"}
        color="white"
        align={"right"}
        opacity={0.8}
        suppressHydrationWarning
      >
        {`© `}
        {new Date().getFullYear()} KYD Labs Inc. 1.9.7
      </Text>
    </VStack>
  );
};

export default KYDLabsFooter;
