<script>
import Component from './Component.svelte';
import { getHeading } from '../stores/dom.js';
import { headingsSections } from '../stores/dom/headingsSections.js';
import { components } from '../stores/dom/component.js';

export let sectionId;
let id;

$: heading = getHeading(id, $components);

$: {
    const relation = $headingsSections.find(r => r.sectionId === sectionId);
    id = relation ? relation.headingId : null;
}
</script>

{#if typeof heading !== 'undefined' && heading.show}
    <div class="heading" style="margin-bottom: {heading.bottomMargin}rem">
        <Component
            id={'heading_' + id}
            componentId={id}
            templateUrl={heading.templateUrl}
        />
    </div>
{/if}

<style lang="stylus">
.heading
    position: relative
    z-index: 5
    overflow: hidden
    background-size: cover
    background-position: 50% 50%
</style>
