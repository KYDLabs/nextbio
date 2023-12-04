import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Button,
  Image as ChakraImage,
  Spacer,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import ProfilePicture from "./profile-picture";
import SocialIcon from "./social-media-icon";

export default function Bio() {
  return (
    <Box
      bg="gray.50"
      p={[0, 4]}
      backgroundImage={
        "linear-gradient(322.9deg, rgb(139, 139, 139) -32.49%, rgb(0, 0, 0) 30.1%, rgb(51, 46, 56) 97.31%)"
      }
      height={"100vh"}
    >
      <Box maxW="4xl" width={"100%"} mx="auto">
        <Box px={4}>
          <ChakraImage
            w={100}
            h={100}
            borderRadius={"xl"}
            src="assets/org-logo.png"
            alt="Mike Nasty"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </Box>
        <Stack direction={["column-reverse", "row"]} align={"center"} px={4}>
          <Box alignSelf={"flex-end"} width={"full"}>
            <Heading fontSize={["4xl", "5xl"]} fontWeight="bold" color="white">
              Mike Nasty
            </Heading>
            <Text color="white" fontSize="sm" mt={2}>
              200K verified fans
            </Text>
            <Flex my={4} gap={2}>
              <SocialIcon platform="twitter" />
              <SocialIcon platform="instagram" />
              <SocialIcon platform="spotify" />
              <SocialIcon platform="share" />
              <SocialIcon platform="soundcloud" />
              <SocialIcon platform="youtube" />
              {/* Add other icons */}
            </Flex>
          </Box>
          <Spacer />
          <ProfilePicture
            mb={["auto", "-40px"]}
            alt="Mike Nasty"
            src="https://content.kydlabs.com/organizations/OR7d2f5145-99a6-44b6-b7aa-2b93fb9896ee/ac880241-1d0e-4d56-b36a-1b3aab8c74b2.png"
          />
        </Stack>

        <Box background={"white"} borderRadius={["", "xl"]}>
          <Box paddingInlineStart={5} paddingInlineEnd={5} pt={"50px"} pb={10}>
            <Heading
              fontSize="3xl"
              fontWeight="semibold"
              mb={6}
              color="gray.800"
            >
              Upcoming Events
            </Heading>
            <HStack bg="white" width={"full"} justify={"space-between"} px={4}>
              <HStack>
                <ChakraImage
                  maxWidth={100}
                  maxH={100}
                  src="https://content.kydlabs.com/organizations/OR7d2f5145-99a6-44b6-b7aa-2b93fb9896ee/ac880241-1d0e-4d56-b36a-1b3aab8c74b2.png"
                  borderRadius={"lg"}
                />
                <Box justifyContent={"space-between"}>
                  <Heading fontSize="lg" fontWeight="semibold">
                    No Filter NYE
                  </Heading>
                  <Text color="blue" fontSize="sm" fontWeight={"medium"}>
                    Sun Dec 31 9:00PM
                  </Text>
                  <Text color="gray.800" fontSize="sm">
                    Lot 45 Bushwick New York
                  </Text>
                </Box>
              </HStack>
              <Button
                display={["none", "block"]}
                color="black"
                background="transparent"
                borderColor={"black"}
                borderWidth={1}
                rounded="lg"
                fontWeight="medium"
              >
                Get Tickets
              </Button>
            </HStack>
          </Box>

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
        </Box>
      </Box>
      <VStack
        mt={5}
        display={["flex", "none"]}
        p={4}
        justifyContent={"space-between"}
      >
        <ChakraImage maxW={"75px"} src="assets/kydlabs.png" />
        <HStack>
          <Link color="white" fontSize={"small"}>
            Terms of Service
          </Link>
          <Spacer />
          <Link color="white" fontSize={"small"}>
            Privacy Policy
          </Link>
          <Spacer />
        </HStack>
        <Link color="white" fontSize={"small"}>
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
    </Box>
  );
}
