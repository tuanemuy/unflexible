<script>
export let name;
export let targetStore;
export let id;
export let key;
export let defaultValue;
export let options;

if(typeof $targetStore[id][key] === 'undefined') {
    targetStore.update(v => {
        v[id][key] = defaultValue;
        return v;
    });
}
</script>

<label>{name}</label>
<div class="group">
    <select bind:value={$targetStore[id][key]}>
        {#each options as [ n, v ]}
            <option value={v}>{n}</option>
        {/each}
    </select>
</div>
