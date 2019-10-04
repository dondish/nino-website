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
    .bighead {
		font-size: 42px;

    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    input {
        display: block;
        color: white;
        width: 750px;
        border-radius: 3px;
        padding: 10px;
        background-color: var(--primary);
        font-family: var(--font-secondary);
        font-size: 24px;
        margin: 0 auto;
        border: none;
    }
    .dark input {
        background-color: var(--primary-dark);
    }
    .cmd {
        margin-bottom: 2px;
    }
    .cmd h3 {
        user-select: none;
        margin: 0;
        color: var(--commands-color);
        padding: 10px;
        background-color: var(--primary);
    }
    .cmd h3:hover {
        cursor: pointer;
    }
    .dark .cmd h3 {
        background-color: var(--primary-dark);
    }
    .desc {
        color: var(--commands-color);
        background-color: var(--bg-alt);
        padding: 10px;
        display: block;
    }
    .dark .desc {
        background-color: var(--bg-alt-dark);
    }
    .desc ul {
        padding-left: 10px;
        list-style-type: disc;
    }
    a:any-link {
        color: var(--commands-color);
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
    @media screen and (max-width: 840px) {
        input {
            width: calc(100% - 20px);
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
            {#each fgencmds as command, i}
                <li class="cmd" id={command.name}>
                    <h3 on:click={() => {bools[0][i] = !bools[0][i]}}>x!{command.name}
                    {#if command.args}{#each command.args.filter(arg => !arg.optional) as arg}&nbsp;[{arg.name}]{/each}{/if}
                    {#if command.flags}{#each command.flags.filter(arg => !arg.optional) as flag}&nbsp;[&lt;]--{flag.name}]{/each}{/if}
                    <Icon style={`float:right;transform:rotate(${bools[0][i] ? "-90" : "0"}deg);transition:transform 400ms;`} data={chevronLeft}/></h3>
                    {#if bools[0][i]}
                        <div class="desc" transition:slide>
                            <span>{command.description}</span>
                            {#if command.aliases.length > 0}
                                <span><br>Aliases: {command.aliases.join(", ")}</span>
                            {/if}
                            {#if command.args}
                                <h4><br>Argument{#if command.args.length > 1}s{/if}:</h4>
                                <ul>
                                    {#each command.args as arg}
                                        <li><span>{arg.name}{#if arg.desc}&nbsp;- {arg.desc}{/if}{#if arg.optional}&nbsp;(Optional){/if}{#if arg.repeated}&nbsp;(Repeated){/if}</span></li>
                                    {/each}
                                </ul>
                            {/if}
                            {#if command.flags}
                                <h4><br>Flag{#if command.flags.length > 1}s{/if}:</h4>
                                <ul>
                                    {#each command.flags as flag}
                                        <li><span>{flag.name}{#if flag.desc}&nbsp;- {flag.desc}{/if}{#if flag.optional}&nbsp;(Optional){/if}</span></li>
                                    {/each}
                                </ul>
                            {/if}
                            {#if command.moreinfo}
                                <a href={command.moreinfo} class="moreinfo">More Info</a>
                            {/if}
                        </div>
                    {/if}
                </li>
            {/each}
            </ul>
        </section>
    {/if}
    {#if fmodcmds.length > 0}
        <section id="moderation">
            <h1>Moderation Commands</h1>
            <ul>
            {#each fmodcmds as command, i}
                <li class="cmd" id={command.name}>
                    <h3 on:click={() => {bools[1][i] = !bools[1][i]}}>x!{command.name}
                    {#if command.args}{#each command.args.filter(arg => !arg.optional) as arg}&nbsp;[{arg.name}]{/each}{/if}
                    {#if command.flags}{#each command.flags.filter(arg => !arg.optional) as flag}&nbsp;[--{flag.name}]{/each}{/if}
                    <Icon style={`float:right;transform:rotate(${bools[1][i] ? "-90" : "0"}deg);transition:transform 400ms;`} data={chevronLeft}/></h3>
                    {#if bools[1][i]}
                        <div class="desc" transition:slide>
                            <span>{command.description}</span>
                            {#if command.aliases.length > 0}
                                <span><br>Aliases: {command.aliases.join(", ")}</span>
                            {/if}
                            {#if command.args}
                                <h4><br>Argument{#if command.args.length > 1}s{/if}:</h4>
                                <ul>
                                    {#each command.args as arg}
                                        <li><span>{arg.name}{#if arg.desc}&nbsp;- {arg.desc}{/if}{#if arg.optional}&nbsp;(Optional){/if}{#if arg.repeated}&nbsp;(Repeated){/if}</span></li>
                                    {/each}
                                </ul>
                            {/if}
                            {#if command.flags}
                                <h4><br>Flag{#if command.flags.length > 1}s{/if}:</h4>
                                <ul>
                                    {#each command.flags as flag}
                                        <li><span>{flag.name}{#if flag.desc}&nbsp;- {flag.desc}{/if}{#if flag.optional}&nbsp;(Optional){/if}</span></li>
                                    {/each}
                                </ul>
                            {/if}
                            {#if command.moreinfo}
                                <a href={command.moreinfo} class="moreinfo">More Info</a>
                            {/if}
                        </div>
                    {/if}
                </li>
            {/each}
            </ul>
        </section>
    {/if}
</div>

<script>
import { getContext } from 'svelte';
import { slide } from 'svelte/transition';
import Icon from 'svelte-awesome/components/Icon.svelte'
import { chevronLeft } from 'svelte-awesome/icons'
let darkmode = getContext('darkmode')
let search = "";
const commands = [
    [ // Generic
    {"name":"help","aliases":["cmds","commands"],"description":"Shows Nino's commands or shows the documentation of a command","args":[{"name":"command","desc":"A command to show help for","optional":true}]},
    {"name":"invite","aliases":["inv"],"description":"Shows the invite for the bot."},
    {"name":"ping","aliases":["pong","pang"],"description":"Shows the bot's ping."},
    {"name":"settings","aliases":[],"description":"Shows or modifies the guild's settings.","args":[{"name":"subcommand","desc":"The subcommand to use (\"view\", \"set\", \"reset\", \"add\", \"remove\")"},{"name":"value","desc":"The value depends on the subcommand","repeated":true}],"moreinfo":"/docs/gsettings"},
    {"name":"shardinfo","aliases":["si","shards"],"description":"Shows the bot shard info."},
    {"name":"statistics","aliases":["stats","info","bot","botinfo"],"description":"Shows the bot's statistics"},
    {"name":"uptime","aliases":["up"],"description":"Shows the uptime for the bot."}
    ],
    [ // Moderation
    {"name":"ban","aliases":["banne","bean"],"description":"Ban a member in the current guild","args":[{"name":"user","desc":"The user to ban"}],"flags":[{"name": "reason","optional":true},{"name":"time","desc":"The duration until automatically unbanning the user, overridden by soft","optional":true},{"name":"soft","desc":"Whether to unban immediately after the ban","optional":true},{"name":"days","desc":"Amount of days to delete messages from","optional":true}]},
    {"name":"kick","aliases":["boot"],"description":"Kicks a user from the guild","args":[{"name":"user","desc":"the user to kick"}],"flags":[{"name": "reason","optional":true}]},
    {"name":"lockdown","aliases":[],"description":"Locks down a channel, multiple channels or all channels for the roles specified","args":[{"name":"channel","desc":"The channels to lock, can be \"all\" to lock all channels", "repeated":true}],"flags":[{"name":"roles","desc":"The roles to modify permissions of. When locking, one should add + or - before the role identifier to specify whether to allow typing in the channel or not."},{"name":"release","desc":"Instead of locking the channel, release the lock","optional":true}],"moreinfo":"/docs/lockdown"},
    {"name":"mute","aliases":["slience"],"description":"Mutes a member from this guild","args":[{"name":"user","desc":"The user to mute"}],"flags":[{"name": "reason","optional":true},{"name":"time","desc":"The duration until automatically unmuting the user","optional":true}]},
    {"name":"pardon","aliases":["unwarn","forgive"],"description":"Pardon a member from this guild","args":[{"name":"user","desc":"The user to pardon","name":"amount","desc":"The amount of warnings to remove"}],"moreinfo":"/docs/warnings"},
    {"name":"prune","aliases":["purge"],"description":"Prunes messages from the current channel","args":[{"name":"amount","desc":"The amount of messages to remove"}],"flags":[{"name":"filter","desc":"How to filter the messages selected to removal. Can be \"new\" - newest messages, \"user\" - messages written by users, \"bot\" - messages written by bots. Defaults to \"new\".","optional":true}]},
    {"name":"reason","aliases":["update-reason"],"description":"Updates a case reason","args":[{"name":"caseID","desc":"The case ID to edit"},{"name":"reason","desc":"The new reason"}]},
    {"name":"unban","aliases":["unbanne"],"description":"Unbans a user from a guild","args":[{"name":"user","desc":"The user to unban"}],"flags":[{"name": "reason","optional":true}]},
    {"name":"unmute","aliases":[],"description":"Unmutes a user from a guild","args":[{"name":"user","desc":"The user to unmute"}],"flags":[{"name": "reason","optional":true}]},
    {"name":"warn","aliases":["addwarn"],"description":"Warns a member from this guild","args":[{"name":"user","desc":"The user to warn"}],"moreinfo":"/docs/warnings"},
    {"name":"warnings","aliases":["warns"],"description":"Shows the amount of warnings a member has.","args":[{"name":"user","desc":"The user to check warnings of"}],"moreinfo":"/docs/warnings"}
    ]
]
let bools = commands.map(cat => cat.map(cmd => false));
$ : fgencmds = commands[0].filter(command => search === "" || command.name.indexOf(search) !== -1 || command.description.indexOf(search) !== -1 || command.aliases.filter(alias => alias.indexOf(search) !== -1).length > 0)
$ : fmodcmds = commands[1].filter(command => search === "" ||  command.name.indexOf(search) !== -1 || command.description.indexOf(search) !== -1 || command.aliases.filter(alias => alias.indexOf(search) !== -1).length > 0)
</script>