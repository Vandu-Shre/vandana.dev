<script lang="ts">
  import { base } from "$app/paths";
  import { cn } from "$lib/utils";
  import Header from "$lib/components/Header.svelte";
  import Section from "$lib/components/Section.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import ExperienceTimeline from "$lib/components/ExperienceTimeline.svelte";
  import Reveal from "$lib/components/Reveal.svelte";
  import ScrollProgress from "$lib/components/ScrollProgress.svelte";
  import { portfolioData } from "$lib/data";
  import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-svelte";

  let emailCopied = false;

  // CTAs button classes
  const heroCTAClasses = cn(
    "inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#D9C4FF]/90 text-charcoal font-semibold rounded-full",
    "hover:scale-105 hover:bg-[#D9C4FF] active:scale-[0.98] focus-visible:outline focus-visible:outline-2",
    "focus-visible:outline-offset-2 focus-visible:outline-[#D9C4FF]/50 transition-all shadow-lg shadow-[#D9C4FF]/10",
    "relative overflow-hidden group squish-btn",
  );

  const downloadBtnClasses = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/15",
    "text-white/60 text-sm hover:border-[#D9C4FF]/40 hover:text-white active:scale-[0.98]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9C4FF]/30",
    "transition-all group",
  );

  const socialLinkClasses = cn("hover:text-[#D9C4FF] transition-colors");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("shree.vandu@gmail.com");
      emailCopied = true;
      setTimeout(() => {
        emailCopied = false;
      }, 1600);
    } catch (err) {
      emailCopied = false;
    }
  };
</script>

<ScrollProgress />
<Header />

