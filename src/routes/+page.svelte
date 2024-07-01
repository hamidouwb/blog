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

  <title>dev_burst</title>
  <meta
    name="description"
    content="Full-stack dev passionate about web dev, neovim, dev workflows, mechanical keyboards 
    and sharing what I know."
  />
  <meta property="og:title" content="bev_burst" />
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
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, 1);
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
    border-b py-2 dark:border-gray-700"
  >
    <h2 class="text-3xl font-semibold">Blog Posts</h2>
  </header>

  <section class="divide-y dark:divide-gray-700">
    {#each data.posts as post}
      <PostListing {post} />
    {/each}
  </section>
</section>
