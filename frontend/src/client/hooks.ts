import useSWR from "swr";
import { authenticated } from "./api";
import { BioEvent } from "@/types";
import config from "@/util/config";

export function useArtistEvents(_artistId: string) {
  const { data, error, isLoading } = useSWR<{
    events: BioEvent[];
  }>(`${config.apiUrl}/bio`, authenticated);

  return {
    data: data,
    isLoading,
    error: error,
  };
}

// To mock the bio of the artist request
export const useBio = () => {
  return {
    artist: "Artist 1",
    id: "mock-artist-id",
    logo: "https://content.kydlabs.com/organizations/djmikenasty/logo.png",
    fanbase: { verified: 200000 },
    image:
      "https://content.kydlabs.com/organizations/OR7d2f5145-99a6-44b6-b7aa-2b93fb9896ee/ac880241-1d0e-4d56-b36a-1b3aab8c74b2.png",
  };
};