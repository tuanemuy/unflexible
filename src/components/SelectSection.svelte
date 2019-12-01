<script>
import { editingId } from '../stores/editing.js';
export let target;
$: display = target.split('_').slice(-1);

function handleClick() {
    editingId.set(target);
}
</script>

<style lang="stylus">
button
    display: flex
    align-items: center
    justify-content: center
    width: 40px
    height: 40px
    color: #149794
    background-color: #ffffff
    border-radius: 50%
    font-size: 1.2rem
    font-weight: 500
    box-shadow: 0px 0px 4px rgba(#000000, .1)
    transition-duration: .3s

    &:hover
        color: #ffffff
        background-color: #149794

    &:focus
        outline: none

.selected
        color: #ffffff
        background-color: #149794
</style>

<button on:click={handleClick} class="{ target == $editingId ? 'selected' : '' }">
    {display}
</button>
