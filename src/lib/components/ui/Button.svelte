<script lang="ts">
  import { cn } from "$lib/utils";
  import type { ButtonVariant, ButtonSize } from "$lib/types";

  let {
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled = false,
    class: className,
    onclick,
    type = "button" as "button" | "submit" | "reset",
    children,
  } = $props();

  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#D9C4FF]/90 text-charcoal hover:bg-[#D9C4FF] active:scale-[0.98] focus-visible:outline-[#D9C4FF]/50 shadow-lg shadow-[#D9C4FF]/10",
    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/15 active:scale-[0.98] focus-visible:outline-white/30",
    ghost: "text-white hover:text-[#D9C4FF] transition-colors active:scale-95",
    outline:
      "border border-white/15 text-white/60 hover:border-[#D9C4FF]/40 hover:text-white active:scale-[0.98] focus-visible:outline-[#D9C4FF]/30",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const buttonClasses = $derived(
    cn(
      baseClasses,
      variantClasses[variant as ButtonVariant],
      sizeClasses[size as ButtonSize],
      isLoading && "opacity-75 cursor-not-allowed",
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className,
    ),
  );
</script>

<button
  type={type as "button" | "submit" | "reset"}
  disabled={disabled || isLoading}
  class={buttonClasses}
  {onclick}
>
  {#if isLoading}
    <div class="animate-spin">⌛</div>
  {/if}
  {@render children?.()}
</button>
