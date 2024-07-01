<script lang="ts">
  import "./prism_gruvbox.css";
  import type { PageData } from "./$types";
  import CopyCodeInjector from "$lib/components/CopyCodeInjector.svelte";
  import PostHeader from "$lib/components/PostHeader.svelte";
  import "prismjs/plugins/line-numbers/prism-line-numbers.js";
  import { page } from "$app/stores";
  import Giscus from "@giscus/svelte";

  export let data: PageData;

  const { metadata, post: Post } = data;
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.summary} />
  <meta property="og:title" content={metadata.title} />
  <meta property="og:type" content="article" />
  <meta property="og:description" content={metadata.summary} />
  <meta property="og:image" content={metadata.imgUrl} />
  <meta property="og:url" content={$page.url.href} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
<article>
  <PostHeader {metadata} />

  <div
    class="prose max-w-none px-4 py-4 dark:prose-invert md:prose-lg"
  >
    <CopyCodeInjector>
      <Post />
    </CopyCodeInjector>
  </div>
</article>

<div class="px-4 py-4">
  <Giscus
    id="comments"
    repo="Waraba2/blog"
    repoId="R_kgDOMQMafQ"
    category="General"
    mapping="specific"
    term={$page.url.pathname}
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="bottom"
    theme="dark_tritanopia"
    lang="en"
    loading="lazy"
  />
</div>
