<script>
import Input from '../Input.svelte';
import EditParam from './EditParam.svelte';
import TL from '../../lib/templateLoader.js';
import Types from '../../lib/types.js';
import Data from '../../stores/data.js';
import { components, componentOrder, lastComponentId, headingsSections } from '../../stores/data.js';

export let sectionId;
let id;

$: {
    const relation = $headingsSections.find(r => r.sectionId === sectionId);
    if(relation) {
        id = relation.headingId;
    } else {
        const addedId = Data.addList(components, componentOrder, lastComponentId, $lastComponentId, Types.component());
        headingsSections.update(r => [...r, Types.relation('section', sectionId, 'heading', addedId)]);
    }
};
</script>

<style lang="stylus">
.component
    margin-top: 1rem
    padding: 1rem 1rem
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1);
</style>

<label>見出し</label>
{#if $components[id]}
    <div class="component">
        <Input
            type="checkbox"
            name="表示"
            targetStore={components}
            {id}
            key="show"
            defaultValue="true"
        />

        {#if $components[id].show}
            <Input
                type="number"
                name="コンポーネントとの間隔"
                targetStore={components}
                {id}
                key="bottomMargin"
                defaultValue="1.5"
                option={{ unit: 'rem', step: '.1'}}
            />

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
        {/if}
    </div>
{/if}
