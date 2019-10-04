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
        overflow-x: auto !important;
        
        scrollbar-width: none;
        white-space: nowrap;
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
	<title>Guild Settings - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Guild Settings - Documentation - Nino - Discord Moderation Bot" />
</svelte:head>
<div class:dark={$darkmode} class="index">
    <h1>Managing Guild Settings</h1>

    <h2>The Settings Command</h2>
    <p>x!settings will help you manage the settings for each guild.</p>
    <h4 class="cmd">x!settings view</h4>
    <p>Shows you the settings in your guild.</p>

    <h2>Setting Values</h2>
    <h4 class="cmd">x!settings set &lt;setting&gt; &lt;value&gt;</h4>
    <h3>Examples:</h3>
    <h4 class="cmd">x!settings set automod.spam true</h4>
    <p>This will enable the anti-spam feature of the automod category in your server!</p>
    <h4 class="cmd">x!settings set automod.spam false</h4>
    <p>This will disable the anti-spam feature of the automod category in your server!</p>
    <h4 class="cmd">x!settings set automod.swears heck, frick</h4>
    <p>This will enable the swears blocker feature of the automod category in your server to protect against the words "heck" and "frick"!</p>
    <h4 class="cmd">x!settings set automod.swears</h4>
    <p>This will disable the swears blocker feature of the automod category in your server!</p>

    <h2>Resetting to Defaults</h2>
    <h4 class="cmd">x!settings reset &lt;setting&gt;</h4>
    <h3>Example:</h3>
    <h4 class="cmd">x!settings set automod.swears</h4>
    <p>This will disable the swears blocker feature of the automod category in your server!</p>

    <h2>Punishments</h2>
    <h4 class="cmd">x!settings add &lt;amount of warnings&gt; &lt;punishment&gt [--soft] [--time &lt;time can be x timeunit or x(initial of timeunit)&gt] [--days &lt;amount of days to delete messages of&gt] [--roleid &lt;role id&gt;]</h4>
    <p>Adds a punishment.</p>
    <h3>Example:</h3>
    <h4 class="cmd">x!settings add 3 ban --soft</h4>
    <p>This will add a punishment: a soft ban after 3 warnings!</p>
    <h4 class="cmd">x!settings remove &lt;index&gt;</h4>
    <p>Removes a punishment at a specific index (from the view subcommand).</p>
</div>
<script>
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')
</script>