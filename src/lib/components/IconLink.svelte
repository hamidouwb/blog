<script lang="ts">
  export let href: string;
  export let target: "_self" | "_blank" = "_self";
</script>

<a
  class="p-2 rounded-lg
  text-gruvbox-light-fg1 hover:bg-gruvbox-light-bg2
  dark:text-gruvbox-dark-fg1 dark:hover:bg-gruvbox-dark-bg2
  transition-colors"
  {href}
  {target}
>
  <slot />
</a>
