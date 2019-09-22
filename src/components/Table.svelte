<style>
table {
    border-collapse: collapse;
    width: 100%;
    color: white;
    font-family: 'Raleway', sans-serif, serif;
}
thead {
    text-align: center;
    font-weight: bold;
}
tr {
    background-color: #e589af;
}
tr:nth-child(2n) {
    background-color: #c95e8b;
}
td {
    border: 1px #db0485 solid;
    padding: 6px 8px;
}
td:first-child {
    text-align: center;
}
.bold {
    font-weight: bold;
}
.dark tr {
    background-color: #8228af;
}
.dark tr:nth-child(2n) {
    background-color: #68208c;
}
.dark td {
    border: 1px #320f44 solid;
}

@media screen and (max-width: 400px) {
    td:last-child {
        display: none;
    }
}
</style>

{#if rows.length > 0}
    <table class:dark={$darkmode}>
        <thead>
            <tr>
                {#each rows[0] as attr}
                    <td>{attr}</td>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each rows.slice(1) as row}
                <tr>
                    {#each row as attr}
                        {#if typeof(attr) == "string"}
                        <td>{attr}</td>
                        {:else if attr.link}
                            <td><a href={attr.link} class:bold={attr.bold}>{attr.value}</a></td>
                        {:else}
                            <td><span class:bold={attr.bold}>{attr.value}</span></td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{/if}

<script>
export let rows = []
import { getContext } from 'svelte'
const darkmode = getContext('darkmode')
</script>