<script>
  import GithubIcon from '$lib/components/svg/GithubIcon.svelte';
  import LinkedInIcon from '$lib/components/svg/LinkedInIcon.svelte';
  import IconLink from '$lib/components/IconLink.svelte';
  import DarkmodeButton from "$lib/components/DarkmodeButton.svelte"
  import PortfolioIcon from "$lib/components/svg/PortfolioIcon.svelte"

</script>

<header class="fixed z-10 top-0 inset-x-0 border-b
  bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0
  border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3">
  <nav class="flex items-center justify-start max-w-5xl mx-auto px-4 h-24">
    <a href="/" class="mr-auto">
      <img src="/headshot.png" alt="Profile" class="w-20 h-20 rounded-full object-cover object-top shadow-lg ring-2 ring-gruvbox-light-bg3 dark:ring-gruvbox-dark-bg3 scale-110" />
    </a>
    <div class="flex space-x-1 items-center">
      <DarkmodeButton />
      <IconLink href="/portfolio">
        <PortfolioIcon class="w-10 h-10 fill-current" />
      </IconLink>
      <IconLink
        href="https://github.com/hamidouwb"
        target="_blank"
      >
        <GithubIcon class="w-10 h-10 fill-current"/>
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/hamidouwb/"
        target="_blank"
      >
        <LinkedInIcon class="w-10 h-10 fill-current"/>
      </IconLink>
    </div>
  </nav>
</header>

