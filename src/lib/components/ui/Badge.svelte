<script lang="ts">
  import { cn } from "$lib/utils";

  let {
    variant = "primary",
    size = "md",
    class: className,
    children,
  } = $props();

  const baseClasses =
    "inline-flex items-center gap-1.5 font-semibold rounded-full transition-all";

  const variantClasses: Record<string, string> = {
    primary:
      "bg-[#D9C4FF]/15 border border-[#D9C4FF]/40 text-[#D9C4FF] hover:bg-[#D9C4FF]/25",
    secondary:
      "bg-white/10 border border-white/20 text-white/85 hover:border-white/30",
    accent:
      "bg-white/5 border border-white/10 text-white/60 hover:text-white/80",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-2.5 py-1.5 text-[11px]",
    md: "px-3 py-2 text-xs",
    lg: "px-4 py-2.5 text-sm",
  };

  const badgeClasses = $derived(
    cn(
      baseClasses,
      variantClasses[variant] || variantClasses.primary,
      sizeClasses[size] || sizeClasses.md,
      className,
    ),
  );
</script>

<span class={badgeClasses}>
  {@render children?.()}
</span>
