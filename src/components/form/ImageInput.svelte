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

<label for="">{name}</label>
<div class="group">
    <input bind:value={$targetStore[id][key]}>
</div>
