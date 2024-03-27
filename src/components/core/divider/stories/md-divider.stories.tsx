import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdDivider, MdDividerProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Divider/Divider',
    component: MdDivider,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        inset: {
            control: 'boolean',
            defaultValue: false,
            description: 'Indents the divider with equal padding on both sides.',
        },
        insetStart: {
            control: 'boolean',
            defaultValue: false,
            description: 'Indents the divider with padding on the leading side.',
        },
        insetEnd: {
            control: 'boolean',
            defaultValue: false,
            description: 'Indents the divider with padding on the trailing side.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdDividerProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <div style={{ width: '400px' }}>
            <MdDivider />
        </div>
    ),
}
