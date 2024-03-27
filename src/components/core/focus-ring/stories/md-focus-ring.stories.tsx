import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdFocusRing, MdFocusRingProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Focus Ring/Focus Ring',
    component: MdFocusRing,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        visible: {
            control: 'boolean',
            defaultValue: false,
            description: 'Makes the focus ring visible.',
        },
        inward: {
            control: 'boolean',
            defaultValue: false,
            description: 'Makes the focus ring animate inwards instead of outwards.',
        },
        htmlFor: {
            control: 'text',
            description: 'The id of the input element that the focus ring should be associated with.',
        },
        control: {
            control: 'object',
            description: 'The input element that the focus ring should be associated with.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdFocusRingProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <button style={{ position: 'relative' }}>
            <MdFocusRing />
            Click me
        </button>
    ),
}
