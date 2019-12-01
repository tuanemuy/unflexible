<script>
import Eyecatch from './Eyecatch.svelte';
import Section from './Section.svelte';
import AddSection from './AddSection.svelte';
import Data from '../stores/data.js';
import { sectionOrder } from '../stores/data.js';
</script>

<main>
    {#each $sectionOrder as id (id)}
        <Section id={'id_' + id}/>
    {/each}
</main>

<AddSection/>
