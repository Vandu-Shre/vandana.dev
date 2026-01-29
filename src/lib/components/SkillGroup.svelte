<script lang="ts">
  let { title, skills, context } = $props();
</script>

<div class="glass-card flex flex-col h-full">
  <h3 class="text-xl font-bold mb-2">{title}</h3>
  <p class="text-xs text-white/50 mb-6 italic">{context}</p>

  <div class="flex flex-wrap gap-2 mt-auto">
    {#each skills as skill}
      <span class="pill">
        {skill}
      </span>
    {/each}
  </div>
</div>
