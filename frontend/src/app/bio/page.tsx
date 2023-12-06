"use client";

import {
  Box,
  Heading,
  Stack,
  Skeleton,
  useToast,
  VStack,
} from "@chakra-ui/react";
import ProfilePicture from "./profile-picture";
import KYDLabsCardFooter from "./kyd-labs-card-footer";
import ArtistHeader from "./artist-header";
import { useArtistEvents, useBio, useGeolocation } from "@/client/hooks";
import Image from "@/components/Image";
import EventsList from "./events-list";

export default function Bio() {
  const toast = useToast();
  const bio = useBio();
  const { data: geolocationData } = useGeolocation();
  const { data, error, isLoading } = useArtistEvents(bio.id, geolocationData);

  return (
    <>
      <Box maxW="4xl" width={"100%"} mx="auto">
        <Box px={4}>
          <Image
            width={100}
            height={100}
            borderRadius={"xl"}
            src={bio.logo}
            alt={`${bio.artist} logo`}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </Box>
        <Stack direction={["column-reverse", "row"]} align={"center"} px={4}>
          <ArtistHeader name={bio.artist} fanNumber={bio.fanbase.verified} />
          <ProfilePicture
            mb={["auto", "-40px"]}
            alt={`${bio.artist} picture`}
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
              <EventsList
                isLoading={isLoading}
                seeMoreSize={3}
                events={data?.events}
                onCTAClick={(_, event) => {
                  toast({
                    title: "Tickets bought!",
                    description: `You just bought 2 tickets for ${event.artist}`,
                    status: "success",
                    isClosable: true,
                    duration: 9000,
                  });
                }}
              />
          </Box>
          <KYDLabsCardFooter />
        </Box>
      </Box>
    </>
  );
}
