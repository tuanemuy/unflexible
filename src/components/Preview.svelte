<script>
import Section from './Section.svelte';
import AddSection from './element/AddSection.svelte';
import { sectionOrder } from '../stores/dom/section.js';
</script>

<main>
    {#each $sectionOrder as id (id)}
        <Section id={'id_' + id}/>
    {/each}
</main>

<AddSection/>
