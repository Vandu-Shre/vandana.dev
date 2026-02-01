<script lang="ts">
  import { cn } from "$lib/utils";

  let {
    variant = "default",
    padding = "md",
    class: className,
    children,
  } = $props();

  const baseClasses = "relative overflow-hidden rounded-xl transition-all";

  const variantClasses: Record<string, string> = {
    default: "bg-white/5 border border-white/10",
    glass: "bg-white/5 border border-white/20 backdrop-blur-sm",
    elevated: "bg-white/10 border border-white/15 shadow-lg shadow-black/20",
  };

  const paddingClasses: Record<string, string> = {
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  };

  const cardClasses = $derived(
    cn(
      baseClasses,
      variantClasses[variant] || variantClasses.default,
      paddingClasses[padding] || paddingClasses.md,
      className,
    ),
  );
</script>

<div class={cardClasses}>
  {@render children?.()}
</div>
