<script lang="ts">
  import { onMount } from "svelte";

  let progress = $state(0);

  onMount(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progress = scrollPercent;
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  });
</script>

<div class="scroll-progress" style="width: {progress}%"></div>
