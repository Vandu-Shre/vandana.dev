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
            impact: [
                "Built collaborative whiteboard with Next.js, TypeScript, Canvas API, and NestJS",
                "Implemented real-time state sync via WebSockets; deployed on GCP"
            ],
            roadmap: "Distributed persistence with Redis and PostgreSQL",
            tech: ["Next.js", "TypeScript", "Canvas API", "NestJS", "WebSockets", "GCP"],
            demoUrl: "https://synapse-demo.vandu.dev",
            githubUrl: "https://github.com/Vandu-Shre/synapse",
            videoUrl: null
        },
        {
            name: "Recipe Book",
            featured: true,
            description: "Full Stack MERN Application",
            impact: [
                "Developed full-stack recipe manager for recipes, weekly meal planning, and pantry-based search",
                "Added JWT authentication and Tailwind CSS UI with React, Node.js, and MongoDB"
            ],
            roadmap: "Intelligent, AI-driven pantry search via LLM integration",
            tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
            demoUrl: "https://recipe-book.vandu.dev",
            githubUrl: "https://github.com/Vandu-Shre/recipe-book",
            videoUrl: "https://youtube.com/demo-recipe-book"
        }
    ],
    experience: [
        {
            company: "Mobily",
            title: "Technology Lead",
            period: "Aug 2024 - May 2025",
            impactLine: "Scale: 1M+ users, micro-frontends, Cloud Run",
            bullets: [
                "Architected and maintained a micro-frontend ecosystem serving over 1M+ users.",
                "Built and standardized a shared component library with Storybook, reducing UI development time by 40%.",
                "Developed a multilingual subscription platform on Cloud Run using Next.js SSR for optimal SEO.",
                "Optimized backend APIs for high-volume orders and billing processing.",
                "Delivered a Profile & Preferences portal with full RTL support and high accessibility standards."
            ],
            tech: ["Next.js", "React", "Cloud Run", "Storybook", "TypeScript"]
        },
        {
            company: "EY",
            title: "Technology Consultant",
            period: "Aug 2022 - Jul 2024",
            impactLine: "Real-time + Search + Dashboards, sub-100ms",
            bullets: [
                "Engineered 12 foundational user journeys for a global e-commerce client.",
                "Led the modernization of legacy AngularJS applications to Angular 14+, improving maintainability.",
                "Built a real-time auction app using WebSockets and Redis with sub-100ms state synchronization.",
                "Implemented Algolia global search for sub-second query results across massive catalogs.",
                "Designed performance-first analytics dashboards with complex data visualizations."
            ],
            tech: ["Angular", "WebSockets", "Redis", "Algolia", "Node.js"]
        },
        {
            company: "TCS",
            title: "Systems Engineer",
            period: "Jun 2019 - Jul 2022",
            impactLine: "Retail tooling scaled to 1,700+ stores",
            bullets: [
                "Scaled a retail space planning tool across 1,700+ stores globally.",
                "Developed core product catalog services using Node.js and MongoDB.",
                "Implemented geolocation features for store locator maps using Google Maps API.",
                "Built a rules-driven offers & promotions module to handle complex pricing logic.",
                "Developed customer feedback & ratings workflows integrated with legacy systems."
            ],
            tech: ["Node.js", "MongoDB", "React", "Express", "Google Maps API"]
        }
    ],
    skills: [
        {
            category: "Frontend",
            context: "Built for dashboards, design systems, and scalable UI delivery.",
            chips: ["React", "Angular", "Next.js", "TypeScript", "Redux", "Tailwind", "Storybook"]
        },
        {
            category: "Backend",
            context: "Real-time + APIs + scalable services.",
            chips: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSockets"]
        },
        {
            category: "Database",
            context: "Scale + storage.",
            chips: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL optimization"]
        },
        {
            category: "Cloud/DevOps",
            context: "Deployment + reliability.",
            chips: ["Docker", "Kubernetes", "CI/CD", "GCP Cloud Run", "AWS Lambda/S3"]
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
