<style>
    .index {
		margin: auto;
		width: 1256px;
        font-family: var(--font-secondary);
	}
    .index h1 {
        user-select: none;
		font-family: var(--font-primary);
		font-size: 32px;
		text-align: center;
        margin-bottom: 40px;
	}
    .index p {
		font-family: var(--font-secondary);
		text-align: justify;
	}
    .index h2 {
		font-family: var(--font-secondary);
    }
    a:any-link {
        color: var(--accent);
    }
    .dark a:any-link{
        color: var(--accent-dark);
    }
    @media screen and (max-width: 1300px) {
        .index {
            width: 100%;
            margin: 0;
        }
        .index h1 {
            font-size: 24px;
        }
        .index h2 {
            font-size: 24px;
        }
    }
</style>

<svelte:head>
	<title>Auto-Moderation - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Auto-Moderation - Documentation - Nino - Discord Moderation Bot" />
</svelte:head>
<div class:dark={$darkmode} class="index">
    <h1>Auto-Moderation</h1>
    <p>Are your mods offline? Not to worry, Nino is here to keep your server safe! With Auto-Moderation, your mods can worry less, and you can be calmer.</p>
    <h2>Features</h2>
    <ul>
        <li>Spam - prevents users from sending messages too fast.</li>
        <li>Swears - prevents users from cursing.</li>
        <li>Mention Spam - prevents users from mentioning too many people.</li>
        <li>Advertising - prevents users from advertising their discord servers (handles most workarounds as well).</li>
        <li>Raid - detects when a lot of suspicious users are joining and prevents them from harming the server.</li>
        <li>Dehoisting - prevents users from using non-alphanumeric characters to show above other users.</li>
    </ul>
    <h2>Some Notes</h2>
    <p>For all auto-moderation utilities except raid, the offending user will get warned, and the <a href="/docs/warnings">punishment</a> system will work automatically. </p>
</div>
<script>
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')
</script>