<main>
  <!-- Hero Section -->
  <Section
    id="top"
    theme="plumDeep"
    glow={false}
    vignette={0.95}
    noPadding={true}
    customClass="h-[calc(100vh-80px)] overflow-hidden"
  >
    {#snippet background()}
      <!-- Designer Background with Radial Gradients -->
      <div class="hero-bg" style="opacity: 0.6; filter: blur(1px);"></div>
    {/snippet}

    <div
      class="max-w-4xl mx-auto h-full flex items-center justify-center relative z-10 px-6"
    >
      <Reveal>
        <div class="hero-stack relative">
          <!-- Radial Spotlights behind headline -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              class="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#D9C4FF]/[0.04] blur-[100px] rounded-full"
            ></div>
          </div>

          <!-- Intro Line -->
          <div class="relative z-10 pt-8 md:pt-12">
            <p
              class="text-sm md:text-base tracking-[0.2em] uppercase text-white/70 flex items-center justify-center gap-3"
            >
              <span class="text-[#D9C4FF] shimmer">✦</span>
              <span>Hi, I'm Vandana</span>
            </p>
          </div>

          <!-- Main Headline -->
          <div class="relative z-10 py-6 md:py-8">
            <h1
              class="hero-title font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white"
            >
              <span class="block whitespace-nowrap">
                <span
                  class="inline-block stagger-word"
                  style="animation-delay: 0ms">I</span
                >
                <span
                  class="inline-block stagger-word"
                  style="animation-delay: 20ms">build</span
                >
                <span
                  class="text-[#D9C4FF] font-black tracking-[0.01em] inline-block stagger-word"
                  style="animation-delay: 40ms">UIs</span
                >
                <span
                  class="text-[#D9C4FF] font-black tracking-[0.01em] inline-block stagger-word"
                  style="animation-delay: 60ms">you</span
                >
                <span
                  class="text-[#D9C4FF] font-black tracking-[0.01em] inline-block stagger-word"
                  style="animation-delay: 80ms">notice</span
                >
              </span>
              <span class="block whitespace-nowrap">
                <span
                  class="inline-block stagger-word"
                  style="animation-delay: 100ms">and</span
                >
                <span
                  class="text-outline text-white inline-block stagger-word"
                  style="animation-delay: 120ms">backends</span
                >
                <span
                  class="text-outline text-white inline-block stagger-word"
                  style="animation-delay: 140ms">that</span
                >
                <span
                  class="text-outline text-white inline-block stagger-word"
                  style="animation-delay: 160ms">are&nbsp;resilient.</span
                >
              </span>
            </h1>
          </div>

          <!-- Role Line -->
          <p
            class="text-xs sm:text-sm md:text-base text-white/40 font-medium relative z-10 whitespace-nowrap"
          >
            Full-Stack Engineer · React · TypeScript · Node/NestJS · AWS/GCP
          </p>

          <p class="text-xs text-white/45 font-medium tracking-wide">
            Open to full-time roles · Germany
          </p>

          <!-- Proof Strip (Quiet) -->
          <div class="relative z-10 mt-2">
            <div
              class="flex items-center justify-center gap-2 text-xs opacity-55"
            >
              <span class="font-bold text-[#D9C4FF]">1M+</span>
              <span class="text-white/60">users</span>
              <span class="text-white/30 mx-1">|</span>
              <span class="font-bold text-[#D9C4FF]">&lt;100ms</span>
              <span class="text-white/60">sync</span>
              <span class="text-white/30 mx-1">|</span>
              <span class="font-bold text-[#D9C4FF]">1,700+</span>
              <span class="text-white/60">stores</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="relative z-10 pt-16 md:pt-20">
            <a href="#footer" class={heroCTAClasses}>
              <span class="relative">Let's Talk</span>
              <ArrowRight
                size={16}
                class="relative transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>

  <!-- Projects Grid -->
  <Section id="projects" theme="indigo" vignette={0.85}>
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <div class="mb-16">
          <h2 class="text-4xl font-bold text-white mb-6">Featured Projects</h2>
        </div>
      </Reveal>
      <div class="grid md:grid-cols-2 gap-10">
        {#each portfolioData.projects as project}
          <Reveal>
            <ProjectCard {project} />
          </Reveal>
        {/each}
      </div>
    </div>
  </Section>

  <!-- Technical Skills -->
  <Section id="skills" theme="charcoal" vignette={0.92}>
    <div class="max-w-6xl mx-auto relative">
      <Reveal>
        <h2 class="text-4xl font-bold text-white mb-16 relative z-10">
          The Tech Palette I Work With
        </h2>
      </Reveal>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {#each portfolioData.skills as skill}
          <Reveal>
            <div
              class="glass-card skill-card flex flex-col h-full relative overflow-hidden group transition-all duration-300 transform hover:scale-[1.01] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D9C4FF]/20"
            >
              <!-- Radial lighting behind card -->
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"
              ></div>

              <!-- Subtle geometric background -->
              <div
                class="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none"
              >
                <svg
                  class="w-full h-full"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="white"
                    stroke-width="0.3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    stroke="white"
                    stroke-width="0.3"
                  />
                </svg>
              </div>

              <div class="relative z-10">
                <h3
                  class="text-2xl font-bold mb-3 text-white group-hover:text-[#D9C4FF] transition-colors"
                >
                  {skill.category}
                </h3>
                <p class="text-sm text-white/70 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                <!-- Core Skills -->
                {#if skill.proficiency.core && skill.proficiency.core.length > 0}
                  <div class="mb-6 mt-4">
                    <p
                      class="text-xs uppercase tracking-wider text-white/70 font-bold mb-3"
                    >
                      ⭐ Core
                    </p>
                    <div class="flex flex-wrap gap-2.5">
                      {#each skill.proficiency.core as tech}
                        <span
                          class="px-4 py-2.5 bg-[#D9C4FF]/15 border border-[#D9C4FF]/40 rounded-full text-sm font-bold text-[#D9C4FF] hover:bg-[#D9C4FF]/25 transition-all"
                        >
                          <span class="mr-1.5 text-base">{tech.emoji}</span
                          >{tech.name}
                        </span>
                      {/each}
                    </div>
                  </div>
                {/if}

                <!-- Good At Skills -->
                {#if skill.proficiency.good && skill.proficiency.good.length > 0}
                  <div class="mb-6 mt-6">
                    <p
                      class="text-xs uppercase tracking-wider text-white/60 font-bold mb-3"
                    >
                      🔹 Good at
                    </p>
                    <div class="flex flex-wrap gap-2">
                      {#each skill.proficiency.good as tech}
                        <span
                          class="px-3 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/85 hover:text-white hover:border-white/30 transition-all"
                        >
                          <span class="mr-1 text-sm">{tech.emoji}</span
                          >{tech.name}
                        </span>
                      {/each}
                    </div>
                  </div>
                {/if}

                <!-- Worked With Skills -->
                {#if skill.proficiency.worked && skill.proficiency.worked.length > 0}
                  <div class="mt-6 opacity-75">
                    <p
                      class="text-[10px] uppercase tracking-wider text-white/50 font-bold mb-2"
                    >
                      🧰 Worked with
                    </p>
                    <div class="flex flex-wrap gap-1.5">
                      {#each skill.proficiency.worked as tech}
                        <span
                          class="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-medium text-white/60 hover:text-white/80 hover:border-white/20 transition-all"
                        >
                          <span class="mr-1 text-xs">{tech.emoji}</span
                          >{tech.name}
                        </span>
                      {/each}
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </Reveal>
        {/each}
      </div>
    </div>
  </Section>

  <!-- Experience -->
  <Section id="experience" theme="indigo" vignette={0.85}>
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <h2 class="text-4xl font-bold text-white mb-16">Work Experience</h2>
      </Reveal>
      <div class="space-y-16">
        {#each portfolioData.experience as exp}
          <Reveal>
            <ExperienceTimeline {exp} />
          </Reveal>
        {/each}
      </div>
    </div>
  </Section>

  <!-- Engineering Pillars -->
  <Section id="pillars" theme="charcoal" vignette={0.92}>
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <h2 class="text-4xl font-bold text-white mb-16">Engineering Pillars</h2>
      </Reveal>
      <div class="grid md:grid-cols-2 gap-8">
        {#each portfolioData.pillars as pillar, index}
          <Reveal>
            <div
              class="glass-card group hover:border-[#D9C4FF]/30 transition-all"
            >
              <div class="flex items-start gap-6">
                <!-- Icon -->
                <div class="text-4xl shrink-0 mt-1">
                  {#if index === 0}⚡{/if}
                  {#if index === 1}🧩{/if}
                  {#if index === 2}🛰️{/if}
                  {#if index === 3}☁️{/if}
                </div>
                <div class="flex-1">
                  <h3
                    class="text-2xl font-bold text-white mb-3 group-hover:text-[#D9C4FF] transition-colors"
                  >
                    {pillar.title}
                  </h3>
                  <p class="text-white/70 mb-4 leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div class="pt-4 border-t border-white/10">
                    <p
                      class="text-xs uppercase tracking-wider text-white/40 font-bold mb-2"
                    >
                      Proof
                    </p>
                    <p class="text-sm font-medium text-[#D9C4FF]">
                      "{pillar.proof}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        {/each}
      </div>
    </div>
  </Section>

  <!-- Contact Section -->
  <Section id="contact" theme="plumDeep" vignette={0.95}>
    <div
      class="max-w-4xl w-full mx-auto text-center relative flex flex-col items-center"
    >
      <!-- Background Abstract Graphic -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
        style="filter: blur(2px);"
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="150" stroke="white" stroke-width="1" />
          <circle cx="200" cy="200" r="100" stroke="white" stroke-width="1" />
        </svg>
      </div>

      <Reveal>
        <h2
          class="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight whitespace-nowrap"
        >
          Let's build something that scales.
        </h2>

        <p
          class="text-xs sm:text-sm md:text-base text-white/60 font-medium relative z-10 mt-5 whitespace-nowrap"
        >
          Open to full-stack roles in Germany
        </p>

        <!-- Social Icons with Email -->
        <div class="mt-12 flex flex-col items-center justify-center gap-3">
          <div class="flex items-center justify-center gap-6 text-white/55">
            <button
              type="button"
              class={socialLinkClasses}
              title="Copy email"
              on:click={copyEmail}
            >
              <Mail class="w-5 h-5" />
            </button>
            <a
              href="https://github.com/Vandu-Shre"
              target="_blank"
              rel="noopener noreferrer"
              class={socialLinkClasses}
              title="GitHub"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/vandanashree"
              target="_blank"
              rel="noopener noreferrer"
              class={socialLinkClasses}
              title="LinkedIn"
            >
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
          <span class="text-[11px] text-white/45 h-4">
            {emailCopied ? "Copied" : ""}
          </span>
        </div>

        <!-- Download Resume Button -->
        <div class="mt-8">
          <a href={`${base}/resume.pdf`} download class={downloadBtnClasses}>
            <Download
              size={16}
              class="transition-transform group-hover:translate-y-0.5"
            />
            <span>Download resume</span>
          </a>
        </div>

        <!-- Personal Signature -->
        <p
          class="text-xs sm:text-sm text-white/40 font-medium mt-12 whitespace-nowrap"
        >
          Made with ❤️ and too much coffee. Thanks for stopping by 👋
        </p>
      </Reveal>
    </div>
  </Section>
</main>

<footer
  id="footer"
  class="py-8 px-6 text-center"
  style="background: linear-gradient(to top, #0b0b0e, #16121a); border-top: 1px solid rgba(255,255,255,0.06);"
>
  <p class="text-white/20 text-xs font-medium tracking-[0.3em] uppercase">
    © {new Date().getFullYear()} Vandana · Running in production since 2019
  </p>
</footer>
