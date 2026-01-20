// Post and content types
export type MarkdownPostMetadata = {
  title: string;
  imgUrl: string;
  youtubeId?: string; // Optional YouTube video ID
  publishedAt: string; // ISO date format
  summary: string;
  seriesId?: string; // Optional: ID of the series this post belongs to
  seriesOrder?: number; // Optional: Order within the series
  isSeriesIntro?: boolean; // Optional: True if this is a series introduction post
};

export type MarkdownPost = {
  metadata: MarkdownPostMetadata;
  content: string; // MDX content as string
  slug: string;
};

export type MarkdownPostMetadataAndSlug = {
  slug: string;
  metadata: MarkdownPostMetadata;
};

// Portfolio projects
export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoGif?: string;
  youtubeId?: string;
  githubUrl?: string;
  liveUrl?: string;
};
