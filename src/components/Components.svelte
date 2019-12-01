<script>
import Template from './Template.svelte';
import { components, componentsSections } from '../stores/data.js';

export let sectionId;
export let align;
export let columns;
export let columnsPadding;
let ids;

$: {
    ids = $componentsSections
        .filter(r => r.sectionId === sectionId)
        .map(r => r.componentId);
}
</script>

<ul class="columns columns__{align || 'center'}">
    {#each ids as id (id)}
        {#if $components[id]}
            <li class="columns--item columns--item__{columns || 1}" style="padding: {columnsPadding}rem">
                <Template
                    id={'component_' + id}
                    componentId={id}
                    templateUrl={$components[id].templateUrl}
                />
            </li>
        {/if}
    {/each}
</ul>
