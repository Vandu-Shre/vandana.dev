<script lang="ts">
    import { onMount } from "svelte";

    let { children } = $props();
    let element: HTMLElement;
    let visible = $state(false);

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visible = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 },
        );

        observer.observe(element);
        return () => observer.disconnect();
    });
</script>

<div bind:this={element} class="reveal" class:visible>
    {@render children()}
</div>
