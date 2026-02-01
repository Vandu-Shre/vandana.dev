<script lang="ts">
  import { base } from "$app/paths";
  import { ExternalLink, Github, Youtube } from "lucide-svelte";

  let { project } = $props();
</script>

<div
  class="glass-card project-card flex flex-col h-full group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl p-8"
>
  <!-- Radial lighting effect behind card -->
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"
  ></div>

  <!-- Top Section: Thumbnail with Title and Subtitle beside it -->
  <div class="mb-6 relative z-10">
    <div class="flex gap-4 mb-4">
      <!-- Thumbnail in top-left -->
      {#if project.thumbnail}
        <div
          class="shrink-0 w-20 h-20 rounded-lg overflow-hidden opacity-60 group-hover:opacity-80 transition-opacity"
        >
          <img
            src={`${base}${project.thumbnail}`}
            alt="{project.name} preview"
            class="w-full h-full object-cover"
          />
        </div>
      {/if}

      <!-- Title and Description beside thumbnail -->
      <div class="flex-1 flex flex-col justify-center">
        <h3
          class="text-3xl font-bold mb-2 text-white group-hover:text-[#D9C4FF] transition-colors leading-tight"
        >
          {project.name}
        </h3>
        <p class="text-white/75 text-base leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>

    <!-- One-liner (Punch Line) -->
    <p class="text-base text-white/90 font-medium mb-5 leading-relaxed">
      {project.oneLiner}
    </p>

    <!-- Signal Strip -->
    <div class="flex flex-wrap gap-2 mb-5">
      {#each project.signalStrip as signal}
        <span
          class="text-sm text-[#D9C4FF]/90 font-bold tracking-wider uppercase"
        >
          {signal}
        </span>
        {#if signal !== project.signalStrip[project.signalStrip.length - 1]}
          <span class="text-white/30">·</span>
        {/if}
      {/each}
    </div>

    <!-- Impact Bullets (max 2) -->
    <div class="space-y-4 mb-5">
      {#each project.impact as bullet, index}
        <div class="flex items-start gap-3 text-sm text-white leading-relaxed">
          <span class="text-base shrink-0">{index === 0 ? "🚀" : "🧠"}</span>
          <span>{bullet}</span>
        </div>
      {/each}
    </div>

    <!-- Next Features (chip row) -->
    {#if project.nextFeatures && project.nextFeatures.length > 0}
      <div class="mt-5">
        <p
          class="text-xs font-bold text-white/60 uppercase tracking-wider mb-3"
        >
          Next
        </p>
        <div class="flex flex-wrap gap-2">
          {#each project.nextFeatures as feature}
            <span
              class="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 hover:text-white hover:border-white/40 transition-all"
            >
              {feature}
            </span>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <!-- Bottom Section: Tech Stack and CTAs -->
  <div class="mt-auto pt-6 border-t border-white/15">
    <!-- Tech Stack -->
    <div class="mb-4">
      <p class="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
        Tech Stack
      </p>
      <p class="text-sm text-white/80">{project.tech.join(", ")}</p>
    </div>

    <!-- CTA Buttons -->
    <div class="flex gap-2 text-sm flex-wrap">
      {#if project.demoUrl}
        <a
          href={project.demoUrl}
          target="_blank"
          class="px-4 py-2 bg-[#D9C4FF] text-charcoal font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all shadow-md shadow-[#D9C4FF]/30 flex items-center gap-2 relative overflow-hidden group/btn"
        >
          <!-- Glossy highlight -->
          <span
            class="absolute top-0 left-3 w-10 h-1 bg-white/40 rounded-full blur-sm"
          ></span>
          Live <ExternalLink size={12} />
        </a>
      {/if}
      {#if project.githubUrl && project.githubUrl !== "#"}
        <a
          href={project.githubUrl}
          target="_blank"
          class="px-4 py-2 border border-white/25 text-white/80 font-semibold rounded-full hover:border-[#D9C4FF] hover:text-[#D9C4FF] hover:bg-[#D9C4FF]/10 transition-all flex items-center gap-2"
        >
          Code <Github size={14} />
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  .project-card {
    background-color: rgba(42, 36, 64, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(2px);
  }

  .project-card:hover {
    background-color: rgba(42, 36, 64, 0.7);
    border-color: rgba(217, 196, 255, 0.35);
    box-shadow: 0 0 40px -10px rgba(217, 196, 255, 0.28);
  }
</style>
