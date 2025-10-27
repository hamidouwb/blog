<script lang="ts">
  import type { Project } from "../../types";
  import GithubIcon from "./svg/GithubIcon.svelte";
  import ExternalLinkIcon from "./svg/ExternalLinkIcon.svelte";

  export let project: Project;
</script>

<article
  class="group relative overflow-hidden rounded-lg border
  border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3
  bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0
  transition-all duration-300 hover:shadow-lg
  hover:border-gruvbox-light-blue dark:hover:border-gruvbox-dark-blue"
>
  {#if project.demoGif}
    <div class="aspect-video overflow-hidden bg-gruvbox-light-bg2 dark:bg-gruvbox-dark-bg2">
      <img
        src={project.demoGif}
        alt="{project.title} demo"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  {/if}

  <div class="p-6">
    <div class="mb-3 flex items-start justify-between">
      <h3 class="text-2xl font-bold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">
        {project.title}
      </h3>

      <div class="flex gap-2">
        {#if project.githubUrl}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg p-2 transition-colors
            hover:bg-gruvbox-light-bg2 dark:hover:bg-gruvbox-dark-bg2
            text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2
            hover:text-gruvbox-light-fg0 dark:hover:text-gruvbox-dark-fg0"
            aria-label="View on GitHub"
          >
            <GithubIcon class="h-6 w-6 fill-current" />
          </a>
        {/if}

        {#if project.liveUrl}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg p-2 transition-colors
            hover:bg-gruvbox-light-bg2 dark:hover:bg-gruvbox-dark-bg2
            text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2
            hover:text-gruvbox-light-fg0 dark:hover:text-gruvbox-dark-fg0"
            aria-label="View live demo"
          >
            <ExternalLinkIcon class="h-6 w-6" />
          </a>
        {/if}
      </div>
    </div>

    <p class="mb-4 text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2">
      {project.description}
    </p>

    <div class="flex flex-wrap gap-2">
      {#each project.tags as tag}
        <span
          class="rounded-full px-3 py-1 text-sm font-medium
          bg-gruvbox-light-yellow/20 dark:bg-gruvbox-dark-yellow/20
          text-gruvbox-light-yellow dark:text-gruvbox-dark-yellow
          border border-gruvbox-light-yellow/30 dark:border-gruvbox-dark-yellow/30"
        >
          {tag}
        </span>
      {/each}
    </div>
  </div>
</article>
