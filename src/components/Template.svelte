<script>
import TL from '../lib/templateLoader.js';
import { params, paramsComponents } from '../stores/data.js';

export let templateUrl;
export let componentId;
let id;

$: {
    const relation = $paramsComponents.find(r => r.componentId === componentId);
    id = relation ? relation.paramId : null;
}
</script>

{#if id}
    {#await TL.instantiate('component_' + id, templateUrl, $params[id]) then html}
        {@html html}
    {:catch}
        <p>読み込みエラー</p>
    {/await}
{/if}
