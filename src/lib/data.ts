export const portfolioData = {
    name: "Vandana",
    title: "Full Stack Engineer",
    subtitle: "React • TypeScript • Node.js • Cloud-Native",
    email: "shree.vandu@gmail.com",
    github: "https://github.com/Vandu-Shre",
    linkedin: "http://www.linkedin.com/in/vandanashree",
    hero: {
        tagline: "Building high-performance, real-time systems at scale.",
        proof: [
            { metric: "1M+", text: "users micro-frontends (Mobily)" },
            { metric: "<100ms", text: "real-time auctions (EY)" },
            { metric: "Cloud Run", text: "deployments (GCP + AWS)" }
        ]
    },
    synapse: {
        title: "Synapse: Real-time Collaborative Whiteboard",
        description: "Production-grade real-time system for distributed state sync and low-latency collaboration.",
        demoUrl: "https://synapse-demo.vandu.dev",
        githubUrl: "https://github.com/Vandu-Shre/synapse",
        videoUrl: "https://youtube.com/demo-synapse",
        pillars: [
            {
                title: "Action Stream Architecture",
                desc: "Undo/Redo via immutable action stream for consistent state across clients."
            },
            {
                title: "Server-Authoritative Model",
                desc: "Ensures data integrity and prevents race conditions in collaborative sessions."
            },
            {
                title: "Cloud-Native Discipline",
                desc: "Deployed via Cloud Run with Docker, optimized for horizontal scaling."
            }
        ],
        features: [
            "Sub-100ms sync latency",
            "WebSocket transport layer",
            "Zustand state management",
            "Advanced canvas interactions"
        ],
        stats: {
            latency: "sub-100ms",
            transport: "WebSockets",
            deploy: "Cloud Run",
            state: "Zustand"
        }
    },
    projects: [
        {
            name: "Synapse",
            featured: true,
            description: "Real-time collaborative whiteboard",
            oneLiner: "Fast, multiplayer canvas with sub-100ms sync and scalable room routing.",
            signalStrip: ["Realtime", "Multiplayer", "Canvas", "Deployed"],
            impact: [
                "Shipped real-time canvas sync via WebSockets, delivering smooth multi-user interactions.",
                "Implemented room-based isolation using dynamic routes for independent sessions."
            ],
            nextFeatures: ["Redis presence", "Live cursor", "Postgres persistence"],
            tech: ["Next.js", "TypeScript", "Canvas API", "NestJS", "WebSockets", "GCP"],
            demoUrl: "https://synapse-web-411490677881.us-central1.run.app/",
            githubUrl: "https://github.com/Vandu-Shre/synapse",
            videoUrl: null,
            thumbnail: "/Synapse.png"
        },
        {
            name: "Recipe Book",
            featured: true,
            description: "Full Stack MERN application",
            oneLiner: "Recipes, planning, pantry search, and secure authentication.",
            signalStrip: ["Auth", "Search", "Planning", "MERN"],
            impact: [
                "Built recipe + pantry manager with JWT auth, clean UI, and intuitive workflows.",
                "Added pantry-based search and weekly meal plans with fast MongoDB queries."
            ],
            nextFeatures: ["LLM pantry assistant", "Smart recommendations", "Better filters"],
            tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
            demoUrl: "https://recipe-api-frontend.netlify.app/",
            githubUrl: "https://github.com/Vandu-Shre/recipe-app",
            videoUrl: "https://youtube.com/demo-recipe-book",
            thumbnail: "/Recipe-Book.png"
        }
    ],
    experience: [
        {
            company: "Mobily",
            title: "Technology Lead",
            period: "Aug 2024 - May 2025",
            scale: "1M+ users · Micro-frontends · Cloud Run",
            summary: "Designed and delivered core micro-frontend foundations for a 1M+ user ecosystem.",
            bullets: [
                "Built a modular micro-frontend platform powering the Devices Application.",
                "Delivered real-time operational overlays using WebSockets for live order tracking.",
                "Owned end-to-end GCP Cloud Run deployment for the multilingual Subscription Platform.",
                "Translated complex product requirements into scalable, elegant engineering solutions."
            ],
            tech: ["Next.js", "React", "Cloud Run", "Storybook", "TypeScript"]
        },
        {
            company: "Ernst & Young (EY)",
            title: "Technology Consultant",
            period: "Aug 2022 - Jul 2024",
            scale: "Real-time search · Sub-100ms sync · Global scale",
            summary: "Built real-time journeys, dashboards, and scalable architecture for global commerce.",
            bullets: [
                "Engineered a WebSocket + Redis auction app delivering sub-100ms interactions.",
                "Implemented complex GraphQL-driven experiences for a global e-commerce platform.",
                "Integrated AI services into insights dashboards with real-time visualization.",
                "Delivered 12 core user journeys with high-performance frontend architecture."
            ],
            tech: ["Angular", "WebSockets", "Redis", "Algolia", "Node.js"]
        },
        {
            company: "TCS",
            title: "Systems Engineer",
            period: "Jun 2019 - Jul 2022",
            scale: "1,700+ retail stores · Global rollout",
            summary: "Delivered production systems for retail operations across 1,700+ stores.",
            bullets: [
                "Built a 2D interactive space planning tool used in 1,700+ retail locations.",
                "Developed Node.js + PostgreSQL backend services for the Product Catalog System.",
                "Built map-based Store Locator interfaces with Google Maps integration.",
                "Designed the Offers & Promotions rules engine for contextual experiences."
            ],
            tech: ["Node.js", "MongoDB", "React", "Express", "Google Maps API"]
        }
    ],
    skills: [
        {
            category: "Frontend",
            description: "Interfaces, design systems, and real-time UI delivery.",
            proficiency: {
                core: [
                    { name: "React", emoji: "⚛️" },
                    { name: "TypeScript", emoji: "TS" },
                    { name: "Next.js", emoji: "▲" }
                ],
                good: [
                    { name: "Angular", emoji: "🔺" },
                    { name: "Svelte", emoji: "🔥" },
                    { name: "Tailwind", emoji: "🎨" },
                    { name: "Redux", emoji: "🔄" }
                ],
                worked: [
                    { name: "Storybook", emoji: "📚" },
                    { name: "D3.js", emoji: "📊" }
                ]
            }
        },
        {
            category: "Backend",
            description: "Distributed APIs, WebSockets, and systems that scale.",
            proficiency: {
                core: [
                    { name: "Node.js", emoji: "🌿" },
                    { name: "NestJS", emoji: "🦅" },
                    { name: "Express", emoji: "⚡" }
                ],
                good: [
                    { name: "WebSockets", emoji: "🔌" },
                    { name: "GraphQL", emoji: "◇" },
                    { name: "REST", emoji: "🔗" }
                ],
                worked: [
                    { name: "gRPC", emoji: "📡" }
                ]
            }
        },
        {
            category: "Database",
            description: "Production-grade persistence and query optimization.",
            proficiency: {
                core: [
                    { name: "PostgreSQL", emoji: "🐘" },
                    { name: "MongoDB", emoji: "🍃" },
                    { name: "Redis", emoji: "🔴" }
                ],
                good: [
                    { name: "Prisma", emoji: "⚙️" },
                    { name: "Query optimization", emoji: "⚡" }
                ],
                worked: [
                    { name: "Elasticsearch", emoji: "🔍" }
                ]
            }
        },
        {
            category: "Cloud/DevOps",
            description: "Containers, CI/CD, and cloud-native deployments.",
            proficiency: {
                core: [
                    { name: "Docker", emoji: "🐳" },
                    { name: "GCP Cloud Run", emoji: "☁️" },
                    { name: "CI/CD", emoji: "🔄" }
                ],
                good: [
                    { name: "Kubernetes", emoji: "☸️" },
                    { name: "AWS", emoji: "📦" }
                ],
                worked: [
                    { name: "Terraform", emoji: "🏗️" }
                ]
            }
        }
    ],
    pillars: [
        {
            title: "Performance-first UI",
            desc: "Optimizing for large datasets and complex dashboards.",
            proof: "Sub-100ms sync in real-time auction apps (EY)",
            link: "#experience"
        },
        {
            title: "Scalable Architecture",
            desc: "Designing micro-frontends and decoupled services.",
            proof: "Micro-frontend ecosystem for 1M+ Mobily users",
            link: "#experience"
        },
        {
            title: "Real-time Systems",
            desc: "Enabling instant collaboration via WebSockets + Redis.",
            proof: "Synapse whiteboard action streams",
            link: "#synapse"
        },
        {
            title: "Cloud-Native Delivery",
            desc: "Automated pipelines and containerized deployments.",
            proof: "Cloud Run and Docker deployments",
            link: "#synapse"
        }
    ]
};
