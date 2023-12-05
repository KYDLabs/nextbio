import {
  HStack,
  Image as ChakraImage,
  Box,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { Event } from "./types";
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
}: {
  name: string;
  eventId: string;
  href?: string;
  thumbnail: string;
  timezone: string;
  date: Date;
  venue: Event["venue"];
  onCTA?: (event: React.MouseEvent<HTMLElement>, ...args: any[]) => void;
}) => {
  return (
    <Link href={href}>
      <HStack bg="white" width={"full"} justify={"space-between"} px={[2, 4]}>
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
