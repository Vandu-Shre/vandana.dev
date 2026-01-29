<script lang="ts">
  let { exp } = $props();
</script>

<div class="glass-card flex flex-col h-full">
  <div class="mb-4">
    <h3 class="text-xl font-bold text-white mb-1">{exp.company}</h3>
    <p class="text-base text-white/90 font-medium mb-2">{exp.title}</p>
    <span class="text-xs font-bold tracking-[0.2em] text-white/40 uppercase"
      >{exp.period}</span
    >
  </div>

  <div
    class="mb-6 p-2 px-3 bg-white/5 rounded-lg border border-white/5 inline-block"
  >
    <p class="text-xs font-semibold tracking-wide uppercase text-white/80">
      {exp.impactLine}
    </p>
  </div>

  <div class="space-y-3 mb-6 flex-grow">
    {#each exp.bullets.slice(0, 2) as bullet}
      <div class="flex items-start gap-3">
        <span class="mt-1.5 w-1 h-1 rounded-full bg-white/20 shrink-0"></span>
        <p class="text-white/70 leading-tight text-sm">{bullet}</p>
      </div>
    {/each}
  </div>

  <div class="flex flex-wrap gap-1 pt-4 border-t border-white/10">
    {#each exp.tech.slice(0, 3) as tag}
      <span class="pill text-xs px-2 py-0.5">{tag}</span>
    {/each}
  </div>
</div>
