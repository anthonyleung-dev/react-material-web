import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdBrandedFab, MdBrandedFabProps } from '..'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Fab/Braned Fab',
    component: MdBrandedFab,
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
            defaultValue: '',
            description: 'The size of the FAB. NOTE: Branded FABs cannot be sized to small, and Extended FABs do not have different sizes. It can be set to "small", "medium" (default), or "large".',
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
} satisfies Meta<MdBrandedFabProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        label: 'FAB',
    },
    render: ({  ...props }) => (
        <MdBrandedFab {...props}>
            <MdIcon slot="icon">add</MdIcon>
        </MdBrandedFab>
    ),
}
