import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdChipSet, MdInputChip, MdInputChipProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Chips/Input Chip',
    component: MdInputChip,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        avatar: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the chip has an avatar.',
        },
        href: {
            control: 'text',
            description: 'The URL that the chip links to.',
        },
        target: {
            control: 'text',
            description: 'The target of the link.(e.g. _blank, _self, _parent, _top',
        },
        removeOnly: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the chip is remove only.',
        },
        selected: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the chip is selected.',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Whether or not the chip is disabled. Disabled chips are not focusable, unless always-focusable is set.',
        },
        alwaysFocusable: {
            control: 'boolean',
            defaultValue: false,
            description:
                'When true, allow disabled chips to be focused with arrow keys. Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.',
        },
        label: {
            control: 'text',
            description: 'The label of the chip.',
            defaultValue: '',
        },
        ariaLabelRemove: {
            control: 'text',
            description: 'Aria label for the remove button.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        avatar: false,
    },
} satisfies Meta<MdInputChipProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        label: 'Input Chip',
    },
}

export const WithAvatar: Story = {
    args: {
        label: 'Input Chip with Avatar',
        avatar: true,
        disabled: false,
    },
    render: ({ ...args }) => (
        <MdChipSet>
            <MdInputChip {...args}>
                <img slot="icon" src="https://lh3.googleusercontent.com/a/default-user=s48" />
            </MdInputChip>
        </MdChipSet>
    ),
}
