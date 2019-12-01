<script>
import Template from './Template.svelte';

export let wrap;
export let align;
export let background_url;
export let background_color;
export let url;
export let params;
</script>

<style lang="stylus">
.eyecatch
    position: relative
    z-index: 5
    overflow: hidden
    background-size: cover
    background-position: 50% 50%
    background-blend-mode: overlay

    .wrap
        display: flex
</style>

<div
    id="eyecatch"
    class="eyecatch"
    style="background-image: url({background_url});background-color: {background_color}"
>
    <div class="wrap wrap__{wrap}" style="justify-content: {align}">
        <Template {url} {params}/>
    </div>
</div>
