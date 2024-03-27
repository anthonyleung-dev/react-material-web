import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdFab, MdFabProps } from '..'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Fab/Fab',
    component: MdFab,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['surface', 'primary', 'secondary', 'tertiary'],
            },
            defaultValue: 'surface',
            description: 'The FAB color variant to render.',
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
            defaultValue: 'medium',
            description:
                'The size of the FAB. NOTE: Branded FABs cannot be sized to small, and Extended FABs do not have different sizes. It can be set to "small", "medium" (default), or "large".',
        },
        label: {
            control: 'text',
            defaultValue: '',
            description: 'The text to display on the FAB.',
        },
        lowered: {
            control: 'boolean',
            defaultValue: false,
            description: "Lowers the FAB's elevation.",
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdFabProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Small: Story = {
    args: {
        size: 'small',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Medium: Story = {
    args: {
        size: 'medium',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Large: Story = {
    args: {
        size: 'large',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Surface: Story = {
    args: {
        variant: 'surface',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Primary: Story = {
    args: {
        variant: 'primary',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        // label: 'FAB',
    },
    render: ({ ...props }) => (
        <MdFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdFab>
    ),
}
