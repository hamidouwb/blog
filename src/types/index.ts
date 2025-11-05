import type { ComponentType } from 'svelte';

// from markdown files
export type MarkdownPost = {
	metadata: {
		title: string;
		imgUrl: string;
		youtubeId?: string; // ? In case youtubeId is not present
		publishedAt: string;
		summary: string;
	};
	default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
	slug: string;
	metadata: MarkdownPost['metadata'];
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
