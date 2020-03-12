<script>
import EditSection from './edit/EditSection.svelte';
import EditPage from './edit/EditPage.svelte';
import ResetAll from './element/ResetAll.svelte';
import { editingId } from '../stores/app.js';

$: title = $editingId === null ? 'ページの編集' : 'セクションの編集';
</script>

<!--
<ResetAll/>
-->

<h2>{title}</h2>

<div>
    {#if $editingId === null}
        <EditPage/>
    {:else}
        <EditSection/>
    {/if}
</div>

<style lang="stylus">
h2
    padding: .75rem 1.5rem
    font-size: 1rem
    font-weight: 600
    text-align: left
    color: #242424
    color: #149794
    background-color: #ffffff
    box-shadow: 0px 0px 4px rgba(#000000, .1)

div
    padding: 1.5rem
</style>
