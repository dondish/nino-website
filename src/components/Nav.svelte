<style>
	nav {
		margin: 0;
		display: block;
		width: inherit;
		height: 61px;
		font-family: var(--font-secondary);
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background-color: var(--primary);
	}
	nav.dark {
		background-color: var(--primary-dark);
	}
	ul {
  		list-style-type: none;
		height: 60px;
		margin: 0;
		display: inline-block;
	}
	li {
		position: relative;
		top: 5px;
		height: 40px;
		margin: 0;
		padding: 0 5px;
		float: left;
	}
	li a {
		color: var(--nav-menu);
		display: block;
		text-decoration: none;
	}
	.ulm img {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: white;
	}
	.ulr {
		padding: 0;
		float: right;
	}
	.ulr li { 
		top: 8px;
		height: calc(100% - 8px);
		margin: 3px 0;
		padding: 0;
	}
	.ulr li:last-child a {
		border-right: none;
	}
	.ulr li a {
		width: 124px;
		border-right: 1px var(--nav-menu) solid;
		text-align: center;
		padding: 8px 25px;
	}
	.selected {
		font-weight: bold;
	}
	.mobile {
		display: none;
	}
	@media screen and (max-width: 1000px) {
		nav {
			padding: 0;
		}
		.mobile { 
			display: block;
		}
		.ulm {
			padding: 0;
			width: 100%;
		}
		.ulm li {
			padding: 0;
		}
		.ulm li:first-child {
			width: 25%;
		}
		.ulm li:last-child {
			width: 50%;
			margin: auto;
		}
		.ulm li:last-child a {
			text-align: center;
		}
		.menu {
			margin-left: 5%;
			color: white;
			background: none;
			border: none;
			width: 50px;
			height: 50px;
		}
		.ulr {
			border-right: var(--primary) 1px solid;
			top: 62px;
			padding: 0;
			position: absolute;
			background-color: var(--bg);
			display: block;
			z-index: 99;
			width: 250px;
			transform: translate(-250px, 0);
			height: calc(100% - 62px);
			float: initial;
		}
		nav.dark .ulr {
			background-color: var(--bg-dark);
			border-right: var(--accent-dark);
		}
		.ulr li {
			width: 250px;
			margin: 0;
			top: 0;
			height: initial;
			float: left;
			padding: 0;
			display: block;
		}
		.ulr li a {
			overflow: hidden;
			color: var(--accent);
			width: 230px;
			border-bottom: 1px var(--primary) dotted;
			padding: 10px 0;
			margin: 0 10px;
			border-right: none;
			display: block;
		}
		nav.dark .ulr li a {
			color: var(--accent-dark);
			border-bottom: 1px var(--accent-dark) dotted;
		}
		.ulr li:first-child a {
			font-family: var(--font-secondary);
			font-size: 48px;
		}
	}
</style>

<svelte:window 
bind:innerWidth={width} 
on:keydown={dependify(() => $menuon, preventDefaultForScrollKeys)} 
on:wheel={dependify(() => $menuon, preventDefault)} 
on:mousewheel={dependify(() => $menuon, preventDefault)} 
/>

<nav class:dark={$darkmode}>
	<ul class="ulm">
		<li class="mobile"><button aria-label="Menu" class="menu" on:click={onclick}><Icon data={data} /></button></li>
		<li><a href="."><picture>
			<source srcset="nino.webp" type="image/webp" />
			<img src="nino.png" alt="Nino" />
		</picture></a></li>
	</ul>
	{#if isMobile}
	<ul 
	class="ulr" 
	use:pannable 
	style="transform: translate({$anim-251}px, 0)"
	on:panmove={handlePanMove} 
	on:panend={handlePanEnd}>
		<li><a href=".">Nino</a></li>
		<li><a class:selected={ !segment } href='.'>Home</a></li>
		<li><a href='https://discordapp.com/oauth2/authorize?client_id=531613242473054229&scope=bot'>Invite</a></li>
		<li><a class:selected={ segment === "docs" } href='docs'>Documentation</a></li>
		<li><a class:selected={ segment === "dashboard" } href='dashboard'>Dashboard</a></li>
	</ul>
	{:else}
	<ul class="ulr">
		<li><a class:selected={ !segment } href='.'>Home</a></li>
		<li><a href='https://discordapp.com/oauth2/authorize?client_id=531613242473054229&scope=bot'>Invite</a></li>
		<li><a class:selected={ segment === "docs" } href='docs'>Documentation</a></li>
		<li><a class:selected={ segment === "dashboard" } href='dashboard' on:click={(event) => {event.preventDefault()}}>Dashboard</a></li>
	</ul>
	{/if}
</nav>

<script>
export let segment;
export let darkmode;

import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

const anim = tweened(0, {
	duration: 400,
	easing: cubicOut
});

import { derived } from 'svelte/store';

export const menuon = derived(anim, $anim => $anim > 0);

import { pannable } from './pannable.js'
import Icon from 'svelte-awesome/components/Icon.svelte'
import { bars, times } from 'svelte-awesome/icons'

let width;
$: isMobile = width <= 1000;

let ulrloaded = false;

$: ulrvisible = $anim > 0;
$: data = ulrvisible ? times : bars;


function handlePanMove(event) {
	anim.update($anim => Math.min(251, $anim + event.detail.dx))
}

function handlePanEnd(event) {
	if ($anim > 125) {
		anim.set(251);
	} else {
		anim.set(0);
	}
}

function onclick(event) {
	event.preventDefault();
	anim.update($anim => Math.abs($anim-251));
}


const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault)
		e.preventDefault();
	e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function dependify(check, func) {
	return (e) => { if (check()) func(e) } 
}
</script>

