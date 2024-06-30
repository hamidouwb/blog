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
