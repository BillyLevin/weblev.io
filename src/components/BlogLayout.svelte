<script>
	export let title;
	export let published;
	export let subtitle = undefined;

	const date = new Date(published).toLocaleDateString(undefined, {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<style>
	h1 {
		font-size: 3.5rem;
		color: var(--primary);
		line-height: 1.125;
	}

	h2 {
		line-height: 1.25;
	}
</style>

<svelte:head>
	<title>{title} | weblev.io</title>
</svelte:head>

<article>
	<header>
		<h1>{title}</h1>
		<p>
			<time datetime={published}>{date}</time>
		</p>
		{#if subtitle}
			<h2>{subtitle}</h2>
		{/if}
	</header>

	<slot>
		<!-- content goes here -->
	</slot>
</article>
