<script lang="ts">
  import { formatPublishedAt } from "$lib/utils/dates";
  import type { MarkdownPost } from "../../types";

  export let metadata: MarkdownPost["metadata"];

</script>

<header class="p-4">
  <div class="w-full sm:w-3/5 mb-6">
    <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      {#if metadata.youtubeId}
        <iframe
          title={metadata.title}
          src={`https://www.youtube.com/embed/${metadata.youtubeId}?origin=http://example.com`}
          allow="fullscreen"
        />
      {:else}
        <img 
          src={metadata.imgUrl}
          alt={metadata.title}
          class="object-cover"
        />
      {/if}
    </div>
  </div>
  <div>
    <h1 class="text-4xl font-bold mb-4 text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
      {metadata.title}
    </h1>

    <div
      class="py-2 border-t border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3 inline-block
      text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2"
    >
      <span>Published: </span>
      <time
        class="font-light"
        datetime={metadata.publishedAt}
      >
        {formatPublishedAt(metadata.publishedAt)}
      </time>
    </div>
  </div>
</header>
