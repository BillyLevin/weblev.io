<script>
	export let segment;
</script>

<nav>
	<ul>
		<li>
			<a aria-current={segment === undefined ? 'page' : undefined} href=".">
				home
			</a>
		</li>

		<li>
			<a aria-current={segment === 'about' ? 'page' : undefined} href="about">
				about
			</a>
		</li>

		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">
				blog
			</a>
		</li>

		<li class="social">
			<a
				href="https://twitter.com/billylevin"
				target="_blank"
				rel="noopener noreferrer">
				twitter
			</a>
		</li>

		<li>
			<a
				href="https://github.com/billylevin"
				target="_blank"
				rel="noopener noreferrer">
				github
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(var(--primary-rgb), 0.3);
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
	}

	ul {
		display: flex;
		list-style: none;
		padding: 0.5rem;
	}

	li {
		padding: 1rem;
	}

	li.social {
		margin-left: auto;
	}

	a {
		text-decoration: none;
		border-bottom: 2px solid transparent;
		padding-bottom: 0.5rem;
	}

	[aria-current],
	a:focus {
		outline: 0;
		border-color: inherit;
		border-bottom: 2px solid inherit;
	}

	a:focus {
		color: var(--primaryLight);
	}
</style>
