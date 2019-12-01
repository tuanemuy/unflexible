<script>
import Preview from '../../components/Preview.svelte'
import Edit from '../../components/Edit.svelte'
</script>

<style lang="stylus">
.edit
    position: fixed
    width: 360px
    height: 100vh
    background-color: #ffffff
    overflow: scroll
    box-shadow: 0px 0px 4px rgba(#000000, .1)

.preview
    margin-left: 360px
    width: calc(100vw - 360px)
    overflow-x: scroll
</style>

<svelte:head>
    <title>ホームページエディター | Stacked</title>
    <meta name="description" content="いちばん簡単なホームページ制作">
</svelte:head>

<div class="edit">
    <Edit/>
</div>

<div class="preview">
    <Preview/>
</div>
