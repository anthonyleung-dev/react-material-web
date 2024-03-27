import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdCircularProgress, MdCircularProgressProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Progress/Circular Progress',
    component: MdCircularProgress,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        value: {
            control: 'number',
            defaultValue: 0,
            description: 'Progress to display, a fraction between 0 and `max`.',
        },
        max: {
            control: 'number',
            defaultValue: 1,
            description: 'Maximum progress to display, defaults to 1.',
        },
        indeterminate: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.',
        },
        fourColor: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not to render indeterminate mode using 4 colors instead of one.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdCircularProgressProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        max: 1,
        indeterminate: true,
    },
}

export const Determinate: Story = {
    args: {
        value: 0.5,
        max: 1,
    },
}

export const FourColor: Story = {
    args: {
        indeterminate: true,
        fourColor: true,
    },
}
