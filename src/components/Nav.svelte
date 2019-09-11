<style>
	nav {
		margin: 0;
		display: block;
		width: inherit;
		height: 61px;
		font: 'Overpass', sans-serif; /* I really really like this font :)*/
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background-color: #db0485
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
		padding: auto;
		color: white;
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
		width: 500px;
		padding: 0;
		float: right;
	}
	.ulr li { 
		top: 8px;
		height: calc(100% - 8px);
		margin: 3px 0;
		padding: 0;
		width: 125px;
	}
	.ulr li:last-child a {
		border-right: none;
	}
	.ulr li a {
		width: 124px;
		border-right: 1px white solid;
		text-align: center;
		padding: 8px 0;
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
			border-right: #db0485 1px solid;
			top: 62px;
			padding: 0;
			position: absolute;
			background-color: #edd0e0;
			display: block;
			z-index: 99;
			width: 250px;
			transform: translate(-250px, 0);
			height: calc(100% - 62px);
			float: initial;
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
			color: #2f0030;
			width: 230px;
			border-bottom: 1px #db0485 dotted;
			padding: 10px 0;
			margin: 0 10px;
			border-right: none;
			display: block;
		}
		.ulr li:first-child a {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 48px;
		}
	}
</style>
<svelte:window bind:innerWidth={width} />
<nav>
	<ul class="ulm">
		<li class="mobile"><button class="menu" on:click={onclick}><Icon data={data} /></button></li>
		<li><a href="."><img src="nino.png" alt="Nino"/></a></li>
	</ul>
	{#if isMobile}
	<ul 
	class="ulr" 
	use:pannable 
	style="transform: translate({$anim-250}px, 0)"
	on:panmove={handlePanMove} 
	on:panend={handlePanEnd}>
		<li><a in:fade href=".">Nino</a></li>
		<li><a in:fly="{{ y: 200, duration: 2000 }}" class:selected={ !segment } href='.'>Home</a></li>
		<li><a in:fly="{{ y: 200, duration: 2000 }}" class:selected={ segment === "about" } href='about'>About</a></li>
		<li><a in:fly="{{ y: 200, duration: 2000 }}" class:selected={ segment === "docs" } href='docs'>Documentation</a></li>
		<li><a in:fly="{{ y: 200, duration: 2000 }}" class:selected={ segment === "dashboard" } href='dashboard'>Dashboard</a></li>
	</ul>
	{:else}
	<ul class="ulr">
		<li><a class:selected={ !segment } href='.'>Home</a></li>
		<li><a class:selected={ segment === "about" } href='about'>About</a></li>
		<li><a class:selected={ segment === "docs" } href='docs'>Documentation</a></li>
		<li><a class:selected={ segment === "dashboard" } href='dashboard'>Dashboard</a></li>
	</ul>
	{/if}
</nav>

<script>
export let segment;
import { pannable } from './pannable.js'
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { fly, fade } from 'svelte/transition';
import Icon from 'svelte-awesome/components/Icon.svelte'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

let width;
$: isMobile = width <= 1000;

let ulrloaded = false;

let ulrvisible = false;
$: data = ulrvisible ? faTimes : faBars;

function smoothMove(node, {delay = 0, duration = 400}) {
	const w = +getComputedStyle(node).width
	return {
		delay,
		duration,
		css: t => `width: ${t*width}`
	}
}

const anim = tweened(0, {
	duration: 400,
	easing: cubicOut
});

function handlePanMove(event) {
	anim.update($anim => Math.min(250, $anim + event.detail.dx))
}

function handlePanEnd(event) {
	if ($anim > 125) {
		anim.set(250);
	} else {
		anim.set(0);
	}
}

function onclick(event) {
	event.preventDefault();
	anim.update($anim => Math.abs($anim-250));
}
</script>