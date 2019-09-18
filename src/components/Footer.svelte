<style>
footer {
    padding: 10px;
    text-align: center;
    background-color: #db0485;
    color: white;
}
footer.dark {
    background-color: #7100c1;
}
</style>

<footer class:dark={$darkmode}>
<span>Nino© 2019-2020</span><br>
<span>Made with <Icon data={faHeart}/> using Svelte</span><br>
<span>Nino is not in any way affiliated with Discord Inc. Nakano Nino is a property of Kodansha Ltd.</span><br>
<span>Dark Mode: <Switch bind:checked={$darkmode} /></span>
</footer>

<script>
import Switch from './switch.svelte'
import Icon from 'svelte-awesome/components/Icon.svelte' 
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export let darkmode;
</script>