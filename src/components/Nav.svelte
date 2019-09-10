<script>
	export let segment;
</script>

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
		height: 40px;
		margin: 0;
		padding: 0 5px;
		float: left;
	}
	li a {
		width: fit-content;
		display: block;
		text-decoration: none;
	}
	img {
		margin-top: 5px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: white;
	}
	.ulr {
		float: right;
	}
	.ulr li { 
		position: relative;
		top: 10px;
		border-right: 2px #db0485 solid;
		background-color: white;
		border-radius: 3%;
		margin: 0 3px;
	}
	.ulr li a {
		padding: 8px 10px;
		text-align: center;
	}
</style>

<nav>
	<ul>
		<li><a href="."><img src="nino.png" alt="Nino"/></a></li>
	</ul>
	<ul class="ulr">
		<li><a class:selected={ !segment } href='.'>home</a></li>
		<li><a class:selected={ segment === "about" } href='about'>about</a></li>
		<li><a class:selected={ segment === "docs" } href='docs'>documentation</a></li>
		<li><a class:selected={ segment === "about" } href='dashboard'>dashboard</a></li>
	</ul>
</nav>