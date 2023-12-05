export interface BioEvent {
  id: string;
  name: string;
  artist: string;
  start_at: string;
  display_start_at: string;
  timezone: string;
  venue: BioVenue;
  distance: number;
}

export interface BioVenue {
  name: string;
  city: string;
  lat: number;
  long: number;
}
