import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdOutlinedTextField, MdOutlinedTextFieldProps } from '..'
import { MdIcon } from '../../icon'
import { MdIconButton } from '../../icon-button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Text Field/Outlined Text Field',
    component: MdOutlinedTextField,
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
            description: 'Whether or not the text field is disabled.',
        },
        error: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field has an error.',
        },
        errorText: {
            control: 'text',
            defaultValue: '',
            description: 'The error message to display when the text field has an error.',
        },
        label: {
            control: 'text',
            defaultValue: 'Label',
            description: 'The label for the text field.',
        },
        required: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field is required.',
        },
        value: {
            control: 'text',
            defaultValue: '',
            description: 'The value of the text field.',
        },
        prefixText: {
            control: 'text',
            defaultValue: '',
            description: 'The text to display before the input.',
        },
        suffixText: {
            control: 'text',
            defaultValue: '',
            description: 'The text to display after the input.',
        },
        hasLeadingIcon: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field has a leading icon.',
        },
        hasTrailingIcon: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field has a trailing icon.',
        },
        supportingText: {
            control: 'text',
            defaultValue: '',
            description: 'The supporting text to display below the input.',
        },
        textDirection: {
            control: 'radio',
            options: ['ltr', 'rtl'],
            defaultValue: 'ltr',
            description: 'The text direction of the text field.',
        },
        rows: {
            control: 'number',
            defaultValue: 1,
            description: 'The number of rows to display in a multiline text field.',
        },
        cols: {
            control: 'number',
            defaultValue: 20,
            description: 'The number of columns to display in a multiline text field.',
        },
        inputMode: {
            control: 'text',
            defaultValue: 'text',
            description: 'The input mode of the text field.',
        },
        max: {
            control: 'number',
            defaultValue: 0,
            description: 'The maximum value of the text field.',
        },
        maxLength: {
            control: 'number',
            defaultValue: 0,
            description: 'The maximum length of the text field.',
        },
        min: {
            control: 'number',
            defaultValue: 0,
            description: 'The minimum value of the text field.',
        },
        minLength: {
            control: 'number',
            defaultValue: 0,
            description: 'The minimum length of the text field.',
        },
        pattern: {
            control: 'text',
            defaultValue: '',
            description: 'The pattern to validate the text field.',
        },
        placeholder: {
            control: 'text',
            defaultValue: '',
            description: 'The placeholder text of the text field.',
        },
        readOnly: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field is read-only.',
        },
        multiple: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field accepts multiple values.',
        },
        step: {
            control: 'number',
            defaultValue: 1,
            description: 'The step value of the text field.',
        },
        type: {
            control: 'radio',
            options: ['text', 'email', 'password', 'search', 'tel', 'url'],
            defaultValue: 'text',
            description: 'The type of the text field.',
        },
        autocomplete: {
            control: 'radio',
            options: ['on', 'off'],
            defaultValue: 'on',
            description: 'The autocomplete behavior of the text field.',
        },
        form: {
            control: 'text',
            defaultValue: '',
            description: 'The form element with which the text field is associated.',
        },
        labels: {
            control: 'text',
            defaultValue: '',
            description: 'The labels for the text field.',
        },
        name: {
            control: 'text',
            defaultValue: '',
            description: 'The name of the text field.',
        },
        selectionDirection: {
            control: 'text',
            defaultValue: '',
            description: 'The direction in which the text field is selected.',
        },
        selectionEnd: {
            control: 'number',
            defaultValue: 0,
            description: 'The end position of the text field selection.',
        },
        selectionStart: {
            control: 'number',
            defaultValue: 0,
            description: 'The start position of the text field selection.',
        },
        validationMessage: {
            control: 'text',
            defaultValue: '',
            description: 'The validation message of the text field.',
        },
        validity: {
            control: 'object',
            defaultValue: {},
            description: 'The validity state of the text field.',
        },
        valueAsNumber: {
            control: 'number',
            defaultValue: 0,
            description: 'The value of the text field as a number.',
        },
        valueAsDate: {
            control: 'object',
            defaultValue: {},
            description: 'The value of the text field as a date.',
        },
        willValidate: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field will validate.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdOutlinedTextFieldProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const Error: Story = {
    args: {
        error: true,
        errorText: 'Error message',
    },
}

export const Required: Story = {
    args: {
        required: true,
        label: 'Label',
    },
}

export const LeadingIcon: Story = {
    args: {
        hasLeadingIcon: true,
    },
    render: ({ ...args }) => {
        return (
            <MdOutlinedTextField {...args}>
                <MdIcon slot="leading-icon">search</MdIcon>
            </MdOutlinedTextField>
        )
    },
}

export const TrailingIcon: Story = {
    args: {
        hasTrailingIcon: true,
    },
    render: ({ ...args }) => {
        return (
            <MdOutlinedTextField {...args}>
                <MdIconButton slot="trailing-icon">
                    <MdIcon>visibility_off</MdIcon>
                </MdIconButton>
            </MdOutlinedTextField>
        )
    },
}

export const PrefixText: Story = {
    args: {
        prefixText: '$',
    },
}

export const SuffixText: Story = {
    args: {
        suffixText: '.00',
    },
}
