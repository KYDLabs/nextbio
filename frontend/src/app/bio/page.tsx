import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image as ChakraImage,
  Spacer,
  Stack,
  HStack,
} from "@chakra-ui/react";
import ProfilePicture from "./profile-picture";
import SocialIcon from "./social-media-icon";
import KYDLabsFooter from "./kyd-labs-footer";
import KYDLabsCardFooter from "./kyd-labs-card-footer";

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
              <Button variant={"outline"} display={["none", "block"]}>Get Tickets</Button>
            </HStack>
          </Box>
          <KYDLabsCardFooter />
        </Box>
      </Box>
      <KYDLabsFooter />
    </Box>
  );
}
