<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment} />

<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		max-width: 56rem;
		padding: 2rem;
		margin: 0 auto;
	}

	@media only screen and (max-width: 31.25em) {
		main {
			padding: 1rem;
		}
	}
</style>
