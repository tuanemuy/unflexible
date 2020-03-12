<script>
import Component from './Component.svelte';
import { getComponent } from '../stores/dom.js';
import { components } from '../stores/dom/component.js';

export let id;
export let columns;
export let columnsPadding;

$: component = getComponent(id, $components);
</script>

{#if typeof component !== 'undefined'}
    <li class="item item__{columns || 1}" style="padding: {columnsPadding}rem">
        <Component
            id={'component_' + id}
            componentId={id}
            templateUrl={component.templateUrl}
        />
    </li>
{/if}

<style lang="stylus">
.item
    position: relative
    z-index: 5

    for num in (1..6)
        &__{num}
            width: (100/num)%

@media only screen and (max-width: 768px)
    .item
        for num in (1..3)
            &__{num}
                width: 100%

        for num in (4..6)
            &__{num}
                width: 50%
</style>
