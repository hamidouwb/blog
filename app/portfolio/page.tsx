import { Metadata } from 'next';
import { projects } from '@/lib/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';

export const metadata: Metadata = {
  title: 'Portfolio | hamidouwb',
  description:
    'Explore my portfolio of web development projects, featuring full-stack applications, tools, and experiments.',
  openGraph: {
    title: 'Portfolio | hamidouwb',
    description:
      'Explore my portfolio of web development projects, featuring full-stack applications, tools, and experiments.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <div className="px-4 pb-12">
      <header className="mb-12">
        <h1 className="mb-4 text-5xl font-bold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
          Portfolio
        </h1>
        <p className="text-xl text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2">
          A collection of projects I've built, ranging from full-stack applications to developer
          tools and experiments.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
