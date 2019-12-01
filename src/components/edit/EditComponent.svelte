<script>
import Input from '../Input.svelte';
import EditParam from './EditParam.svelte';
import RemoveComponent from '../RemoveComponent.svelte';
import TL from '../../lib/templateLoader.js';
import Types from '../../lib/types.js';
import { components } from '../../stores/data.js';

export let sectionId;
export let id;
</script>

<style lang="stylus">
.component
    position: relative
    z-index: 5
    margin-top: 1rem
    padding: 1rem 1rem
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
</style>

{#if $components[id]}
    <div class="component">
        <Input
            type="template"
            name="テンプレートURL"
            targetStore={components}
            {id}
            key="templateUrl"
            defaultValue=""
        />

        <EditParam
            templateUrl={$components[id].templateUrl}
            componentId={id}
        />

        <RemoveComponent componentId={id}/>
    </div>
{/if}
