<style>
	.index {
		margin: auto;
		width: 1256px
	}

	.index h1 {
		user-select: none;
		font-family: var(--font-primary);
		font-size: 42px;
		text-align: center;
	}
	
	.feature {
		height: 215px;
		margin: 10px 0;
		display: block;
	}

	.featuredesc {
		max-width: 47%;
		padding: 5px;
		display: inline-block;
	}

	.featuredesc i {
		user-select: none;
		font-family: var(--font-primary);
		font-size: 32px;
	}

	.featuredesc p {
		font-family: var(--font-secondary);
		text-align: justify;
	}

	.feature img {
		border: 3px white solid;
		border-radius: 1%;
		max-width: 47%;
		height: auto;
		display: inline-block;
  		box-shadow: 3px 6px 9px #888888;
	}

	.fright {
		float: right;
	}

	.fleft {
		float: left;
	}

	@media screen and (max-width: 1256px) {
		.index {
			width: inherit;
		}
		.feature {
			height: initial;
		}
		.featuredesc {
			display: block;
			max-width: 100%;
		}
		.feature img {
			display: block;
			max-width: 100%;
		}
		.fright {
			float: none;
		}
		.fleft {
			float: none;
		}
	}
</style>

<svelte:head>
	<title>Features - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Features - Nino - Discord Moderation Bot" />
</svelte:head>

<div class="index">
	<h1>Features</h1>
	<div class="feature">
		<div class="featuredesc fright">
			<i>Advanced Moderation Utilities</i>
			<p>Every command includes flags which can be used to customize the command execution. Nino supports a large proportion of the Discord API to let you use the bot your way.</p>
		</div>
		<picture>
			<source srcset="feature1.webp" type="image/webp" />
			<img class="fleft" src="feature1.png" alt="Advanced Moderation Utilities" />
		</picture>
	</div>
	<div class="feature">
		<div class="featuredesc fleft">
			<i>Detailed Log</i>
			<p>Every action you take can be logged, that lets moderators be more coordinated with each other and work better as a team. The log includes more than just the reason and the users, but also the flags passed to the command.</p>
		</div>
		<picture>
			<source srcset="feature2.webp" type="image/webp" />
			<img class="fright" src="feature2.png" alt="Detailed Log" />
		</picture>
	</div>
	<div class="feature">
		<div class="featuredesc fright">
			<i>Warnings and Punishments</i>
			<p>Warnings in Nino work differently to other bots. In Nino, Warnings represent "strikes", the number of offenses made by a user in a guild. Warnings can be chained with punishments, that automatically does an action on a user when the user reaches a specific amount of warnings.</p>
		</div>
		<picture>
			<source srcset="feature3.webp" type="image/webp" />
			<img class="fleft" src="feature3.png" alt="Warnings" />
		</picture>
	</div>
	<div class="feature">
		<div class="featuredesc fleft">
			<i>Auto-Moderation</i>
			<p>Auto-Moderation is the most important thing we had in mind when creating the bot. These days, it's hard to find a bot which has enough Auto-Moderation features. Nino is here to change that!</p>
		</div>
		<picture>
			<source srcset="feature4.webp" type="image/webp" />
			<img class="fright" src="feature4.png" alt="Auto-Moderation" />
		</picture>
	</div>
</div>

