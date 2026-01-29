<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@100..900&family=DM+Serif+Display&display=swap"
		rel="stylesheet"
	/>
	<title>Vandana | Full Stack Engineer</title>
	<meta
		name="description"
		content="Vandana - Full Stack Engineer specializing in React, TypeScript, Node.js, and Cloud-Native architectures. Scalable solutions for 1M+ users."
	/>
	<meta property="og:title" content="Vandana | Full Stack Engineer" />
	<meta
		property="og:description"
		content="Building high-performance, real-time systems at scale. Focused on React, Node.js, and Cloud-Native delivery."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
