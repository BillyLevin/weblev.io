<script>
	export let title;
</script>

<svelte:head>
	<title>{title} | weblev.io</title>
</svelte:head>

<h1>{title}</h1>
<article class="page">
	<slot>
		<!-- content goes here -->
	</slot>
</article>

<style>
	h1 {
		margin-bottom: 2rem;
	}

	:global(.page h2) {
		color: var(--primary);
		margin-bottom: 1.5rem;
	}

	:global(.page ul) {
		list-style: none;
	}

	:global(.page li) {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	:global(.page li::before) {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 4px;
		display: inline-block;
		background-color: var(--primary);
		position: relative;
		margin-right: 1rem;
	}
</style>
