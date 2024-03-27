import type { Meta, StoryObj } from '@storybook/react'
import { MdFilterChip, MdFilterChipProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Chips/Filter Chip',
    component: MdFilterChip,
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
        removable: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the chip is removable.',
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
    args: {},
} satisfies Meta<MdFilterChipProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        label: 'Filter Chip',
    },
}
