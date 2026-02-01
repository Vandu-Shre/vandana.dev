import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes intelligently.
 * Prevents class conflicts (e.g., p-4 + p-2 becomes just p-2)
 * Combines clsx for conditional classes with twMerge for conflict resolution.
 *
 * @example
 * cn("px-4 py-2", "p-2") // Returns "px-4 py-2" (keeps specificity)
 * cn("p-4", active && "bg-blue-500") // Conditionally merges
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
