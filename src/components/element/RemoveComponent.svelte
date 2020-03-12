<script>
import { deleteComponent } from '../../stores/dom.js';
import { parametersComponents } from '../../stores/dom/parametersComponents.js';

export let componentId;
</script>

<button on:click="{() => { deleteComponent(componentId, $parametersComponents) }}">×</button>

<style lang="stylus">
button
    position: absolute
    top: -10px
    right: -10px
    width: 24px
    height: 24px
    font-size: 1.1rem
    font-weight: 600
    line-height: 24px
    color: #ffffff
    background-color: #bbbbbb
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .1)
    border-radius: 50%
    transition-duration: .3s

    &:hover
        transform: scale(1.1)

    &:focus
        outline: none
</style>
