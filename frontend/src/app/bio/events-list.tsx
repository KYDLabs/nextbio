import { BioEvent } from "@/types";
import { Box, Button, Heading, Skeleton, VStack } from "@chakra-ui/react";
import EventCard from "./event-card";
import { useState } from "react";

const MINIMUM_LIST_HEIGHT = 396 + 72;

const EventsList = ({
  events,
  isLoading,
  onCTAClick = () => {},
  seeMoreSize,
}: {
  events?: BioEvent[];
  isLoading: boolean;
  onCTAClick?: (
    mouseEvent: React.MouseEvent<HTMLElement>,
    event: BioEvent
  ) => void;
  seeMoreSize: number;
}) => {
  const hasEvents = !isLoading && events?.length;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Skeleton minH={MINIMUM_LIST_HEIGHT} isLoaded={!isLoading}>
      <VStack gap={0}>
        {hasEvents ? (
          events.map((event, index) => {
            const shouldRender = isExpanded || index < seeMoreSize;
            return shouldRender ? (
              <EventCard
                href={`/bio/${event.id}`}
                venue={event.venue}
                key={event.id}
                highlight={index === 0}
                thumbnail={event.image}
                name={event.name}
                date={new Date(event.start_at)}
                timezone={event.timezone}
                eventId={event.id}
                onCTA={(ev) => onCTAClick(ev, event)}
              />
            ) : null;
          })
        ) : (
          <Heading size="small">No upcoming events for this artist</Heading>
        )}
        <Button mt={4} onClick={() => setIsExpanded(!isExpanded)}>
          See {isExpanded ? "less" : "more"}
        </Button>
      </VStack>
    </Skeleton>
  );
};

export default EventsList;
