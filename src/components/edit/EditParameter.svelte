<script>
import Input from '../Input.svelte';
import TL from '../../lib/templateLoader.js';
import Types from '../../lib/types.js';
import { createParameter, getParameter } from '../../stores/dom.js';
import { parameters, parameterOrder } from '../../stores/dom/parameter.js';
import { parametersComponents } from '../../stores/dom/parametersComponents.js';

export let componentId;
export let templateUrl;
let id;
let show = false;

$: parameter = getParameter(id, $parameters)

$: {
    const relation = $parametersComponents.find(r => r.componentId === componentId);
    if(relation) {
        id = relation.parameterId;
    } else {
        createParameter(componentId, $parameterOrder);
    }
}
</script>

<div class="header">
    <label>詳細設定</label>
    <button on:click={() => show = !show}>{show ? '−' : '＋'}</button>
</div>

{#if show && typeof parameter !== 'undefined'}
    {#await TL.forms(templateUrl) then forms}
        {#each forms as form (form)}
            <Input
                type={form.fieldType}
                name={form.fieldName}
                targetStore={parameters}
                {id}
                key={form.fieldSlug}
                defaultValue={form.defaultValue}
            />
        {/each}
    {:catch}
    {/await}
{/if}

<style lang="stylus">
.header
    margin-top: 1.5rem
    display: flex
    align-items: center

    label, button
        font-size: .9rem
        font-weight: 600
        color: #bbbbbb
        line-height: 1.4

    button
        margin-left: .25rem
        width: 24px
        height: 24px
        line-height: 24px
        color: #ffffff
        box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
        background-color: #149497
        border-radius: 50%
        transition-duration: .3s

        &:hover
            transform: scale(1.1)

        &:focus
            outline: none
</style>
