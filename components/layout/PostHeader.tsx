import { formatPublishedAt } from '@/lib/utils/dates';
import type { MarkdownPostMetadata } from '@/types';

export function PostHeader({ metadata }: { metadata: MarkdownPostMetadata }) {
  return (
    <header className="p-4">
      <div className="w-full sm:w-3/5 mb-6">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          {metadata.youtubeId ? (
            <iframe
              title={metadata.title}
              src={`https://www.youtube.com/embed/${metadata.youtubeId}?origin=http://example.com`}
              allow="fullscreen"
            />
          ) : (
            <img
              src={metadata.imgUrl}
              alt={metadata.title}
              className="object-cover"
            />
          )}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
          {metadata.title}
        </h1>

        <div className="py-2 border-t border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3 inline-block text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2">
          <span>Published: </span>
          <time
            className="font-light"
            dateTime={metadata.publishedAt}
          >
            {formatPublishedAt(metadata.publishedAt)}
          </time>
        </div>
      </div>
    </header>
  );
}
