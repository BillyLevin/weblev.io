<script>
	export let title;
</script>

<svelte:head>
	<title>{title} | weblev.io</title>
</svelte:head>

<h1>{title}</h1>
<slot>
	<!-- content goes here -->
</slot>
