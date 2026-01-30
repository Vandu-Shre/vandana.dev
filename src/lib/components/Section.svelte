<script lang="ts">
  let {
    id,
    theme = "plum",
    noPadding = false,
    customClass = "",
    background,
    children,
  }: {
    id: string;
    theme?: string;
    noPadding?: boolean;
    customClass?: string;
    background?: any;
    children: any;
  } = $props();
</script>

<section
  {id}
  class="theme-{theme}
         {noPadding ? '' : 'py-20 md:py-30 lg:py-40'}
         px-6 md:px-12 lg:px-20 xl:px-28
         flex flex-col justify-center
         relative overflow-hidden
         transition-colors duration-700
         {customClass}"
>
  {#if background}
    {@render background()}
  {/if}
  <div class="max-w-7xl mx-auto w-full relative z-10">
    {@render children()}
  </div>
</section>
