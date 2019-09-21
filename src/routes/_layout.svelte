<script>
	import { setContext, onDestroy } from 'svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte'
	import { writable } from 'svelte/store';
	export let segment;
	export const darkmode = writable(typeof(Storage) !== "undefined" && localStorage.getItem('theme') == 'true')
	if (typeof(Storage) !== "undefined") {
		const unsub = darkmode.subscribe(d => {
			localStorage.setItem('theme', d ? 'true' : 'false')
		})
		onDestroy(unsub);
	}
	let menuon = writable(false);
	let window = null;
	setContext('darkmode', darkmode);
</script>

<style>
	main {
		min-height: calc(100vh - 188px);
		position: relative;
		max-width: 100%;
		background-color: #edd0e0;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.menuon {
		overflow-y: hidden;
	}
	.dark {
		color: white;
		background-color: #333;
	}
</style>

<Nav {darkmode} {segment} bind:menuon={$menuon}/>

<main class:menuon={$menuon} class:dark={$darkmode}>
	<slot {darkmode}></slot>
</main>

<Footer {darkmode} />