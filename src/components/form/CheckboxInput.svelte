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

<style lang="stylus">
.group
    position: relative
    width: 5.5rem
    height: 2.5rem

input
    position: relative
    z-index: 5
    display: block
    height: 100%
    opacity: 0
    cursor: pointer

span
    position: absolute
    z-index: 1
    background-color: #f3f3f3
    width: 100%
    height: 100%
    top: 0
    left: 0
    border-radius: 3.125rem
    transition: background-color .3s ease-in-out

    &::after
        content: ""
        display: block
        width: 1.875rem
        height: 1.875rem
        border-radius: 3.125rem
        position: absolute
        top: .3125rem
        z-index: 1
        left: .5rem
        background-color: #ffffff
        box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
        transition: left .3s ease-in-out

input[type="checkbox"]:checked
    ~ span
        background-color: #149794

    ~ span::after
        left: 3.125rem
</style>

<label>{name}</label>
<div class="group">
    <input type=checkbox bind:checked={$targetStore[id][key]}>
    <span></span>
</div>
