<script>
import Input from '../Input.svelte';
import EditComponent from './EditComponent.svelte';
import EditComponents from './EditComponents.svelte';
import EditHeading from './EditHeading.svelte';
import RemoveSection from '../element/RemoveSection.svelte';
import TL from '../../lib/templateLoader.js';
import { editingId } from '../../stores/app.js';
import { sections } from '../../stores/dom/section.js';
import { getSection } from '../../stores/dom.js';

if(typeof getSection($editingId, $sections) === 'undefined') editingId.set(null);

const forms = [
    {
        fieldName: '上下余白',
        fieldSlug: 'type',
        fieldType: 'select',
        defaultValue: 'normal',
        option: {
            options: [
                [ '大', 'wide' ],
                [ '中', 'normal' ],
                [ '小', 'narrow' ],
                [ 'なし', 'gapless' ]
            ]
        }
    },
    {
        fieldName: '幅',
        fieldSlug: 'wrap',
        fieldType: 'select',
        defaultValue: 'wrapped',
        option: {
            options: [
                [ '固定', 'wrapped' ],
                [ '全幅', 'full' ]
            ]
        }
    },
    {
        fieldName: '位置揃え',
        fieldSlug: 'align',
        fieldType: 'flex-align',
        defaultValue: 'center'
    },
    {
        fieldName: 'カラム数',
        fieldSlug: 'columns',
        fieldType: 'number',
        defaultValue: 1,
        option: {
            min: 1,
            max: 6
        }
    },
    {
        fieldName: 'カラム間隔',
        fieldSlug: 'columnsPadding',
        fieldType: 'number',
        defaultValue: .5,
        option: {
            min: 0,
            max: '',
            unit: 'rem',
            step: .1
        }
    },
    {
        fieldName: '背景画像',
        fieldSlug: 'backgroundUrl',
        fieldType: 'text',
        defaultValue: ''
    },
    {
        fieldName: '背景色',
        fieldSlug: 'backgroundColor',
        fieldType: 'color',
        defaultValue: 'rgba(0, 0, 0, 0)'
    }
];
</script>

<div class="form">
    {#each forms as form (form)}
        <Input
            type={form.fieldType}
            name={form.fieldName}
            targetStore={sections}
            id={$editingId}
            key={form.fieldSlug}
            defaultValue={form.defaultValue}
            option={form.option}
        />
    {/each}

    <hr>

    <EditHeading sectionId={$editingId}/>

    <hr>

    <EditComponents sectionId={$editingId}/>

    <hr>

    <RemoveSection sectionId={$editingId}/>
</div>
