<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Icon from 'svelte-awesome';
	import {
		faNewspaper,
		faAddressCard,
	} from '@fortawesome/free-regular-svg-icons';
	import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faPen } from '@fortawesome/free-solid-svg-icons';
</script>

<svelte:head>
	<title>weblev.io — Billy Levin's personal site</title>
</svelte:head>

<article class="homepage">
	<header>
		<h1>Hey!</h1>
		<h2>
			I'm Billy Levin. Welcome to my personal site &mdash;
			<span>weblev.io</span>
		</h2>
	</header>

	<section class="stuff">
		<a href="/blog">
			<Icon data={faPen} class="icon" label="test label" />
			<span>Check out my blog</span>
		</a>
		<a href="/about">
			<Icon data={faAddressCard} class="icon" label="test label" />
			<span>Read more about me</span>
		</a>
		<a
			href="https://github.com/billylevin"
			target="_blank"
			rel="noopener noreferrer">
			<Icon data={faGithub} class="icon" label="test label" />
			<span>Browse my code on GitHub</span>
		</a>
		<a
			href="https://twitter.com/billylevin"
			target="_blank"
			rel="noopener noreferrer">
			<Icon data={faTwitter} class="icon" label="test label" />
			<span>Follow me on Twitter</span>
		</a>
	</section>
</article>

<style>
	h1 {
		font-size: 4.5rem;
		font-weight: 900;
		margin-bottom: 2rem;
		color: var(--primary);
	}

	h2 {
		font-weight: 300;
		margin-bottom: 4rem;
		line-height: 1.25;
		font-size: 3rem;
		letter-spacing: 2px;
	}

	h2 span {
		color: var(--primary);
	}

	:global(.homepage .icon) {
		height: 4rem;
		width: auto;
		color: var(--primary);
		margin-bottom: 0.5rem;
	}
	:global(a:hover .icon) {
		color: inherit;
	}

	.stuff {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.stuff a {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0 0 20%;
		margin: 1rem;
		text-align: center;
		font-family: 'Montserrat', sans-serif;
		text-decoration: none;
		font-weight: 500;
		font-size: 1.25rem;
		line-height: 1.25;
	}
</style>
