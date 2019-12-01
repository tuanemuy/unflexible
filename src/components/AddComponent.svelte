<script>
import Types from '../lib/types.js';
import Data from '../stores/data.js';
import { components, componentsSections, componentOrder, lastComponentId } from '../stores/data.js';

export let sectionId;

function handleClick() {
    const id = Data.addList(components, componentOrder, lastComponentId, $lastComponentId, Types.component());
    componentsSections.update(r => [...r, Types.relation('section', sectionId, 'component', id)]);
}
</script>

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

<button on:click={handleClick}>コンポーネントを追加</button>
