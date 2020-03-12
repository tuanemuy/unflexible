<script>
import EditComponent from './EditComponent.svelte';
import AddComponent from '../element/AddComponent.svelte';
import { componentsSections } from '../../stores/dom/componentsSections.js';

export let sectionId;
</script>

<label>コンポーネント</label>

{#each $componentsSections.filter(r => r.sectionId === sectionId) as relation}
    <EditComponent {sectionId} id={relation.componentId}/>
{/each}

<AddComponent {sectionId}/>
