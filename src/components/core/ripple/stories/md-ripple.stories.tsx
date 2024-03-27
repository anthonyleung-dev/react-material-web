import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdRipple, MdRippleProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Ripple/Ripple',
    component: MdRipple,
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
            description: 'Whether or not the ripple is disabled.',
        },
        htmlFor: {
            control: 'text',
            defaultValue: 'cats',
            description: 'The id of the element that the ripple is for.',
        },
        control: {
            control: 'object',
            defaultValue: 'cats',
            description: 'The control element for the ripple.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdRippleProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <div
            style={{
                width: '64px',
                height: '64px',
                position: 'relative',
                cursor: 'pointer',
                border: '1px solid',
                borderRadius: '16px',
            }}
        >
            <MdRipple />
        </div>
    ),
}
