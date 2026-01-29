<script lang="ts">
  let { exp } = $props();
</script>

<div class="relative">
  <div class="grid md:grid-cols-12 gap-8">
    <!-- Left: Timeline -->
    <div class="md:col-span-3 relative">
      <div class="md:absolute md:right-0 md:text-right">
        <div class="mb-3">
          <h3 class="text-xl font-bold text-white">{exp.company}</h3>
          <p class="text-sm text-white/50 font-medium mt-1">{exp.period}</p>
        </div>
        <!-- Impact Badge -->
        <div
          class="inline-block px-3 py-1 bg-mint/10 border border-mint/30 rounded-full"
        >
          <p class="text-xs font-bold text-mint">{exp.impactLine}</p>
        </div>
      </div>
      <!-- Vertical Line (hidden on mobile) -->
      <div
        class="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/10"
      ></div>
    </div>

    <!-- Right: Content -->
    <div class="md:col-span-9 md:pl-8">
      <p class="text-lg text-white font-semibold mb-6">{exp.title}</p>

      <div class="space-y-3 mb-6">
        {#each exp.bullets.slice(0, 4) as bullet}
          <div class="flex items-start gap-3">
            <span class="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0"></span>
            <p class="text-white/80 leading-relaxed">{bullet}</p>
          </div>
        {/each}
      </div>

      <div class="flex flex-wrap gap-2 pt-4">
        {#each exp.tech.slice(0, 5) as tag}
          <span class="pill text-xs px-2.5 py-1">{tag}</span>
        {/each}
      </div>
    </div>
  </div>
</div>
