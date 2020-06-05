<script>
	import { formatDate } from '../utils.js';
	export let title;
	export let published;
	export let author = 'Billy Levin';
	export let authorLink = 'https://twitter.com/billylevin';

	const date = formatDate(published);
</script>

<svelte:head>
	<title>{title} | weblev.io</title>
</svelte:head>

<article class="blog-post">
	<header>
		<h1>{title}</h1>
		<p class="details">
			<time datetime={published}>{date}</time>
			<span class="emphasis">&bull;</span>
			Written by
			<a href={authorLink}>{author}</a>
		</p>
	</header>

	<slot>
		<!-- content goes here -->
	</slot>
</article>

<style>
	h1 {
		font-size: 3.5rem;
		color: var(--primary);
		line-height: 1.125;
	}

	.emphasis {
		color: var(--primary);
	}

	:global(.blog-post p) {
		letter-spacing: 1px;
	}

	:global(.blog-post p code) {
		/* TODO: find out why 1rem is not 16px here */
		font-size: 16px;
		background-color: var(--primaryBlack);
		padding: 0.25rem;
		border-radius: 2px;
		color: var(--primaryGrey);
	}

	:global(.blog-post pre) {
		margin-bottom: 1.5rem;
	}

	:global(.blog-post h2) {
		color: var(--primary);
		margin: 2.5rem 0;
		font-size: 2.5rem;
	}

	.details {
		font-size: 0.9rem;
		margin-bottom: 3rem;
	}
</style>
