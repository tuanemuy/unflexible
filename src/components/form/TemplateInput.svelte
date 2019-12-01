<script>
import TL from '../../lib/templateLoader.js';

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

let templateName;
$: (async (store) => {
    const template = await TL.template(store[id][key]).catch(() => ({ name: '', html: '' }));
    templateName = template.name;
})($targetStore);
</script>

<label>{name}</label>
<div class="group">
    <input bind:value={$targetStore[id][key]}>
    <p class="note">{templateName}</p>
</div>
