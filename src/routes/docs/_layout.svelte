<style>
a {
    position: relative;
    left: 5px;
    padding: 5px;   
    background-color: var(--primary);
    color: var(--commands-color);
    text-decoration: none;
    font-family: var(--font-secondary);
}
a.dark {
    background-color: var(--primary-dark);
}
</style>

{#if segment}
<a class:dark={$darkmode} href="/docs/"><Icon style="line-height: 14px;" data={arrowLeft}/> Go Back</a>
{/if}
<slot> </slot>

<script>
import Icon from 'svelte-awesome/components/Icon.svelte';
import { arrowLeft } from 'svelte-awesome/icons';
export let segment;
import {getContext} from 'svelte';
let darkmode = getContext('darkmode')
</script>