<script>
import CheckboxInput from './form/CheckboxInput.svelte';
import ColorInput from './form/ColorInput.svelte';
import FlexAlignInput from './form/FlexAlignInput.svelte';
import ImageInput from './form/ImageInput.svelte';
import NumberInput from './form/NumberInput.svelte';
import SelectInput from './form/SelectInput.svelte';
import TextAlignInput from './form/TextAlignInput.svelte';
import TextInput from './form/TextInput.svelte';
import TextareaInput from './form/TextareaInput.svelte';
import TemplateInput from './form/TemplateInput.svelte';

export let type;
export let name;
export let targetStore;
export let id;
export let key;
export let defaultValue;
export let option;
let show = true;

$: props = Object.assign({ name, targetStore, id, key, defaultValue }, option);

$: ((i) => {
    show = false;
    setTimeout(() => show = true, 0);
})(id);
// idが変わった時に再描画しないとColorInputが上手く動かない

function withNumberOption(unit, step, min, max) {
    props.unit = unit;
    props.step = step;
    props.min = min;
    props.max = max;
    return props;
}
</script>

{#if show}
    {#if type === 'checkbox'}
        <CheckboxInput {...props}/>
    {:else if type === 'color'}
        <ColorInput {...props}/>
    {:else if type === 'flex-align'}
        <FlexAlignInput {...props}/>
    {:else if type === 'image'}
        <ImageInput {...props}/>
    {:else if type === 'number'}
        <NumberInput {...props}/>
    {:else if type === 'px'}
        <NumberInput {...withNumberOption('px', 1, '', '')}/>
    {:else if type === 'rem'}
        <NumberInput {...withNumberOption('rem', .1, '', '')}/>
    {:else if type === 'percent'}
        <NumberInput {...withNumberOption('%', 1, 0, 100)}/>
    {:else if type === 'select'}
        <SelectInput {...props}/>
    {:else if type === 'text-align'}
        <TextAlignInput {...props}/>
    {:else if type === 'textarea'}
        <TextareaInput {...props}/>
    {:else if type === 'text'}
        <TextInput {...props}/>
    {:else if type === 'template'}
        <TemplateInput {...props}/>
    {/if}
{/if}
