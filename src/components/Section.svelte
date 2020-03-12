<script>
import Heading from './Heading.svelte';
import Columns from './Columns.svelte';
import SelectSection from './element/SelectSection.svelte';
import { getSection } from '../stores/dom.js';
import { sections } from '../stores/dom/section.js';

export let id;
$: section = getSection(id, $sections);
</script>

{#if typeof section !== 'undefined'}
    {#if !section.isTitle}
        <section
            id={'section_' + id}
            class="section section__{section.type}"
            style="background-image: url({section.backgroundUrl});background-color: {section.backgroundColor}"
        >
            <div class="wrap wrap__{section.wrap}">
                <Heading sectionId={id}/>
                <Columns sectionId={id} {...section}/>
            </div>
            <div class="select">
                <SelectSection {id}/>
            </div>
        </section>
    {:else}
        <div
            id="section__{id}"
            class="section section__{section.type}"
            style="background-image: url({section.backgroundUrl});background-color: {section.backgroundColor}"
        >
            <div class="wrap wrap__{section.wrap}">
                <Heading sectionId={id}/>
                <Columns sectionId={id} {...section}/>
            </div>
            <div class="select">
                <SelectSection {id}/>
            </div>
        </div>
    {/if}
{/if}

<style lang="stylus">
.section
    position: relative
    z-index: 5
    padding: 6rem 0
    overflow: visible
    background-size: cover
    background-position: 50% 50%
    background-blend-mode: overlay

    &__wide
        padding: 9rem 0

    &__narrow
        padding: 3rem 0

    &__gapless
        padding 0

    .wrap
        z-index: 5

    .select
        position: absolute
        z-index: 500
        top: 50%
        right: 1.5rem
        transform: translateY(-100%)
</style>
