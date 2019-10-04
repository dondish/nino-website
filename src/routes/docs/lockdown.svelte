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
    .cmd {
        background: var(--bg-alt);
        color: var(--commands-color);
        padding: 5px;
        border-radius: 3px;
        font-family: var(--font-alt);
    }
    .dark .cmd {
        background: var(--bg-alt-dark);
    }
    @media screen and (max-width: 1300px) {
        .index {
            width: 100%;
            margin: 0;
        }
        .index h1 {
            font-size: 24px;
        }
        .cmd {
            font-size: 16px;
        }
        .index h2:not(.cmd) {
            font-size: 24px;
        }
    }
</style>
<svelte:head>
	<title>Lockdown - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Lockdown - Documentation - Nino - Discord Moderation Bot" />
</svelte:head>
<div class:dark={$darkmode} class="index">
    <h1>Lockdown</h1>
    <p>Raid prevention is fragile since raids can be conducted by a large group of long-time Discord users, catching them is between hard to impossible.<br>
    Nino provides a way for moderators to stop an ongoing raid using lockdown. Lock your channels for specific roles seamlessly.</p>
    <h4 class="cmd">x!lockdown [channel], [channel] ... &lt;--roles=+role/-role/role ...&gt; &lt;--release&gt;</h4>
    <p>Locks down (or releases from a lock) one or more channels for one or more roles.</p>
    <h3>Argument</h3>
    <span>channel - A channel to lock down. (can be repeated for more than one channel). If one of the channels is the word 'all' it will lock or release all of the channels.</span>
    <h3>Flags</h3>
    <span>roles - The roles to modify permissions of. (can be a list for more than one role). When not releasing the lock, one should add + or - before each role identifier to specify whether to give permission or take it.</span><br>
    <span>release - When the flag is true, instead of locking down the channel, the bot resets the permissions to before the lock occured.</span>
    <h2>Some Notes</h2>
    <p>Channels are backed up independent of other channels, so releasing can be done in multiple steps.</p>
</div>
<script>
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')
</script>