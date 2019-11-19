<script context="module">
export async function preload({ params, query }) {
    const res = await this.fetch(`editor.json`);
    const data = await res.json();

    if(res.status === 200) {
        return { mock: data };
    } else {
        this.error(res.status, data.message);
    }
}
</script>

<script>
import { stores } from '@sapper/app'
import Eyecatch from '../../components/Eyecatch.svelte'
import Section from '../../components/Section.svelte'

const { session } = stores();

export let mock;
</script>

<style>
.editor {
    position: relative;
    z-index: 5;
}
</style>

<svelte:head>
    <title>Rustic Editor</title>
</svelte:head>

{#if mock}
    <div class="editor">
        <Eyecatch />
        <h1>{mock.title}</h1>
        <main>
            {#each mock.sections as section, index}
                <Section {...section}/>
            {/each}
        </main>
    </div>
{/if}
