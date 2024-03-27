import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { MdOutlinedIconButton, MdOutlinedIconButtonProps, MdIcon } from '../../'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Icon Buttons/Outlined Icon Button',
    component: MdOutlinedIconButton,
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
            description: 'Disables the button, making it non-interactive.',
            defaultValue: false,
        },
        flipIconInRtl: {
            control: 'boolean',
            description: 'Flips the icon if in an RTL context at startup.',
            defaultValue: false,
        },
        href: {
            control: 'text',
            description: "Sets the underlying HTMLAnchorElement's href attribute.",
        },
        target: {
            control: 'text',
            description:
                'Sets the target attribute for the HTMLAnchorElement to define where to open the linked document.',
        },
        ariaLabelSelected: {
            control: 'text',
            description: 'The aria-label of the button when it is toggleable and selected.',
        },
        toggle: {
            control: 'boolean',
            description: 'When true, the button will toggle between selected and unselected states.',
            defaultValue: false,
        },
        selected: {
            control: 'boolean',
            description:
                'Sets the selected state. When false, displays the default icon; when true, displays the "selected" icon.',
            defaultValue: false,
        },
        type: {
            control: 'text',
            description: "The type attribute of the button (e.g., 'submit', 'reset', 'button').",
        },
        value: {
            control: 'text',
            description: 'The value attribute of the button that gets sent when the form is submitted.',
        },
        name: {
            control: 'text',
            description: 'The name of the button.',
        },
        form: {
            control: 'object',
            description: 'The form element that the button is associated with.',
        },
        labels: {
            control: 'object',
            description: 'A NodeList of label elements that are associated with the button.',
        },
        onClick: {
            action: 'clicked',
            description: 'The event handler for the `click` event.',
        },
        onFocus: {
            action: 'focused',
            description: 'The event handler for the `focus` event.',
        },
        onBlur: {
            action: 'blurred',
            description: 'The event handler for the `blur` event.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<MdOutlinedIconButtonProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: function Render(args): JSX.Element {
        return (
            <MdOutlinedIconButton {...args}>
                <MdIcon>settings</MdIcon>
            </MdOutlinedIconButton>
        )
    },
}
