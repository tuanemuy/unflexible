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
        <option value="flex-start">左寄せ</option>
        <option value="center">中央寄せ</option>
        <option value="flex-end">右寄せ</option>
        <option value="space-between">両端揃え</option>
        <option value="space-around">均等配置</option>
    </select>
</div>
