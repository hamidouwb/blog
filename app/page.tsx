import { Metadata } from 'next';
import { getAllPosts } from '@/lib/utils/posts';
import { HomeHeader } from '@/components/layout/HomeHeader';
import { PostListing } from '@/components/blog/PostListing';
import { ThreeCanvas } from '@/components/three/ThreeCanvas';

export const metadata: Metadata = {
  title: 'hamidouwb',
  description:
    'Full-stack dev passionate about web dev, neovim, dev workflows, mechanical keyboards and sharing what I know.',
  openGraph: {
    title: 'hamidouwb',
    description:
      'Full-stack dev passionate about web dev, neovim, dev workflows, mechanical keyboards and sharing what I know.',
    type: 'website',
  },
};

export default async function HomePage() {
  const allPosts = await getAllPosts();

  // Filter out topics (posts with slugs containing '/')
  // Only show regular posts and series intro posts on homepage
  const posts = allPosts.filter((post) => !post.slug.includes('/'));

  return (
    <>
      <div className="full-screen">
        <ThreeCanvas />
      </div>

      <HomeHeader />

      <section className="pb-6">
        <header className="mx-4 mb-4 inline-block border-b py-2 border-gruvbox-light-yellow dark:border-gruvbox-dark-yellow">
          <h2 className="text-3xl font-semibold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
            Blog Posts
          </h2>
        </header>

        <section className="divide-y divide-gruvbox-light-bg3 dark:divide-gruvbox-dark-bg3">
          {posts.map((post) => (
            <PostListing key={post.slug} post={post} />
          ))}
        </section>
      </section>
    </>
  );
}
