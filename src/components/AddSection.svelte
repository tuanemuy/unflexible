<script>
import Types from '../lib/types.js';
import Data from '../stores/data.js';
import { sections, sectionOrder, lastSectionId } from '../stores/data.js';
import { editingId } from '../stores/editing.js';

function handleClick() {
    const id = Data.addList(sections, sectionOrder, lastSectionId, $lastSectionId, Types.section());
    editingId.set(id);
}
</script>

<style lang="stylus">
.add-section
    width: 100%
    padding: 1.5rem 0
    transition-duration: .3s

    &:focus
        outline: none

    &:hover
        box-shadow: 0px 0px 4px rgba(#000000, .1) inset

        div
            transform: scale(.98)

div
    transition-duration: .3s

img
    display: block
    margin: 0 auto
    height: 160px

span
    display: block
    text-align: center
    margin-top: 1rem
    font-size: 1rem
</style>

<button on:click={handleClick} class="add-section">
    <div>
        <img src="great-success.png" alt="セクションを追加">
        <span>クリックしてセクションを追加</span>
    </div>
</button>
