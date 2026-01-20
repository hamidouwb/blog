import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, getSeriesTopics } from '@/lib/utils/posts';
import { PostHeader } from '@/components/layout/PostHeader';
import { PostListing } from '@/components/blog/PostListing';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/lib/mdx-components';
import rehypeHighlight from 'rehype-highlight';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug.split('/'),
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: 'article',
      images: [post.metadata.imgUrl],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const seriesTopics = post.metadata.isSeriesIntro ? await getSeriesTopics(slug) : [];

  return (
    <article>
      <PostHeader metadata={post.metadata} />

      {post.metadata.isSeriesIntro ? (
        <>
          {/* Series intro: show description and list of topics */}
          <div className="prose max-w-none px-4 py-4 dark:prose-invert md:prose-lg">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {/* Topics in this series */}
          <section className="px-4 pb-6">
            <header className="mb-4 inline-block border-b py-2 border-gruvbox-light-blue dark:border-gruvbox-dark-blue">
              <h2 className="text-3xl font-semibold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
                Topics in this Series
              </h2>
            </header>

            <section className="divide-y divide-gruvbox-light-bg3 dark:divide-gruvbox-dark-bg3">
              {seriesTopics.map((topic) => (
                <PostListing key={topic.slug} post={topic} />
              ))}
            </section>
          </section>
        </>
      ) : (
        /* Regular post: show content */
        <div className="prose max-w-none px-4 py-4 dark:prose-invert md:prose-lg">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      )}
    </article>
  );
}
