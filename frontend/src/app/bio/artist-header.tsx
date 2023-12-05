import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SocialIcon from "./social-media-icon";
import { formatFanNumber } from "@/util/date";

const ArtistHeader = ({
  name,
  fanNumber,
}: {
  name: string;
  fanNumber: number;
}) => {
  return (
    <Box alignSelf={"flex-end"} width={"full"}>
      <Heading fontSize={["4xl", "5xl"]} fontWeight="bold" color="white">
        {name}
      </Heading>
      <Text color="white" fontSize="sm" mt={2}>
        {formatFanNumber(fanNumber)} verified fans
      </Text>
      <Flex my={4} gap={2} flexWrap={"wrap"}>
        <SocialIcon platform="twitter" />
        <SocialIcon platform="instagram" />
        <SocialIcon platform="spotify" />
        <SocialIcon platform="share" />
        <SocialIcon platform="soundcloud" />
        <SocialIcon platform="youtube" />
      </Flex>
    </Box>
  );
};

export default ArtistHeader;
