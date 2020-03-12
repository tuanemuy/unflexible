<script>
import { createComponent } from '../../stores/dom.js';
import { componentOrder } from '../../stores/dom/component.js';

export let sectionId;
</script>

<button on:click="{() => { createComponent(sectionId, $componentOrder) }}">コンポーネントを追加</button>

<style lang="stylus">
button
    position: relative
    z-index: 5
    margin-top: 1rem
    padding: 1rem 0
    width: 100%
    text-align: center
    border-radius: 5px
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
    transition-duration: .3s

    &:hover
        color: #ffffff
        background-color: #149497

    &:focus
        outline: none
</style>
