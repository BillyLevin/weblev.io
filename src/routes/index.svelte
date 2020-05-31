<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: var(--primary);
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>weblev.io — Billy Levin's personal blog</title>
</svelte:head>

<h1>weblev.io</h1>

<figure>
	<img alt="Success Kid" src="successkid.jpg" />
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
	<strong>
		Try editing this file (src/routes/index.svelte) to test live reloading.
	</strong>
</p>
