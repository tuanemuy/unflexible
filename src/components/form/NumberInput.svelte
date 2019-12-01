<script>
export let name;
export let targetStore;
export let id;
export let key;
export let defaultValue;
export let unit;
export let max;
export let min;
export let step;

if(typeof $targetStore[id][key] === 'undefined') {
    targetStore.update(v => {
        v[id][key] = defaultValue;
        return v;
    });
}
</script>

<style lang="stylus">
.line
    align-items: center

span
    width: 5rem
    text-align: center
    font-weight: 500
</style>

<label>{name}</label>
<div class="group">
    <div class="line">
        <input type=number bind:value={$targetStore[id][key]} max={max} min={min} step={step}>

        {#if unit}
            <span>{unit}</span>
        {/if}
    </div>
</div>
