import {
  HStack,
  Image as ChakraImage,
  Box,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { BioEvent } from "../../types";
import Image from "@/components/Image";
import { eventDateFormat } from "@/util/date";

const EventCard = ({
  name,
  date,
  venue,
  eventId,
  thumbnail,
  timezone,
  onCTA = () => {},
  href,
  highlight,
}: {
  name: string;
  eventId: string;
  href?: string;
  thumbnail: string;
  timezone: string;
  highlight: boolean,
  date: Date;
  venue: BioEvent["venue"];
  onCTA?: (event: React.MouseEvent<HTMLElement>, ...args: any[]) => void;
}) => {
  return (
    <Link
      href={href}
      width={"full"}
      boxShadow={highlight ? "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;" : ''}
      py={[3, 4]}
      mb={highlight ? 4 : 0}
      borderRadius={highlight ? 'xl' : ''}
      borderBottomWidth={1}
      borderBottomColor={"gray.200"}
    >
      <HStack width={"full"} justify={"space-between"} px={[2, 4]}>
        <HStack>
          <Image
            alt={`${name} picture`}
            width={100}
            height={100}
            maxWidth={100}
            maxH={100}
            quality={65}
            src={thumbnail}
            borderRadius={"lg"}
          />
          <Box justifyContent={"space-between"}>
            <Heading fontSize="lg" fontWeight="semibold">
              {name}
            </Heading>
            <Text color="blue" fontSize="sm" fontWeight={"medium"}>
              {eventDateFormat(date, timezone)}
            </Text>
            <Text color="gray.800" fontSize="sm">
              {venue.name}, {venue.city}
            </Text>
          </Box>
        </HStack>
        <Button
          variant={"outline"}
          display={["none", "block"]}
          onClick={(event) => {
            event.preventDefault();
            onCTA(event, eventId);
          }}
        >
          Get Tickets
        </Button>
      </HStack>
    </Link>
  );
};

export default EventCard;
