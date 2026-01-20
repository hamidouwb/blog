import type { MarkdownPostMetadataAndSlug } from '@/types';
import { formatPublishedAt } from '@/lib/utils/dates';
import Link from 'next/link';

export function PostListing({ post }: { post: MarkdownPostMetadataAndSlug }) {
  const href = `/posts/${post.slug}`;
  const youtubeHref = post.metadata.youtubeId
    ? `https://youtu.be/${post.metadata.youtubeId}`
    : '';
  const isSeries = post.metadata.isSeriesIntro === true;

  return (
    <article className={`p-4 sm:flex sm:space-x-4 ${isSeries ? 'bg-gruvbox-light-bg0/50 dark:bg-gruvbox-dark-bg0/50 border-l-4 border-gruvbox-light-yellow dark:border-gruvbox-dark-yellow' : ''}`}>
      <Link href={href} className="block sm:w-80">
        <div className={`aspect-h-9 aspect-w-16 overflow-hidden rounded-lg ${isSeries ? 'ring-2 ring-gruvbox-light-yellow dark:ring-gruvbox-dark-yellow' : ''}`}>
          {post.metadata.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${post.metadata.youtubeId}`}
              title={post.metadata.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <img
              src={post.metadata.imgUrl}
              alt={post.metadata.title}
              className="object-cover"
            />
          )}
        </div>
      </Link>

      <div className="flex-1 py-2 sm:py-0">
        <Link href={href}>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-medium text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
              {post.metadata.title}
            </h3>
            {isSeries && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gruvbox-light-yellow dark:bg-gruvbox-dark-yellow text-gruvbox-light-bg0 dark:text-gruvbox-dark-bg0">
                📚 Series
              </span>
            )}
          </div>
          <p className="font-light text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2">
            <span>Published: </span>
            <time dateTime={post.metadata.publishedAt}>
              {formatPublishedAt(post.metadata.publishedAt)}
            </time>
          </p>

          <p className="py-2 font-light text-gruvbox-light-fg1 dark:text-gruvbox-dark-fg1">
            {post.metadata.summary}
          </p>
        </Link>

        <div className="flex space-x-4 font-light underline text-gruvbox-light-blue dark:text-gruvbox-dark-blue hover:text-gruvbox-light-aqua dark:hover:text-gruvbox-dark-aqua">
          <Link href={href}>{isSeries ? 'View Series' : 'Read More'}</Link>
          {post.metadata.youtubeId && (
            <a href={youtubeHref}>Watch Video</a>
          )}
        </div>
      </div>
    </article>
  );
}
