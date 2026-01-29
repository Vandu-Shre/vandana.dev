<script lang="ts">
  import { Github, Linkedin, Mail } from "lucide-svelte";
  import { portfolioData } from "$lib/data";
  import { onMount } from "svelte";

  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Pillars", href: "#pillars" },
    { name: "Contact", href: "#contact" },
  ];

  let activeSection = $state("top");

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.5 },
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    const topEl = document.querySelector("#top");
    if (topEl) observer.observe(topEl);

    return () => observer.disconnect();
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5"
>
  <div class="w-0"></div>

  <nav
    class="hidden lg:flex items-center gap-12 text-xs font-medium tracking-[0.15em] uppercase"
  >
    {#each navItems as item}
      <a
        href={item.href}
        class="transition-all relative py-2 {activeSection ===
        item.href.slice(1)
          ? 'text-white font-semibold'
          : 'text-white/50 hover:text-white'}"
      >
        {item.name}
        {#if activeSection === item.href.slice(1)}
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full"
          ></span>
        {/if}
      </a>
    {/each}
  </nav>

  <div class="w-0"></div>
</header>
