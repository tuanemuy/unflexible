<script>
import { resetAll } from '../../stores/dom.js';
import { editingId } from '../../stores/app.js';

function handleClick() {
    editingId.set(null);
    resetAll();
}
</script>

<button on:click={handleClick}>RESET</button>

<style lang="stylus">
button
    position: relative
    z-index: 5
</style>
