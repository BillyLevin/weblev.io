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

	h3 {
		color: var(--primary);
		font-size: 2rem;
		margin-bottom: 1rem;
		font-weight: 500;
		letter-spacing: 2px;
	}

	ul {
		list-style: none;
	}

	li {
		position: relative;
		display: flex;
		align-items: center;
	}

	li::before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 4px;
		position: relative;
		background-color: var(--primary);
		margin-right: 1rem;
		display: inline-block;
	}

	li:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>

<svelte:head>
	<title>weblev.io — Billy Levin's personal site</title>
</svelte:head>

<article>
	<h1>Hey!</h1>
	<h2>
		I'm Billy Levin. Welcome to my personal site &mdash;
		<span>weblev.io</span>
	</h2>
	<h3>Stuff to do</h3>
	<ul>
		<li>
			<span>
				Read more
				<a href="/about">about me</a>
			</span>
		</li>
		<li>
			<span>
				Check out
				<a href="/blog">my blog</a>
			</span>
		</li>
		<li>
			<span>
				Browse my code on
				<a
					href="https://github.com/billylevin"
					target="_blank"
					rel="noopener noreferrer">
					GitHub
				</a>
			</span>
		</li>
		<li>
			<span>
				Follow me on
				<a
					href="https://twitter.com/billylevin"
					target="_blank"
					rel="noopener noreferrer">
					Twitter
				</a>
			</span>
		</li>
	</ul>
</article>
