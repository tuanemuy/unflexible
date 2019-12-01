<script>
import Data from '../stores/data.js';
import { components, componentOrder, componentsSections, params, paramOrder, paramsComponents } from '../stores/data.js';

export let componentId;

function handleClick() {
    Data.removeList(components, componentOrder, componentId);

    const paramIds = $paramsComponents
        .filter(r => r.componentId === componentId)
        .map(r => r.paramId);
    for(const paramId of paramIds) Data.removeList(params, paramOrder, paramId);

    paramsComponents.update(r => r.filter(v => v.componentId !== componentId))
    componentsSections.update(r => r.filter(v => v.componentId !== componentId));
}
</script>

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

<button on:click={handleClick}>×</button>
