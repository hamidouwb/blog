<script lang="ts">
  import { page } from "$app/stores";
  import HomeHeader from "$lib/components/HomeHeader.svelte";
  import PostListing from "$lib/components/PostListing.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  import { Canvas } from '@threlte/core'
  import Scene from '$lib/components/Scene.svelte'
</script>


<svelte:head>

  <title>hamidouwb</title>
  <meta
    name="description"
    content="Full-stack dev passionate about web dev, neovim, dev workflows, mechanical keyboards
    and sharing what I know."
  />
  <meta property="og:title" content="hamidouwb" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta
    property="og:description"
    content="Full-stack dev passionate about web dev, neovim, dev workflows, mechanical keyboards
    and sharing what I know."
  />
</svelte:head>

<style>
  .full-screen {
    height: 35vh;
    width: 35vh;
    overflow: hidden;
    display: flex;
    justify-content: flex-start; /* Justifies content to the left */
    align-items: center;
    border-radius: 300px;
    box-shadow:
      inset 0 0 0 1px hsla(0, 0%, 0%, 0.2),
      0 10px 25px -5px rgba(0, 0, 0, 0.3),
      0 8px 10px -6px rgba(0, 0, 0, 0.2);
    margin-top: 10px
  }
</style>

<div class="full-screen">
  <Canvas>
    <Scene />
  </Canvas>
</div>
<HomeHeader />

<section class="pb-6">
  <header
    class="mx-4 mb-4 inline-block
    border-b py-2 border-gruvbox-light-yellow dark:border-gruvbox-dark-yellow"
  >
    <h2 class="text-3xl font-semibold text-gruvbox-light-fg0 dark:text-gruvbox-dark-fg0">Blog Posts</h2>
  </header>

  <section class="divide-y divide-gruvbox-light-bg3 dark:divide-gruvbox-dark-bg3">
    {#each data.posts as post}
      <PostListing {post} />
    {/each}
  </section>
</section>
