import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdAssistChip, MdAssistChipProps } from '..'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Chips/Assist Chip',
    component: MdAssistChip,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        elevated: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the chip is elevated.',
        },
        href: {
            control: 'text',
            description: 'The URL that the chip links to.',
        },
        target: {
            control: 'text',
            description: 'The target of the link.(e.g. _blank, _self, _parent, _top',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Whether or not the chip is disabled. Disabled chips are not focusable, unless always-focusable is set.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdAssistChipProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: (props) => <MdAssistChip {...props}>Assist Chip</MdAssistChip>,
}

export const WithIcon: Story = {
    render: (props) => (
        <MdAssistChip {...props}>
            <MdIcon slot="icon">local_laundry_service</MdIcon>
            Assist Chip
        </MdAssistChip>
    ),
}
