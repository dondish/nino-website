<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 100%;
		background-color: #edd0e0;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />