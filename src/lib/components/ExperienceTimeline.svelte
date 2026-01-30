<script lang="ts">
  let { exp } = $props();
</script>

<div class="relative">
  <div class="grid md:grid-cols-12 gap-8">
    <!-- Left: Timeline -->
    <div class="md:col-span-3 relative pt-1">
      <div class="md:text-right">
        <div class="mb-4">
          <h3
            class="text-2xl font-bold text-white group-hover:text-[#D9C4FF] transition-colors"
          >
            {exp.company}
          </h3>
          <p class="text-sm text-white/70 font-semibold mt-1">{exp.title}</p>
          <p class="text-xs text-white/50 font-medium mt-2">{exp.period}</p>
        </div>
        <!-- Scale Badge -->
        {#if exp.scale}
          <div
            class="inline-block px-3 py-2 bg-[#D9C4FF]/10 border border-[#D9C4FF]/30 rounded-lg mb-3"
          >
            <p class="text-xs font-bold text-[#D9C4FF]/90 leading-tight">
              {exp.scale}
            </p>
          </div>
        {/if}
      </div>
      <!-- Vertical Line (hidden on mobile) -->
      <div
        class="hidden md:block absolute -right-4 top-0 bottom-0 w-px bg-white/10"
      ></div>
    </div>

    <!-- Right: Content -->
    <div class="md:col-span-9 space-y-5">
      <!-- Summary Line -->
      {#if exp.summary}
        <p class="text-base text-white/90 italic font-medium leading-relaxed">
          {exp.summary}
        </p>
      {/if}

      <!-- Impact Bullets -->
      {#if exp.bullets && exp.bullets.length > 0}
        <div class="space-y-2">
          {#each exp.bullets as bullet}
            <div class="flex items-start gap-3">
              <span class="mt-2 w-1 h-1 rounded-full bg-[#D9C4FF] shrink-0"
              ></span>
              <p class="text-white/80 text-sm leading-relaxed font-medium">
                {bullet}
              </p>
            </div>
          {/each}
        </div>
      {/if}

      <!-- Tech Stack -->
      {#if exp.tech && exp.tech.length > 0}
        <div class="flex flex-wrap gap-2 pt-2">
          {#each exp.tech as tag}
            <span
              class="px-3 py-1.5 bg-white/8 border border-white/15 rounded-full text-xs font-bold text-white/80 hover:text-white hover:border-white/25 transition-all uppercase tracking-wider"
            >
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
