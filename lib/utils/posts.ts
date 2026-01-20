import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { MarkdownPostMetadataAndSlug, MarkdownPost, MarkdownPostMetadata } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all posts recursively from the posts directory
 */
export async function getAllPosts(): Promise<MarkdownPostMetadataAndSlug[]> {
  const posts: MarkdownPostMetadataAndSlug[] = [];

  function readDirectory(dir: string, baseSlug: string = '') {
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      return;
    }

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Recursively read subdirectories
        readDirectory(fullPath, baseSlug ? `${baseSlug}/${file}` : file);
      } else if (file.match(/\.mdx?$/)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        let slug: string;
        if (file === '_series.mdx' || file === '_series.md') {
          // Series intro: folder/_series.mdx → slug is folder name
          slug = baseSlug;
        } else {
          // Regular post or topic
          const filename = file.replace(/\.mdx?$/, '');
          slug = baseSlug ? `${baseSlug}/${filename}` : filename;
        }

        posts.push({
          slug,
          metadata: data as MarkdownPostMetadata,
        });
      }
    });
  }

  readDirectory(postsDirectory);

  // Sort by publication date (newest first)
  return posts.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<MarkdownPost | null> {
  // Try different possible file paths
  const possiblePaths = [
    path.join(postsDirectory, `${slug}.mdx`),
    path.join(postsDirectory, `${slug}.md`),
    path.join(postsDirectory, `${slug}/_series.mdx`),
    path.join(postsDirectory, `${slug}/_series.md`),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        metadata: data as MarkdownPostMetadata,
        content,
        slug,
      };
    }
  }

  return null;
}

/**
 * Get all topics within a series
 */
export async function getSeriesTopics(seriesSlug: string): Promise<MarkdownPostMetadataAndSlug[]> {
  const seriesDirectory = path.join(postsDirectory, seriesSlug);

  if (!fs.existsSync(seriesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(seriesDirectory);
  const topics: MarkdownPostMetadataAndSlug[] = [];

  files.forEach((file) => {
    if (
      (file.endsWith('.mdx') || file.endsWith('.md')) &&
      file !== '_series.mdx' &&
      file !== '_series.md'
    ) {
      const filePath = path.join(seriesDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      const filename = file.replace(/\.mdx?$/, '');
      const slug = `${seriesSlug}/${filename}`;

      topics.push({
        slug,
        metadata: data as MarkdownPostMetadata,
      });
    }
  });

  // Sort by seriesOrder
  return topics.sort((a, b) => (a.metadata.seriesOrder || 0) - (b.metadata.seriesOrder || 0));
}
