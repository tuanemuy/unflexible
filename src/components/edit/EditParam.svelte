<script>
import Input from '../Input.svelte';
import EditParam from './EditParam';
import TL from '../../lib/templateLoader.js';
import Types from '../../lib/types.js';
import Data from '../../stores/data.js';
import { params, paramOrder, components, lastParamId, paramsComponents } from '../../stores/data.js';

export let componentId;
export let templateUrl;
let id;
let show = false;

$: {
    const relation = $paramsComponents.find(r => r.componentId === componentId);
    if(!relation) {
        id = Data.addList(params, paramOrder, lastParamId, $lastParamId, {});
        paramsComponents.update(r => [...r, Types.relation('component', componentId, 'param', id)]);
    } else {
        id = relation.paramId;
    }
}
</script>

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

<div class="header">
    <label>詳細設定</label>
    <button on:click={() => show = !show}>{show ? '−' : '＋'}</button>
</div>

{#if show && id}
    {#await TL.forms(templateUrl) then forms}
        {#each forms as form (form)}
            <Input
                type={form.fieldType}
                name={form.fieldName}
                targetStore={params}
                {id}
                key={form.fieldSlug}
                defaultValue={form.defaultValue}
            />
        {/each}
    {:catch}
    {/await}
{/if}
