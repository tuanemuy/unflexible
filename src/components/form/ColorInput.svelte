<script>
import Color from '../../lib/color.js';

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

let { hex, alpha } = Color.rgbaToHexAlpha($targetStore[id][key]);

$: {
    targetStore.update(s => {
        s[id][key] = Color.hexToRgba(hex, alpha);
        return s;
    });
};
</script>

<label for="">{name}</label>
<div class="group">
    <div class="line">
        <input type="text" bind:value={hex}>
        <input type="color" bind:value={hex}>
    </div>
    <div class="line">
        <input type="text" bind:value={alpha}>
        <input type="range" bind:value={alpha} min="0" max="1" step=".1">
    </div>
</div>

<style lang="stylus">
input[type="text"]
    width: 8em
    margin-right: .5rem

input[type="color"]
    display: block
    height: 2.5rem
    padding: 0
    border: none
    outline: none

input[type="range"]
    &:focus
        box-shadow: none
</style>
