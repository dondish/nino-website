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
	:root {
		--primary: #db0485;
		--primary-dark: #7100c1;
		--bg: #edd0e0;
		--bg-dark: #333;
		--accent: #333;
		--accent-dark: white;
		--bg-alt: #a90eb5;
		--bg-alt-dark: #222123;
		--nav-menu: white;
		--commands-color: white;
		--font-primary: 'Pacifico', 'Dancing Script', 'Lobster', cursive;
		--font-secondary: 'Raleway', sans-serif, serif;  /* I really really like this font :)*/
	}
	main {
		min-height: calc(100vh - 188px);
		position: relative;
		max-width: 100%;
		color: var(--accent);
		background-color: var(--bg);
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.menuon {
		overflow-y: hidden;
	}
	.dark {
		color: var(--accent-dark);
		background-color: var(--bg-dark);
	}
</style>

<Nav {darkmode} {segment} bind:menuon={$menuon}/>

<main class:menuon={$menuon} class:dark={$darkmode}>
	<slot {darkmode}></slot>
</main>

<Footer {darkmode} />