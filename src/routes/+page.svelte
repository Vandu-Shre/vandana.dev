<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Section from "$lib/components/Section.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import ExperienceTimeline from "$lib/components/ExperienceTimeline.svelte";
  import SkillGroup from "$lib/components/SkillGroup.svelte";
  import PillarCard from "$lib/components/PillarCard.svelte";
  import Reveal from "$lib/components/Reveal.svelte";
  import ScrollProgress from "$lib/components/ScrollProgress.svelte";
  import { portfolioData } from "$lib/data";
  import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    ArrowRight,
    Video,
  } from "lucide-svelte";
</script>

<ScrollProgress />
<Header />

<main>
  <!-- Hero Section -->
  <Section
    id="top"
    theme="plum"
    noPadding={true}
    customClass="h-[100svh] min-h-screen"
  >
    {#snippet background()}
      <!-- Designer Background with Radial Gradients -->
      <div class="hero-bg"></div>
    {/snippet}

    <div
      class="max-w-5xl mx-auto h-full flex flex-col justify-center relative z-10 px-6"
    >
      <Reveal>
        <div class="space-y-6 text-center relative">
          <!-- Radial Spotlights behind headline -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              class="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#D9C4FF]/[0.08] blur-[100px] rounded-full"
            ></div>
            <div
              class="absolute top-[30%] left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-plum/[0.12] blur-[80px] rounded-full"
            ></div>
          </div>

          <!-- Intro Line -->
          <p
            class="text-sm md:text-base tracking-[0.2em] uppercase text-white/70 mb-10 flex items-center justify-center gap-3 relative z-10"
          >
            <span class="text-[#D9C4FF] shimmer">✦</span>
            <span>Hi, I'm Vandana</span>
          </p>

          <!-- Main Headline -->
          <div class="relative z-10">
            <h1
              class="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] md:leading-[1.12] text-white mb-10 tracking-[-0.01em]"
            >
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
              <span
                class="inline-block stagger-word"
                style="animation-delay: 100ms">—</span
              ><br />
              <span
                class="inline-block stagger-word"
                style="animation-delay: 120ms">and</span
              >
              <span
                class="text-outline text-[#FFF2FF] tracking-[-0.01em] inline-block stagger-word"
                style="animation-delay: 140ms">backends</span
              >
              <span
                class="text-outline text-[#FFF2FF] tracking-[-0.01em] inline-block stagger-word"
                style="animation-delay: 160ms">you</span
              >
              <span
                class="text-outline text-[#FFF2FF] tracking-[-0.01em] inline-block stagger-word"
                style="animation-delay: 180ms">never</span
              >
              <span
                class="text-outline text-[#FFF2FF] tracking-[-0.01em] inline-block stagger-word"
                style="animation-delay: 200ms">need&nbsp;to.</span
              >
            </h1>
          </div>

          <!-- Micro Tagline -->
          <p
            class="text-xs text-white/50 uppercase tracking-[0.3em] font-bold relative z-10"
          >
            Interfaces with personality. Infrastructure with discipline.
          </p>

          <!-- Proof Strip -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 px-4 relative z-10"
          >
            <div class="flex items-center gap-2">
              <span class="text-2xl font-black text-[#D9C4FF]">1M+</span>
              <span class="text-sm text-white/80">users (Mobily)</span>
            </div>
            <div class="w-px h-6 bg-white/20"></div>
            <div class="flex items-center gap-2">
              <span class="text-2xl font-black text-[#D9C4FF]">&lt;100ms</span>
              <span class="text-sm text-white/80">real-time sync (EY)</span>
            </div>
            <div class="w-px h-6 bg-white/20"></div>
            <div class="flex items-center gap-2">
              <span class="text-2xl font-black text-[#D9C4FF]">1,700+</span>
              <span class="text-sm text-white/80">stores (TCS)</span>
            </div>
          </div>

          <!-- Status Line -->
          <p
            class="text-xs text-white/50 uppercase tracking-[0.2em] pt-6 relative z-10"
          >
            Based in Germany
          </p>

          <!-- CTA Button with Glossy Effect -->
          <div class="pt-10 relative z-10">
            <a
              href="#footer"
              class="inline-flex items-center gap-3 px-8 py-4 bg-[#D9C4FF] text-charcoal font-bold rounded-full hover:scale-105 hover:shadow-2xl transition-all shadow-lg shadow-[#D9C4FF]/20 relative overflow-hidden group squish-btn"
            >
              <!-- Glossy top highlight -->
              <span
                class="absolute top-0 left-1/4 w-24 h-2 bg-white/40 rounded-full blur-md"
              ></span>
              <!-- Inner shadow for depth -->
              <span
                class="absolute inset-0 rounded-full shadow-[inset_0_-2px_8px_rgba(0,0,0,0.15)]"
              ></span>
              <span class="relative">Let's Talk</span>
              <ArrowRight size={18} class="relative" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>

  <!-- Projects Grid -->
  <Section id="projects" theme="indigo">
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
  <Section id="skills" theme="charcoal">
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <h2 class="font-bold text-white mb-24">The Tech Palette I Work With</h2>
      </Reveal>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                class="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
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
                    stroke-width="0.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    stroke="white"
                    stroke-width="0.5"
                  />
                  <line
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="90"
                    stroke="white"
                    stroke-width="0.5"
                  />
                  <line
                    x1="10"
                    y1="50"
                    x2="90"
                    y2="50"
                    stroke="white"
                    stroke-width="0.5"
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
                      class="text-xs uppercase tracking-wider text-white/60 font-bold mb-3"
                    >
                      ⭐ Core
                    </p>
                    <div class="flex flex-wrap gap-2">
                      {#each skill.proficiency.core as tech}
                        <span
                          class="px-3 py-2 bg-[#D9C4FF]/15 border border-[#D9C4FF]/40 rounded-full text-xs font-bold text-[#D9C4FF] hover:bg-[#D9C4FF]/25 transition-all"
                        >
                          <span class="mr-1">{tech.emoji}</span>{tech.name}
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
                          class="px-3 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white/80 hover:text-white hover:border-white/30 transition-all"
                        >
                          <span class="mr-1">{tech.emoji}</span>{tech.name}
                        </span>
                      {/each}
                    </div>
                  </div>
                {/if}

                <!-- Worked With Skills -->
                {#if skill.proficiency.worked && skill.proficiency.worked.length > 0}
                  <div class="mt-6">
                    <p
                      class="text-xs uppercase tracking-wider text-white/60 font-bold mb-3"
                    >
                      🧰 Worked with
                    </p>
                    <div class="flex flex-wrap gap-2">
                      {#each skill.proficiency.worked as tech}
                        <span
                          class="px-3 py-2 bg-white/8 border border-white/15 rounded-full text-xs font-bold text-white/70 hover:text-white/90 hover:border-white/25 transition-all"
                        >
                          <span class="mr-1">{tech.emoji}</span>{tech.name}
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
  <Section id="experience" theme="indigo">
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <h2 class="font-bold text-white mb-24">Work Experience</h2>
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
  <Section id="pillars" theme="charcoal">
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <h2 class="font-bold text-white mb-24">Engineering Pillars</h2>
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
  <Section id="contact" theme="plum">
    <div class="max-w-4xl mx-auto text-center relative">
      <!-- Background Abstract Graphic -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none"
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
          <circle cx="200" cy="200" r="50" stroke="white" stroke-width="1" />
          <line
            x1="200"
            y1="50"
            x2="200"
            y2="350"
            stroke="white"
            stroke-width="1"
          />
          <line
            x1="50"
            y1="200"
            x2="350"
            y2="200"
            stroke="white"
            stroke-width="1"
          />
        </svg>
      </div>

      <Reveal>
        <h2
          class="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
        >
          Let's create systems that scale<br />and experiences that shine.
        </h2>
        <p class="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Open to full-time roles in full-stack engineering, distributed
          systems, and AI-powered products.
        </p>

        <!-- Separator -->
        <div class="h-px bg-white/10 w-24 mx-auto my-10"></div>

        <!-- Social Links as Pills -->
        <div class="flex flex-col items-center justify-center gap-4 mb-12">
          <div class="flex gap-3 flex-wrap justify-center">
            <button
              onclick={() =>
                navigator.clipboard
                  .writeText(portfolioData.email)
                  .then(() => alert("Email copied to clipboard!"))}
              class="px-4 py-2 border border-white/20 rounded-full text-white/70 hover:border-[#D9C4FF] hover:text-[#D9C4FF] hover:bg-[#D9C4FF]/10 transition-all text-sm font-bold uppercase tracking-widest cursor-pointer"
            >
              Email
            </button>
            <a
              href="https://github.com/Vandu-Shre"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 border border-white/20 rounded-full text-white/70 hover:border-[#D9C4FF] hover:text-[#D9C4FF] hover:bg-[#D9C4FF]/10 transition-all text-sm font-bold uppercase tracking-widest"
            >
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/vandanashree"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 border border-white/20 rounded-full text-white/70 hover:border-[#D9C4FF] hover:text-[#D9C4FF] hover:bg-[#D9C4FF]/10 transition-all text-sm font-bold uppercase tracking-widest"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Personal Signature -->
        <p class="text-sm text-white/40 font-medium mt-12">
          Made with ❤️ and too much coffee. Thanks for stopping by 👋
        </p>
      </Reveal>
    </div>
  </Section>
</main>

<footer id="footer" class="bg-charcoal py-12 px-6 text-center">
  <p class="text-white/30 text-xs font-medium tracking-[0.3em] uppercase">
    © {new Date().getFullYear()} Vandana — running in production since 2019
  </p>
</footer>
