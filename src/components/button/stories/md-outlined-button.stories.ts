import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { MdOutlinedButton, MdOutlinedButtonProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Buttons/Outlined Button',
    component: MdOutlinedButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            control: {
                type: 'function',
            },
            description: 'The children of the button.',
            defaultValue: 'Outlined Button',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the button is disabled.',
        },
        href: {
            control: 'text',
            description: 'The URL that the link button points to.',
            defaultValue: '',
        },
        target: {
            control: 'string',
            description:
                'Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.',
            defaultValue: '',
        },
        trailingIcon: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Whether to render the icon at the inline end of the label rather than the inline start. Note: Link buttons cannot have trailing icons.',
        },
        hasIcon: { control: 'boolean', defaultValue: false, description: 'Whether the button has an icon.' },
        type: { control: 'text', defaultValue: 'submit' },
        value: { control: 'text' },
        name: { control: 'text' },
        form: { control: 'text' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<MdOutlinedButtonProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {
        children: 'Outlined Button',
    },
}
