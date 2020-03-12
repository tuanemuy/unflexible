<script>
import Input from '../Input.svelte';
import EditParameter from './EditParameter.svelte';
import TL from '../../lib/templateLoader.js';
import Types from '../../lib/types.js';
import { getHeading, createHeading } from '../../stores/dom.js';
import { components, componentOrder } from '../../stores/dom/component.js';
import { headingsSections } from '../../stores/dom/headingsSections.js';

export let sectionId;

$: heading = getHeading(id ,$components);
$: id = ensureExisting(sectionId, $headingsSections, $componentOrder);

function ensureExisting(targetId, relations, orderList) {
    const relation = relations.find(r => r.sectionId === targetId);
    if(!relation) {
        return createHeading(targetId, orderList);
    } else {
        return relation.headingId;
    }
}
</script>

<style lang="stylus">
.component
    margin-top: 1rem
    padding: 1rem 1rem
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1);
</style>

<label>見出し</label>
{#if typeof heading !== 'undefined'}
    <div class="component">
        <Input
            type="checkbox"
            name="表示"
            targetStore={components}
            {id}
            key="show"
            defaultValue="true"
        />

        {#if heading.show}
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

            <EditParameter
                templateUrl={heading.templateUrl}
                componentId={id}
            />
        {/if}
    </div>
{/if}
