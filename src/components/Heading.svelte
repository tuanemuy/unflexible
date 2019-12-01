<script>
import Template from './Template.svelte';
import { components, headingsSections } from '../stores/data.js';

export let sectionId;
let id;

$: {
    const relation = $headingsSections.find(r => r.sectionId === sectionId);
    id = relation ? relation.headingId : null;
}
</script>

<style lang="stylus">
.heading
    position: relative
    z-index: 5
    overflow: hidden
    background-size: cover
    background-position: 50% 50%
</style>

{#if $components[id] && $components[id].show}
    <div class="heading" style="margin-bottom: {$components[id].bottomMargin}rem">
        <Template
            id={'heading_' + id}
            componentId={id}
            templateUrl={$components[id].templateUrl}
        />
    </div>
{/if}
