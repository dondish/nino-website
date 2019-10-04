<style>
    .listimg {
        background-color: #7289DA; /* Some lists don't have an existing background image. */
        width: 128px;
        height: auto;
        border-radius: 50%;
    }
    .head {
        text-align: center;
        font-family: var(--font-primary);
    }
    .widget {
        text-align: center;
    }
    .buttons {
        text-align: center;
        margin: 20px;
    }
    .buttons a {
        padding: 5px;
        background-color: var(--primary);
        color: var(--commands-color);
        text-decoration: none;
        font-family: var(--font-secondary);
    }
    .dark.buttons a {
        background-color: var(--primary-dark);
    }
</style>

<svelte:head>
	<title>{bl.name} - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content={`${bl.name} - Botlists - Nino - Discord Moderation Bot`} />
</svelte:head>

<div class="head">
    <img class="listimg" src={bl.image} alt={bl.name}/>
    <h1>{bl.name}</h1>
</div>

<div class:dark={$darkmode} class="buttons">
    <a href={bl.link}>Visit</a>
    <a href={bl.vote}>Upvote Nino!</a>
</div>

{#if bl.widget}
    <div class="widget">
        <a href={bl.link}>
            <img src={bl.widget} alt={`Nino - ${bl.name}`} />
        </a>
    </div>
{/if}

<script context="module">
    const lists = {
        'dbl': { name: 'TOP.GG', link: 'https://top.gg/bot/531613242473054229', vote: 'https://top.gg/bot/531613242473054229/vote', image: 'https://top.gg/images/dblnew.png', widget: 'https://top.gg/api/widget/531613242473054229.svg'},
        'dboats': { name: 'Discord Boats', link: 'https://discord.boats/bot/nino', vote: 'https://discord.boats/bot/nino/vote', image: 'https://discord.boats/logo.png', widget: 'https://discord.boats/api/widget/531613242473054229'},
        'bfd': { name: 'Bots for Discord', link: 'https://botsfordiscord.com/bot/531613242473054229', vote: 'https://botsfordiscord.com/bot/531613242473054229/vote', image: 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LQMp6pbqRx6A5iwcsfy%2Favatar.png?generation=1541258978500319&alt=media', widget: 'https://botsfordiscord.com/api/bot/531613242473054229/widget'},
        'bspace': { name: 'Botlist.Space', link: 'https://botlist.space/bot/531613242473054229', vote: 'https://botlist.space/bot/531613242473054229/upvote', image: 'https://botlist.space/img/logo.svg' },
    }
	export async function preload(page, session) {
        const { botlist } = page.params;

		if (Object.keys(lists).includes(botlist)) {
            return { bl: lists[botlist] }
        } else {
            this.error(404, 'Not found');
        }
	}
</script>

<script>
    export let bl;
    import {getContext} from 'svelte';
    let darkmode = getContext('darkmode')
    $: {
        if (bl.name === 'Bots for Discord' && $darkmode) {
            bl = {...bl, widget: 'https://botsfordiscord.com/api/bot/531613242473054229/widget?theme=dark'}
        } else if (bl.name === 'Bots for Discord') {
            bl = {...bl, widget: 'https://botsfordiscord.com/api/bot/531613242473054229/widget'}
        }
    }
</script>