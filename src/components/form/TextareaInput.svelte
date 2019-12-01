<script>
export let name;
export let targetStore;
export let id;
export let key;
export let defaultValue;

if(typeof $targetStore[id][key] === 'undefined') {
    targetStore.update(v => {
        v[id][key] = defaultValue;
        return v;
    });
}
</script>

<div class="group">
    <label>{name}</label>
    <textarea bind:value={$targetStore[id][key]}></textarea>
</div>
