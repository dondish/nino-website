<style>
footer {
    padding: 10px;
    text-align: center;
    background-color: var(--primary);
    font-family: 'Raleway', sans-serif, serif;
    color: white;
}
footer.dark {
    background-color: var(--primary-dark);
}
</style>

<footer class:dark={$darkmode}>
<span>Nino© 2019-2020</span><br>
<span>Made with <Icon style="line-height: 21px;" data={heart} label="Love"/> using Svelte</span><br>
<span>Nino is not in any way affiliated with Discord Inc. Nakano Nino is a property of Kodansha Ltd.</span><br>
<span style="line-height: 31px;">Dark Mode: <Switch bind:checked={$darkmode} /></span>
</footer>

<script>
import Switch from './switch.svelte'
import Icon from 'svelte-awesome/components/Icon.svelte' 
import { heart } from 'svelte-awesome/icons'
export let darkmode;
</script>