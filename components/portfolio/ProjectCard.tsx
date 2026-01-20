import type { Project } from '@/types';
import { GithubIcon, ExternalLinkIcon } from '@/components/icons';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3 bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0 transition-all duration-300 hover:shadow-lg hover:border-gruvbox-light-blue dark:hover:border-gruvbox-dark-blue">
      {project.demoGif ? (
        <div
          className="w-full"
          style={{ paddingBottom: '56.25%', position: 'relative', overflow: 'hidden' }}
        >
          <img
            src={project.demoGif}
            alt={`${project.title} demo`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : project.youtubeId ? (
        <div
          className="w-full"
          style={{ paddingBottom: '56.25%', position: 'relative', overflow: 'hidden' }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={`${project.title} video`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null}

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-2xl font-bold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
            {project.title}
          </h3>

          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-gruvbox-light-bg2 dark:hover:bg-gruvbox-dark-bg2 text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2 hover:text-gruvbox-light-fg0 dark:hover:text-gruvbox-dark-fg0"
                aria-label="View on GitHub"
              >
                <GithubIcon className="h-6 w-6 fill-current" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-gruvbox-light-bg2 dark:hover:bg-gruvbox-dark-bg2 text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2 hover:text-gruvbox-light-fg0 dark:hover:text-gruvbox-dark-fg0"
                aria-label="View live demo"
              >
                <ExternalLinkIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-sm font-medium bg-gruvbox-light-yellow/20 dark:bg-gruvbox-dark-yellow/20 text-gruvbox-light-yellow dark:text-gruvbox-dark-yellow border border-gruvbox-light-yellow/30 dark:border-gruvbox-dark-yellow/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
