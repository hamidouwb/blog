<script lang="ts">
  import { page } from "$app/stores";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>hamidouwb</title>
  <meta
    name="description"
    content="Explore my portfolio of web development projects, featuring full-stack applications, tools, and experiments."
  />
  <meta property="og:title" content="Portfolio | hamidouwb" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta
    property="og:description"
    content="Explore my portfolio of web development projects, featuring full-stack applications, tools, and experiments."
  />
</svelte:head>

<div class="px-4 pb-12">
  <header class="mb-12">
    <h1
      class="mb-4 text-5xl font-bold
      text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0"
    >
      Portfolio
    </h1>
    <p class="text-xl text-gruvbox-light-fg2 dark:text-gruvbox-dark-fg2">
      A collection of projects I've built, ranging from full-stack applications
      to developer tools and experiments.
    </p>
  </header>

  <section class="grid gap-8 md:grid-cols-2">
    {#each data.projects as project}
      <ProjectCard {project} />
    {/each}
  </section>
</div>
