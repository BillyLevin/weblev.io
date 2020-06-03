<script>
	import { formatDate } from '../utils.js';
	export let title;
	export let published;
	export let author = undefined;
	export let authorLink = undefined;

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
			<a href={authorLink || 'https://twitter.com/billylevin'}>
				{author || 'Billy Levin'}
			</a>
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

	.details {
		font-size: 0.9rem;
		margin-bottom: 3rem;
	}
</style>
