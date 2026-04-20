export interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  popularity: number;
  followers: {
    total: number;
  };
  genres: string[];
  images: SpotifyImage[];
  external_urls: {
    spotify: string;
  };
}

export interface SpotifySearchResponse {
  artists: {
    items: SpotifyArtist[];
    total: number;
  };
}
