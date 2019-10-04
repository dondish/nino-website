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
    section:not(:first-child) h1 {
        margin-top: 40px;
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
	<title>Warnings and Punishments - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Warnings and Punishments - Documentation - Nino - Discord Moderation Bot" />
</svelte:head>
<div class:dark={$darkmode} class="index">
    <section>
        <h1>Warnings</h1>
        <p>The warning system used on Nino is quite intuitive: Each user starts with 0 warnings, and every time the user gets warned, another warning is being added to him.</p>
        <h2>Why are warnings important?</h2>
        <p>member that breaks the rules often will have more warnings and so on.<br><br>
        Going into the moderation log every time a user does something to check whether the user is misbehaving regularly is not ideal, the warning system solves that issue.<br><br>
        The punishment system relies on the warning system to function, more on that subject later.</p>
        <h3>Related Commands</h3>
        <ul>
            <li><a href="/docs/commands#warn">warn</a>&nbsp;- warn a user.</li>
            <li><a href="/docs/commands#pardon">pardon</a>&nbsp;- pardon a user (remove some of his warnings).</li>
            <li><a href="/docs/commands#warnings">warnings</a>&nbsp;- shows the amount of warnings a user has.</li>
        </ul>
    </section>
    <section>
        <h1>Punishments</h1>
        <p>The warning system is good, but what if the guild wishes to automate the process of applying punishments to users with a specific amount of warnings? Nino solves that too!</p>
        <h2>How does it work?</h2>
        <p>When you add a punishment, you specify the type of punishment and the number of warnings needed for the punishment to be executed. When a mod warns the user, Nino checks for punishments that should be applied and applies them!</p>
        <h2>Types of punishments</h2>
        <ul>
            <li>ban, mute, unmute, kick - work just like the commands themselves</li>
            <li>role - adds a role to the user</li>
            <li>unrole - removes a role from the user</li>
        </ul>
        <h2>How to add and remove punishments?</h2>
        <p><a href="/docs/gsettings">How to manage guild settings</a></p>
    </section>
</div>
<script>
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')
</script>