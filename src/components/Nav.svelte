<script>
	import { stores } from '@sapper/app';
	const { page } = stores();

	export let segment;

	let mobileVisible = false;

	// reset on page change
	$: {
		$page;
		mobileVisible = false;
	}

	function toggleVisibility() {
		mobileVisible = !mobileVisible;
	}
</script>

<nav class:visible={mobileVisible}>
	<div class="heading">
		<h2>
			<a href="/" aria-label="Go to homepage">weblev.io</a>
		</h2>
		<button
			type="button"
			on:click={toggleVisibility}
			aria-label={mobileVisible ? 'Hide navigation' : 'Show navigation'}>
			<span />
		</button>
	</div>

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

	.heading {
		display: none;
	}

	@media only screen and (max-width: 31.25em) {
		.heading {
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid rgba(var(--primary-rgb), 0.3);
		}

		.heading h2 {
			margin-left: 2rem;
		}

		button {
			background: none;
			border: 0;
			outline: 0;
			z-index: 20;
			display: block;
			margin-left: auto;
			top: 0;
			right: 0;
			padding: 2rem;
		}

		button span {
			display: block;
			width: 24px;
		}

		button span,
		button span::before,
		button span::after {
			height: 2px;
			background-color: var(--primary);
			transition: all 0.3s;
		}

		button span::before,
		button span::after {
			display: block;
			content: '';
			left: 0;
		}

		button span::before {
			transform: translateY(9px);
		}

		button span::after {
			transform: translateY(-11px);
		}

		.visible button span {
			background-color: transparent;
		}

		.visible button span::before {
			transform: rotate(135deg);
		}

		.visible button span::after {
			transform: translateY(-2px) rotate(-135deg);
		}

		.visible button {
			position: fixed;
		}

		nav {
			border: 0;
			position: relative;
		}

		ul {
			display: none;
			position: fixed;
			width: 100vw;
			height: 100vh;
			z-index: 10;
			background-color: var(--bg);
			flex-direction: column;
			justify-content: center;
			align-items: center;
			top: 0;
			left: 0;
		}

		.visible ul {
			display: flex;
		}

		li.social {
			margin-left: 0;
		}

		a {
			border: 0;
		}
	}
</style>
