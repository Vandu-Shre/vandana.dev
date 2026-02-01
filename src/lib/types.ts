/**
 * Type definitions for portfolio application.
 * Centralized types for type safety and consistency.
 */

export interface Project {
    id: string;
    title: string;
    desc: string;
    img: string;
    tech: string[];
    link: string;
    github?: string;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    desc: string;
    achievements?: string[];
    tech?: string[];
}

export interface Skill {
    category: string;
    description: string;
    proficiency: {
        core?: Array<{ name: string; emoji: string }>;
        good?: Array<{ name: string; emoji: string }>;
        worked?: Array<{ name: string; emoji: string }>;
    };
}

export interface Pillar {
    title: string;
    desc: string;
    proof: string;
}

export interface PortfolioData {
    projects: Project[];
    experience: Experience[];
    skills: Skill[];
    pillars: Pillar[];
}

/**
 * Section component props with design system integration
 */
export interface SectionProps {
    id?: string;
    theme?: 'plum' | 'plumDeep' | 'indigo' | 'charcoal';
    glow?: boolean;
    vignette?: number;
    noPadding?: boolean;
    customClass?: string;
    background?: any;
    children?: any;
}

/**
 * UI Component prop patterns - Svelte-compatible
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonPropsBase {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    disabled?: boolean;
    class?: string;
}

export interface CardPropsBase {
    variant?: 'default' | 'glass' | 'elevated';
    padding?: 'sm' | 'md' | 'lg';
    class?: string;
}

export interface BadgePropsBase {
    variant?: 'primary' | 'secondary' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
}
