<style>
	@import url('https://fonts.googleapis.com/css?family=Dancing+Script|Gayathri|Lobster|Pacifico&display=swap');
	
	.index {
		margin: auto;
		width: 1024px;
	}

	.ninointro {
		display: block;
		float: right;
		width: 434px;
		margin-left: 24px;
	}

	.ninointro h1 {
		font-family: 'Pacifico', 'Dancing Script', 'Lobster', cursive;
		font-size: 42px;
		text-align: center;
	}

	.ninointro p {
		font-family: 'Gayathri', 'Courier New', Courier, monospace;
		text-align: justify;
	}

	.banner {
		text-align: center;
	}

	.description a {
		margin-left: 2px;
		padding: 3px 0.5em;
		background-color: #db0485;
		color: white;
		text-decoration: none;
		border-radius: 5%;
	}
	@media screen and (max-width: 1024px) {
		.index {
			width: inherit;
		}
		.ninointro {
			float: initial;
			width: 80%;
			margin: 0 10%;
		}
	}
	@media screen and (max-width: 566px) {
		img {
    		max-width: 100%;
			height: auto;
		}
	}
</style>

<svelte:head>
	<title>Nino - Discord Moderation Bot</title>
</svelte:head>

<div class="index">
	<div class="ninointro">
		<h1>Hi, I'm Nino</h1>
		<p class="description">
		Nino is a Discord bot focused on providing servers top notch moderation.
		Once you add Nino to your server your mods will no longer moderate by themselves!
		Nino can detect many offenses made by guests and even automatically punish them!
		Nino is the new friend of your moderators and it has a lot of features! Check them out <a href="/features">here</a>
		<br><br>
		Nino is fully open-source under the MIT license. Check out the code<a href="https://github.com/auguwu/nino">here</a>
		</p>
	</div>
	<div class="banner">
		<img src="ninobanner.png" alt="Nino Banner" />
	</div>
</div>

