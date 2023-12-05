import useSWR from "swr";
import { authenticated } from "./api";
import { Event } from "@/app/bio/types";
import config from "@/util/config";

export function useArtistEvents(_artistId: string) {
  const { data, error, isLoading } = useSWR<{
    events: Event[];
  }>(`${config.apiUrl}/bio`, authenticated);

  return {
    data: data,
    isLoading,
    error: error,
  };
}