<script lang="ts">
  import { ExternalLink, Github, Youtube } from "lucide-svelte";

  let { project } = $props();
</script>

<div class="glass-card flex flex-col h-full group">
  <div class="mb-6">
    <h3 class="text-2xl font-bold mb-3 group-hover:text-mint transition-colors">
      {project.name}
    </h3>
    <p class="text-white/70 text-sm mb-4">{project.description}</p>

    <!-- Proof Bullets -->
    <div class="space-y-2">
      {#each project.impact as bullet}
        <div class="flex items-start gap-3 text-sm text-white/90">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-mint shrink-0"></span>
          <span>{bullet}</span>
        </div>
      {/each}
    </div>

    <!-- Roadmap -->
    {#if project.roadmap}
      <div class="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
        <p class="text-xs font-semibold text-white/50 mb-1">ROADMAP</p>
        <p class="text-sm text-white/80">{project.roadmap}</p>
      </div>
    {/if}
  </div>

  <!-- Tech Tags -->
  <div class="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2 mb-4">
    {#each project.tech as tag}
      <span class="pill">{tag}</span>
    {/each}
  </div>

  <!-- Links Row -->
  <div class="flex gap-6 text-sm font-bold uppercase tracking-widest">
    {#if project.demoUrl}
      <a
        href={project.demoUrl}
        target="_blank"
        class="text-mint hover:text-white transition-colors flex items-center gap-2"
      >
        Demo <ExternalLink size={14} />
      </a>
    {/if}
    {#if project.githubUrl && project.githubUrl !== "#"}
      <a
        href={project.githubUrl}
        target="_blank"
        class="text-white/70 hover:text-white transition-colors flex items-center gap-2"
      >
        GitHub <Github size={14} />
      </a>
    {/if}
    {#if project.videoUrl}
      <a
        href={project.videoUrl}
        target="_blank"
        class="text-white/70 hover:text-white transition-colors flex items-center gap-2"
      >
        Video <Youtube size={14} />
      </a>
    {/if}
  </div>
</div>
