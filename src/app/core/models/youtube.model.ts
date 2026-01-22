export interface YouTubeResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeItem[];
}

export interface YouTubeItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    channelId?: string;
    videoId?: string;
  };
  snippet: YouTubeSnippet;
}

export interface YouTubeSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
}

export interface YouTubeThumbnail {
  url: string;
}
