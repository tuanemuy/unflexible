<script>
import EditComponent from './EditComponent.svelte';
import AddComponent from '../AddComponent.svelte';
import { componentsSections } from '../../stores/data.js';

export let sectionId;
</script>

<label>コンポーネント</label>

{#each $componentsSections.filter(r => r.sectionId === sectionId) as relation}
    <EditComponent {sectionId} id={relation.componentId}/>
{/each}

<AddComponent {sectionId}/>
