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
  <Section id="top" theme="plum">
    <!-- Background Graphic -->
    <div class="hero-graphic">
      <svg
        class="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Network nodes and connections -->
        <circle cx="200" cy="150" r="60" stroke="white" stroke-width="1" />
        <circle cx="600" cy="150" r="60" stroke="white" stroke-width="1" />
        <circle cx="400" cy="400" r="80" stroke="white" stroke-width="1" />
        <circle cx="150" cy="450" r="50" stroke="white" stroke-width="1" />
        <circle cx="650" cy="450" r="50" stroke="white" stroke-width="1" />
        <line
          x1="200"
          y1="150"
          x2="600"
          y2="150"
          stroke="white"
          stroke-width="1"
        />
        <line
          x1="200"
          y1="150"
          x2="400"
          y2="400"
          stroke="white"
          stroke-width="1"
        />
        <line
          x1="600"
          y1="150"
          x2="400"
          y2="400"
          stroke="white"
          stroke-width="1"
        />
        <line
          x1="400"
          y1="400"
          x2="150"
          y2="450"
          stroke="white"
          stroke-width="1"
        />
        <line
          x1="400"
          y1="400"
          x2="650"
          y2="450"
          stroke="white"
          stroke-width="1"
        />
      </svg>
    </div>

    <div
      class="max-w-5xl mx-auto min-h-screen flex flex-col justify-center relative z-10"
    >
      <Reveal>
        <div class="space-y-12 text-center">
          <div>
            <!-- Micro-line -->
            <div class="w-12 h-0.5 bg-white/30 mx-auto mb-6"></div>
            <p
              class="text-white/60 text-xs tracking-[0.4em] uppercase font-bold mb-8"
            >
              Hi, I'm Vandana
            </p>
            <h1 class="font-bold leading-none mb-8 text-white">
              Senior Full Stack Engineer
            </h1>
            <p
              class="text-2xl md:text-3xl text-white/70 tracking-wide max-w-3xl mx-auto leading-relaxed"
            >
              designing <span class="text-white font-semibold">scalable</span>,
              <span class="text-white font-semibold">real-time</span>,
              <span class="text-white font-semibold">cloud-native</span> systems
            </p>
          </div>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <a
              href="mailto:{portfolioData.email}"
              class="bg-mint text-charcoal px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-3 shadow-xl shadow-mint/20"
            >
              Email Vandana <Mail size={20} />
            </a>
            <div class="flex gap-6">
              <a
                href={portfolioData.linkedin}
                target="_blank"
                class="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm hover:underline underline-offset-4"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                class="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm hover:underline underline-offset-4"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>

  <!-- Projects Grid -->
  <Section id="projects" theme="indigo">
    <div class="max-w-6xl mx-auto">
      <Reveal>
        <div class="mb-24">
          <h2 class="font-bold text-white mb-6">Selected Projects</h2>
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
        <h2 class="font-bold text-white mb-24">Technical Stack</h2>
      </Reveal>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each portfolioData.skills as skill}
          <Reveal>
            <SkillGroup
              title={skill.category}
              skills={skill.chips}
              context={skill.context}
            />
          </Reveal>
        {/each}
      </div>
    </div>
  </Section>

  <!-- Experience -->
  <Section id="experience" theme="plum">
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
            <div class="glass-card group hover:border-mint/30 transition-all">
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
                    class="text-2xl font-bold text-white mb-3 group-hover:text-mint transition-colors"
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
                    <p class="text-sm font-medium text-mint">
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
  <Section id="contact" theme="indigo">
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
          Let's Build Something<br />Scalable.
        </h2>
        <p class="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Open to full-time opportunities in full-stack engineering, distributed
          systems, and AI-driven product development.
        </p>
        <div class="flex items-center justify-center gap-6 mb-12">
          <a
            href="mailto:{portfolioData.email}"
            class="px-8 py-4 bg-mint text-charcoal font-bold rounded-full hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:border-mint hover:text-mint transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:border-mint hover:text-mint transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </Reveal>

      <!-- Divider -->
      <div class="w-32 h-[1px] bg-white/20 mx-auto mt-16"></div>
    </div>
  </Section>
</main>

<footer class="bg-charcoal py-12 px-6 text-center">
  <p class="text-white/30 text-xs font-medium tracking-[0.3em] uppercase">
    &copy; {new Date().getFullYear()} Vandana
  </p>
</footer>
