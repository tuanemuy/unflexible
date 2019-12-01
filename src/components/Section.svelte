<script>
import Template from './Template.svelte';
import Heading from './Heading.svelte';
import Components from './Components.svelte';
import SelectSection from './SelectSection.svelte';
import { sections } from '../stores/data.js';

export let id;
$: section = $sections[id];
</script>

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

{#if !section.isTitle}
    <section
        {id}
        class="section section__{section.type}"
        style="background-image: url({section.backgroundUrl});background-color: {section.backgroundColor}"
    >
        <div class="wrap wrap__{section.wrap}">
            <Heading sectionId={id}/>
            <Components sectionId={id} {...section}/>
        </div>
        <div class="select">
            <SelectSection target={id}/>
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
            <Components sectionId={id} {...section}/>
        </div>
        <div class="select">
            <SelectSection target={id}/>
        </div>
    </div>
{/if}
