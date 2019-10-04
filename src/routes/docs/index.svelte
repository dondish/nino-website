<style>
	.index {
        user-select: none;
		margin: auto;
		width: 1256px;
	}

	.index h1 {
		font-family: var(--font-primary);
		font-size: 42px;
		text-align: center;
        margin-bottom: 40px;
	}

    .index h1:not(:first-child) {
        margin-top: 32px;
    }

    .links {
        display: grid;
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        grid-template-columns: auto auto auto;
    }

    .doclink {
        color: white;
        background-color: var(--primary);
        text-decoration: none;
		font-family: var(--font-secondary);
        font-size: 32px;
        text-align: center;
        padding: 10px;
    }

    .dark .doclink {
        background-color: var(--primary-dark);

    }
    
    p {
        font-family: var(--font-secondary);
    }

    @media screen and (max-width: 1300px) {
        .index {
            width: 100%;
        }
        .index h1 {
            font-size: 32px;
        }
        .links {
            grid-template-columns: auto auto;
        }
        .doclink {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 400px) {
        .index h1 {
            font-size: 24px;
        }
        .links {
            grid-template-columns: auto;
        }
    }
</style>

<svelte:head>
	<title>Documentation - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Documentation - Nino - Discord Moderation Bot" />
</svelte:head>

<div class="index" class:dark={$darkmode}>
    <h1>How Can We Help You Today?</h1>
    <div class="links">
        <a rel=prefetch role="button" class="doclink" href="/docs/commands">Commands</a>
        <a rel=prefetch role="button" class="doclink" href="/docs/lockdown">Lockdown</a>
        <a rel=prefetch role="button" class="doclink" href="/docs/warnings">Warnings and Punishments</a>
        <a rel=prefetch role="button" class="doclink" href="/docs/gsettings">Guild Settings</a>
        <a rel=prefetch role="button" class="doclink" href="/docs/automod">Auto-Moderation</a>
        <a rel=prefetch role="button" class="doclink" href="/docs/dashboard">Web-Dashboard</a>
    </div>
    <h1>Botlists (Please Support Us!)</h1>
    <div class="links">
        <a role="button" class="doclink" href="/docs/botlists/dbl">TOP.GG</a>
        <a role="button" class="doclink" href="/docs/botlists/dboats">Discord Boats</a>
        <a role="button" class="doclink" href="/docs/botlists/bfd">Bots For Discord</a>
        <a role="button" class="doclink" href="/docs/botlists/bspace">Botlist.Space</a>
        <a role="button" class="doclink" href="/docs/">Bots On Discord*</a>
        <a role="button" class="doclink" href="/docs/">Discord Bots (.gg)*</a>
    </div>
    <p>* not there yet, waiting for verification.</p>
</div>

<script>
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')
</script>