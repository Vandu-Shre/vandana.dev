<script lang="ts">
    import { ArrowUpRight } from "lucide-svelte";
    let { title, desc, proof, link } = $props();
</script>

<a
    href={link}
    class="glass-card flex flex-col justify-between group hover:border-mint/50 transition-all"
>
    <div>
        <div class="flex justify-between items-start mb-4">
            <h3
                class="text-2xl font-bold group-hover:text-mint transition-colors"
            >
                {title}
            </h3>
            <ArrowUpRight
                size={20}
                class="text-white/20 group-hover:text-mint group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
            />
        </div>
        <p class="text-white/70 mb-8 leading-relaxed">{desc}</p>
    </div>

    <div class="pt-6 border-t border-white/5 space-y-2">
        <p
            class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
        >
            Concrete Proof
        </p>
        <p class="text-sm font-medium italic text-mint">"{proof}"</p>
    </div>
</a>
