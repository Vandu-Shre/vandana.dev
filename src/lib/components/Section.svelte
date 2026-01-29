<script lang="ts">
  let { id, theme = "plum", children } = $props();
</script>

<section
  {id}
  class="theme-{theme} py-32 md:py-56 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden transition-colors duration-700"
>
  <div class="max-w-7xl mx-auto w-full relative z-10">
    {@render children()}
  </div>
</section>
