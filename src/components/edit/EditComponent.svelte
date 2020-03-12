<script>
import Input from '../Input.svelte';
import EditParameter from './EditParameter.svelte';
import RemoveComponent from '../element/RemoveComponent.svelte';
import TL from '../../lib/templateLoader.js';
import { getComponent } from '../../stores/dom.js';
import { components } from '../../stores/dom/component.js';

export let id;

$: component = getComponent(id, $components);
</script>

{#if typeof component !== 'undefined'}
    <div class="component">
        <Input
            type="template"
            name="テンプレートURL"
            targetStore={components}
            {id}
            key="templateUrl"
            defaultValue=""
        />

        <EditParameter
            templateUrl={component.templateUrl}
            componentId={id}
        />

        <RemoveComponent componentId={id}/>
    </div>
{/if}

<style lang="stylus">
.component
    position: relative
    z-index: 5
    margin-top: 1rem
    padding: 1rem 1rem
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
</style>
