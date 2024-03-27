import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdSwitch, MdSwitchProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Switch/Switch',
    component: MdSwitch,
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
            description: 'Disables the switch and makes it non-interactive.',
        },
        selected: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Puts the switch in the selected state and sets the form submission value to the value property.',
        },
        icons: {
            control: 'boolean',
            defaultValue: false,
            description: 'Shows both the selected and deselected icons.',
        },
        showOnlySelectedIcon: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Shows only the selected icon, and not the deselected icon. If true, overrides the behavior of the icons property.',
        },
        required: {
            control: 'boolean',
            defaultValue: false,
            description: 'When true, require the switch to be selected when participating in form submission.',
        },
        value: {
            control: 'text',
            defaultValue: '',
            description:
                'The value associated with this switch on form submission. null is submitted when selected is false.',
        },
        name: {
            control: 'text',
            defaultValue: '',
            description: 'The name of the switch.',
        },
        form: {
            control: 'object',
            defaultValue: null,
            description: 'The form element that the switch is associated with.',
        },
        labels: {
            control: 'object',
            defaultValue: null,
            description: 'The labels associated with the switch.',
        },
        validity: {
            control: 'object',
            defaultValue: null,
            description: 'The validity state of the switch.',
        },
        validationMessage: {
            control: 'text',
            defaultValue: '',
            description: 'The validation message of the switch.',
        },
        willValidate: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the switch will be validated.',
        },
        checkValidity: {
            action: 'checkValidity',
            table: {
                disable: true,
            },
        },
        reportValidity: {
            action: 'reportValidity',
            table: {
                disable: true,
            },
        },
        setCustomValidity: {
            action: 'setCustomValidity',
            table: {
                disable: true,
            },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdSwitchProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
}

export const WithLabel: Story = {
    args: {},
    render: () => (
        <label>
            Wi-Fi
            <MdSwitch />
        </label>
    ),
}

export const Icons: Story = {
    args: {
        icons: true,
    },
}
