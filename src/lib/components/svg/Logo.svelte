<script>
  
  import { onMount } from 'svelte';
  
  onMount(() => {
    import('@dotlottie/player-component');
  });
</script>


<dotlottie-player 
  src="https://lottie.host/686c0216-9676-4bbf-ac0b-be626dbf24fa/uVy640JbOo.json" 
  background="transparent" 
  speed="1" 
  style="width: 150px; height: 150px;" 
  class="fill-current text-black dark:text-white"
  loop
  autoplay>
</dotlottie-player>
