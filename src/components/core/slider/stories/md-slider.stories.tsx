import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdSlider, MdSliderProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Slider/Slider',
    component: MdSlider,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the slider is disabled.',
        },
        min: {
            control: 'number',
            defaultValue: 0,
            description: 'The slider minimum value',
        },
        max: {
            control: 'number',
            defaultValue: 100,
            description: 'The slider maximum value',
        },
        value: {
            control: 'number',
            defaultValue: undefined,
            description: 'The slider value displayed when range is false.',
        },
        valueStart: {
            control: 'number',
            defaultValue: undefined,
            description: 'The slider start value displayed when range is true.',
        },
        valueEnd: {
            control: 'number',
            defaultValue: undefined,
            description: 'The slider end value displayed when range is true.',
        },
        valueLabel: {
            control: 'text',
            defaultValue: '',
            description:
                "An optional label for the slider's value displayed when range is false; if not set, the label is the value itself.",
        },
        valueLabelStart: {
            control: 'text',
            defaultValue: '',
            description:
                "An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself.",
        },
        valueLabelEnd: {
            control: 'text',
            defaultValue: '',
            description:
                "An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself.",
        },
        ariaLabelStart: {
            control: 'text',
            defaultValue: '',
            description: "Aria label for the slider's start handle displayed when range is true.",
        },
        ariaValueTextStart: {
            control: 'text',
            defaultValue: '',
            description: "Aria value text for the slider's start value displayed when range is true.",
        },
        ariaLabelEnd: {
            control: 'text',
            defaultValue: '',
            description: "Aria label for the slider's end handle displayed when range is true.",
        },
        ariaValueTextEnd: {
            control: 'text',
            defaultValue: '',
            description: "Aria value text for the slider's end value displayed when range is true.",
        },
        step: {
            control: 'number',
            defaultValue: 1,
            description: 'The step between values.',
        },
        ticks: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not to show tick marks.',
        },
        labeled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not to show a value label when activated.',
        },
        range: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Whether or not to show a value range. When false, the slider displays a slideable handle for the value property; when true, it displays slideable handles for the valueStart and valueEnd properties.',
        },
        name: {
            control: 'text',
            defaultValue: undefined,
        },
        nameStart: {
            control: 'text',
            defaultValue: undefined,
        },
        nameEnd: {
            control: 'text',
            defaultValue: undefined,
        },
        form: {
            control: 'object',
            defaultValue: undefined,
        },
        labels: {
            control: 'object',
            defaultValue: undefined,
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdSliderProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
}
