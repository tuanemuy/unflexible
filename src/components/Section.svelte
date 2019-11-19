<template lang="pug">
section(
    id="{id}"
    class="section section__{type}"
    style="background-url: url({background_url});background-color: {background_color}"
)
    div(class="wrap wrap__{wrap}")
        ul(class="columns columns__{align}")
            +each('components as component, index')
                li(
                    id="{id}_{index}"
                    class="column column__{columns}"
                ) {@html instantiate(component) }
</template>

<script>
export let id;
export let type;
export let wrap;
export let align;
export let columns;
export let background_url;
export let background_color;
export let components;

export function instantiate(component) {
    return inject(component.code, component.params);
}

function inject(code, params) {
    return code.replace(/{{.*}}/, match => toParam(match, params));
}

function toParam(match, params) {
    const field = toField(match);
    return params[field.fieldName] | ''
}

function toField(match) {
    const [field='', fieldName='', fieldType='', defaultValue=''] =
        match
        .replace(/[ |{|}]/, '')
        .match(/^([a-z]+.*):(.+)=(.+)$/);

    return {
        fieldName,
        fieldType,
        defaultValue
    }
}
</script>

<style lang="stylus">
.section
    position: relative
    z-index: 5
    padding: 90px 0
    overflow: hidden
    background-size: cover
    background-position: 50% 50%

    &__narrow
        padding: 45px 0

    &__gapless
        padding 0
</style>
