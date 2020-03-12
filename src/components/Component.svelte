<script>
import TL from '../lib/templateLoader.js';
import { getParameter } from '../stores/dom.js';
import { parameters } from '../stores/dom/parameter.js';
import { parametersComponents } from '../stores/dom/parametersComponents.js';

export let templateUrl;
export let componentId;
let id;

$: parameter = getParameter(id, $parameters);

$: {
    const relation = $parametersComponents.find(r => r.componentId === componentId);
    id = relation ? relation.parameterId : null;
}
</script>

{#if typeof parameter !== 'undefined'}
    {#await TL.instantiate('component_' + id, templateUrl, parameter) then html}
        {@html html}
    {:catch}
        <p>読み込みエラー</p>
    {/await}
{/if}
