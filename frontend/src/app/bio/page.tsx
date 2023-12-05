"use client";

import { Box, Heading, Stack, Skeleton, useToast } from "@chakra-ui/react";
import ProfilePicture from "./profile-picture";
import KYDLabsFooter from "./kyd-labs-footer";
import KYDLabsCardFooter from "./kyd-labs-card-footer";
import ArtistHeader from "./artist-header";
import EventCard from "./event-card";
import { useArtistEvents, useBio, useGeolocation } from "@/client/hooks";
import Image from "@/components/Image";
import useSWR from "swr";

export default function Bio() {
  const toast = useToast();
  const bio = useBio();
  const { data: geolocationData } = useGeolocation()
  const { data, error, isLoading } = useArtistEvents(bio.id, geolocationData);
  const hasEvents = !isLoading && data?.events.length

  return (
    <>
      <Box maxW="4xl" width={"100%"} mx="auto">
        <Box px={4}>
          <Image
            width={100}
            height={100}
            borderRadius={"xl"}
            src={bio.logo}
            alt={bio.artist}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </Box>
        <Stack direction={["column-reverse", "row"]} align={"center"} px={4}>
          <ArtistHeader name={bio.artist} fanNumber={bio.fanbase.verified} />
          <ProfilePicture
            mb={["auto", "-40px"]}
            alt={bio.artist}
            src={bio.image}
          />
        </Stack>
        <Box background={"white"} borderRadius={["", "xl"]}>
          <Box
            paddingInlineStart={5}
            paddingInlineEnd={5}
            pt={[4, "50px"]}
            pb={10}
          >
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="semibold"
              mb={6}
              color="gray.800"
            >
              Upcoming Events
            </Heading>
            <Skeleton height="100" isLoaded={!isLoading}>
              {hasEvents ? (
                data.events.map((event) => {
                  return (
                    <EventCard
                      href={`/bio/${event.id}`}
                      venue={event.venue}
                      key={event.id}
                      thumbnail={event.image}
                      name={event.name}
                      date={new Date(event.start_at)}
                      timezone={event.timezone}
                      eventId={event.id}
                      onCTA={() => {
                        toast({
                          title: "Tickets bought!",
                          description: `You just bought 2 tickets for ${event.artist}`,
                          status: "success",
                          isClosable: true,
                          duration: 9000,
                        });
                      }}
                    />
                  );
                })
              ) : (
                <Heading size="small">
                  No upcoming events for this artist
                </Heading>
              )}
            </Skeleton>
          </Box>
          <KYDLabsCardFooter />
        </Box>
      </Box>
      <KYDLabsFooter />
    </>
  );
}
