import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdRadio, MdRadioProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Radio/Radio',
    component: MdRadio,
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
            description: 'Whether or not the radio is disabled.',
        },
        value: {
            control: 'text',
            defaultValue: 'cats',
            description: 'The value of the radio.',
        },
        checked: {
            control: 'boolean',
            defaultValue: true,
            description: 'Whether or not the radio is checked.',
        },
        name: {
            control: 'text',
            defaultValue: 'radio',
            description: 'The name of the radio.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdRadioProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        value: 'cats',
    },
    render: ({ ...args }) => (
        <form>
            <MdRadio {...args} />
        </form>
    ),
}
export const MultipleRadios: Story = {
    args: {},
    render: () => (
        <form style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MdRadio id="cats-radio" name="radio" value="cats" touch-target="wrapper" />
                <label htmlFor="cats-radio">Cats</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MdRadio id="dogs-radio" name="radio" value="dogs" touch-target="wrapper" />
                <label htmlFor="dogs-radio">Dogs</label>
            </div>
        </form>
    ),
}
