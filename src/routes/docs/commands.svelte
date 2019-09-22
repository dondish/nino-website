<style>
	.index {
		margin: auto;
		width: 1256px;
        font-family: 'Raleway', sans-serif, serif;
	}
    .index h1 {
		font-family: 'Pacifico', 'Dancing Script', 'Lobster', cursive;
		font-size: 32px;
		text-align: center;
        margin-bottom: 40px;
	}
    section:not(:first-child) h1 {
        margin-top: 40px;
    }
    .bighead {
		font-size: 42px;

    }
    ul {
        list-style-type: none;
    }
    input {
        display: block;
        color: white;
        width: 750px;
        border-radius: 3px;
        padding: 10px;
        background-color: #db0485;
        font-family: 'Raleway', sans-serif, serif;
        font-size: 24px;
        margin: 0 auto;
        border: none;
    }
    .dark input {
        background-color: #7100c1;
    }
    @media screen and (max-width: 1300px) {
        .index {
            width: 100%;
            margin: 0;
        }
        .index h1 {
            font-size: 24px;
        }
        .bighead {
            font-size: 32px;

        }
    }

</style>

<svelte:head>
	<title>Commands - Nino - Discord Moderation Bot</title>
	<meta property="og:title" content="Commands - Documentation - Nino - Discord Moderation Bot" />
</svelte:head>

<div class="index" class:dark={$darkmode}>
    <h1 class="bighead">Commands</h1>
    <input autocomplete="off" bind:value={search} type="text" placeholder="Search Here..."/>
    {#if fgencmds.length > 0}
        <section id="generic">
            <h1>Generic Commands</h1>
            <ul>
            {#each fgencmds as command}
                <li>
                    <h3>x!{command.name}{#if command.args}{#each command.args as arg}&nbsp;[{arg.name}]{/each}{/if}{#if command.flags}{#each command.flags as flag}&nbsp;[&lt;]--{flag.name}]{/each}{/if}</h3>
                </li>
            {/each}
            </ul>
        </section>
    {/if}
    {#if fmodcmds.length > 0}
        <section id="moderation">
            <h1>Moderation Commands</h1>
            <ul>
            {#each fmodcmds as command}
                <li>
                    <h3>x!{command.name}{#if command.args}{#each command.args as arg}&nbsp;[{arg.name}]{/each}{/if}{#if command.flags}{#each command.flags as flag}&nbsp;[--{flag.name}]{/each}{/if}</h3>
                </li>
            {/each}
            </ul>
        </section>
    {/if}
</div>

<script>
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')

import Table from '../../components/Table.svelte'
let search = "";
const commands = [
    [ // Generic
    {"name":"help","aliases":["cmds","commands"],"description":"Gives a list of Nino's commands or shows documentation on a command","args":[{"name":"command","optional":true}]},
    {"name":"invite","aliases":["inv"],"description":"Gives you the invite for the bot."},
    {"name":"ping","aliases":["pong","pang"],"description":"Gives you the bot's ping."},
    {"name":"settings","aliases":[],"description":"View or edit the guild's settings.","args":[{"name":"subcommand","desc":"The subcommand to use"},{"name":"value","repeated":true}],"moreinfo":"/docs/gsettings"},
    {"name":"shardinfo","aliases":["si","shards"],"description":"Gives you the bot shard info."},
    {"name":"statistics","aliases":["stats","info","bot","botinfo"],"description":"Gives you the bot's statistics"},
    {"name":"uptime","aliases":["up"],"description":"Gives you the uptime for the bot."}
    ],
    [ // Moderation
    {"name":"ban","aliases":["banne","bean"],"description":"Ban a member in the current guild","args":[{"name":"user","desc":"The user to ban"}],"flags":[{"name": "reason","optional":true},{"name":"time","desc":"The duration until automatically unbanning the user, overridden by soft","optional":true},{"name":"soft","desc":"Whether to unban immediately after the ban","optional":true},{"name":"days","desc":"Amount of days to delete messages from","optional":true}]},
    {"name":"kick","aliases":["boot"],"description":"Kicks a user from the guild","args":[{"name":"user","desc":"the user to kick"}],"flags":[{"name": "reason","optional":true}]},
    {"name":"lockdown","aliases":[],"description":"Locks down a channel, multiple channels or all channels for all roles below the specified role","args":[{"name":"channel","desc":"The channels to lock, can be \"all\" to lock all channels", "repeated":true}],"flags":[{"name":"role","desc":"All roles below this (including this one) won't be able to type in the locked channel"},{"name":"release","desc":"Instead of locking the channel, release the lock","optional":true}],"moreinfo":"/docs/lockdown"},
    {"name":"mute","aliases":["slience"],"description":"Mutes a member from this guild","args":[{"name":"user","desc":"The user to mute"}],"flags":[{"name": "reason","optional":true},{"name":"time","desc":"The duration until automatically unmuting the user","optional":true}]},
    {"name":"pardon","aliases":["unwarn","forgive"],"description":"Pardon a member from this guild","args":[{"name":"user","desc":"The user to pardon","name":"amount","desc":"The amount of warnings to remove"}],"moreinfo":"/docs/warnings"},
    {"name":"prune","aliases":["purge"],"description":"Prunes messages from the current channel","args":[{"name":"amount","desc":"The amount of messages to remove"}],"flags":[{"name":"filter","desc":"How to filter the messages selected to removal. Can be \"new\" - newest messages, \"user\" - messages written by users, \"bot\" - messages written by bots. Defaults to \"new\".","optional":true}]},
    {"name":"reason","aliases":["update-reason"],"description":"Updates a case reason","args":[{"name":"caseID","desc":"The case ID to edit"},{"name":"reason","desc":"The new reason"}]},
    {"name":"unban","aliases":["unbanne"],"description":"Unbans a user from a guild","args":[{"name":"user","desc":"The user to unban"}],"flags":[{"name": "reason","optional":true}]},
    {"name":"unmute","aliases":[],"description":"Unmutes a user from a guild","args":[{"name":"user","desc":"The user to unmute"}],"flags":[{"name": "reason","optional":true}],"moreinfo":"/docs/warnings"},
    {"name":"warn","aliases":["addwarn"],"description":"Warns a member from this guild","args":[{"name":"user","desc":"The user to warn","moreinfo":"/docs/warnings"}]},
    {"name":"warnings","aliases":["warns"],"description":"Shows the amount of warnings a member has.","args":[{"name":"user","desc":"The user to check warnings of","moreinfo":"/docs/warnings"}]}
    ]
]
$ : fgencmds = commands[0].filter(command => search === "" || command.name.indexOf(search) !== -1 || command.description.indexOf(search) !== -1 || command.aliases.filter(alias => alias.indexOf(search) !== -1).length > 0)
$ : fmodcmds = commands[1].filter(command => search === "" ||  command.name.indexOf(search) !== -1 || command.description.indexOf(search) !== -1 || command.aliases.filter(alias => alias.indexOf(search) !== -1).length > 0)
</script>