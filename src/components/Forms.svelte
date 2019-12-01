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
import { order } from '../stores/editing.js';

export let forms = [];
export let target;

function props(form) {
    return {
        target,
        name: form.fieldName,
        key: form.fieldSlug,
        option: form.option || {}
    }
}
</script>

<div class="form">

{#each forms as form}
    {#if form.fieldType === 'checkbox'}
        <CheckboxInput {...props(form)}/>
    {:else if form.fieldType === 'color'}
        <ColorInput {...props(form)}/>
    {:else if form.fieldType === 'flex-align'}
        <FlexAlignInput {...props(form)}/>
    {:else if form.fieldType === 'image'}
        <ImageInput {...props(form)}/>
    {:else if form.fieldType === 'number'}
        <NumberInput {...props(form)}/>
    {:else if form.fieldType === 'px'}
        <NumberInput {...props(form)} unit="px"/>
    {:else if form.fieldType === 'rem'}
        <NumberInput {...props(form)} unit="rem"/>
    {:else if form.fieldType === 'percent'}
        <NumberInput {...props(form)} unit="%"/>
    {:else if form.fieldType === 'select'}
        <SelectInput {...props(form)}/>
    {:else if form.fieldType === 'text-align'}
        <TextAlignInput {...props(form)}/>
    {:else if form.fieldType === 'textarea'}
        <TextareaInput {...props(form)}/>
    {:else if form.fieldType === 'text'}
        <TextInput {...props(form)}/>
    {:else if form.fieldType === 'template'}
        <TemplateInput {...props(form)}/>
    {/if}
{/each}

</div>
