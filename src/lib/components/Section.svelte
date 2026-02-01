<script lang="ts">
  let {
    id,
    theme = "plum",
    glow = false,
    vignette = 0.85,
    noPadding = false,
    customClass = "",
    background,
    children,
  }: {
    id: string;
    theme?: string;
    glow?: boolean;
    vignette?: number;
    noPadding?: boolean;
    customClass?: string;
    background?: any;
    children: any;
  } = $props();

  const themeClass = $derived(`theme-${theme}`);
  const glowClass = $derived(glow ? "has-glow" : "");
  const paddingClass = $derived(
    noPadding ? "" : "px-6 md:px-12 lg:px-20 xl:px-28",
  );
</script>

<section
  {id}
  class="{themeClass} {glowClass} flex flex-col justify-center relative {paddingClass} {customClass}"
  style="--vignette: {vignette}"
>
  {#if background}
    {@render background()}
  {/if}
  <div class="max-w-7xl mx-auto w-full relative z-10">
    {@render children()}
  </div>
</section>
