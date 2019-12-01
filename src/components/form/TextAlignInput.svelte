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

<label>{name}</label>
<div class="group">
    <select bind:value={$targetStore[id][key]}>
        <option value="left">左寄せ</option>
        <option value="center">中央寄せ</option>
        <option value="right">右寄せ</option>
    </select>
</div>
