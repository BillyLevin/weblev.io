<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`)
			.then((r) => r.json())
			.then((posts) => {
				return { posts };
			});
	}
</script>

<script>
	import { formatDate } from '../../utils.js';
	export let posts;
</script>

<svelte:head>
	<title>Blog | weblev.io</title>
</svelte:head>

<h1>Posts</h1>

{#each posts as post}
	<article>
		<header>
			<h2>
				<a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
			</h2>
			<time datetime={post.published}>{formatDate(post.published)}</time>
		</header>
		<p>{post.desc}</p>
	</article>
{/each}

<style>
	h1 {
		margin-bottom: 2rem;
	}

	h2 a {
		text-decoration: none;
		font-size: 2rem;
	}

	article {
		margin-bottom: 3rem;
	}

	article header {
		margin-bottom: 1rem;
	}

	time {
		font-size: 0.9rem;
	}
</style>
