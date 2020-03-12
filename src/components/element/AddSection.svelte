<script>
import { createSection } from '../../stores/dom.js';
import { sectionOrder } from '../../stores/dom/section.js';
import { editingId } from '../../stores/app.js';

function handleClick() {
    const id = createSection($sectionOrder);
    editingId.set(id);
}
</script>

<button on:click={handleClick}>
    <div>
        <img src="great-success.png" alt="セクションを追加">
        <span>クリックしてセクションを追加</span>
    </div>
</button>

<style lang="stylus">
button
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
