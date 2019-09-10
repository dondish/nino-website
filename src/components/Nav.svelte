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
		width: 543px;
		float: right;
	}
	.ulr li { 
		top: 8px;
		height: calc(100% - 8px);
		margin: 3px 0;
		width: 125px;
	}
	.ulr li:last-child a {
		border-right: none;
	}
	.ulr li a {
		width: 125px;
		border-right: 1px white solid;
		text-align: center;
		padding: 8px 5px;
	}
	.selected {
		font-weight: bold;
	}
	.mobile {
		visibility: hidden;
	}
	@media screen and (max-width: 1000px) {
		.mobile { 
			visibility: visible;
		}
		.ulm {
			width: 100%;
		}
		.ulm li:last-child {
			margin: auto;
		}
		.ulr {
			visibility: hidden;
		}
		.menu {
			width: 50px;
			height: 50px;
		}
	}
</style>

<nav>
	<ul class="ulm">
		<li class="mobile"><button onclick={onClick}><img class="menu" src="menu.svg", alt="menu"></button></li>
		<li><a href="."><img src="nino.png" alt="Nino"/></a></li>
	</ul>
	<ul class="ulr">
		<li><a class:selected={ !segment } href='.'>Home</a></li>
		<li><a class:selected={ segment === "about" } href='about'>About</a></li>
		<li><a class:selected={ segment === "docs" } href='docs'>Documentation</a></li>
		<li><a class:selected={ segment === "dashboard" } href='dashboard'>Dashboard</a></li>
	</ul>
</nav>

<script>
export let segment;

function onClick(event) {

}
</script>