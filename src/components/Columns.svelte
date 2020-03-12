<script>
import Column from './Column.svelte';
import { componentsSections } from '../stores/dom/componentsSections.js';

export let sectionId;
export let align;
export let columns;
export let columnsPadding;

$: ids = $componentsSections
    .filter(r => r.sectionId === sectionId)
    .map(r => r.componentId);
</script>

<ul class="columns columns__{align || 'center'}">
    {#each ids as id (id)}
        <Column {id} {columns} {columnsPadding}/>
    {/each}
</ul>

<style lang="stylus">
.columns
    position: relative
    z-index: 5
    display: flex
    flex-wrap: wrap
    list-style: none

    &__flex-start
        justify-content: flex-start

    &__center
        justify-content: center

    &__flex-end
        justify-content: flex-end

    &__space-between
        justify-content: space-between

    &__space-around
        justify-content: space-around
</style>
