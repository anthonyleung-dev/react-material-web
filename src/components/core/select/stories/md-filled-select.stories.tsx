import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdFilledSelect, MdFilledSelectProps, MdSelectOption } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Selects/Filled Select',
    component: MdFilledSelect,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        quick: {
            control: 'boolean',
            defaultValue: false,
            description: 'Opens the menu synchronously with no animation.',
        },
        required: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the select is required.',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Disables the select.',
        },
        errorText: {
            control: 'text',
            description:
                'Gets or sets whether or not the select is in a visually invalid state. This error state overrides the error state controlled by `reportValidity()`.',
        },
        label: {
            control: 'text',
            description: 'The floating label for the field.',
        },
        supportingText: {
            control: 'text',
            description: 'Conveys additional information below the select, such as how it should be used.',
        },
        error: {
            control: 'boolean',
            defaultValue: false,
            description:
                'Gets or sets whether or not the select is in a visually invalid state. This error state overrides the error state controlled by `reportValidity()`.',
        },
        menuPositioning: {
            control: 'text',
            description:
                'Whether or not the underlying `md-menu` should be `position: fixed` to display in a top-level manner, or `position: absolute`.',
        },
        typeaheadDelay: {
            control: 'number',
            description:
                'The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.',
        },
        hasLeadingIcon: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the text field has a leading icon. Used for SSR.',
        },
        displayText: {
            control: 'text',
            description: 'Text to display in the field. Only set for SSR.',
        },
        value: {
            control: 'text',
            description: 'The value of the select.',
        },
        selectedIndex: {
            control: 'number',
            description: 'The index of the selected option.',
        },
        options: {
            control: 'object',
            description: 'The options for the select.',
        },
        selectedOptions: {
            control: 'object',
            description: 'The selected options for the select.',
        },
        name: {
            control: 'text',
            description: 'The name of the select.',
        },
        form: {
            control: 'object',
            description: 'The form element that the select is in.',
        },
        labels: {
            control: 'object',
            description: 'The labels for the select.',
        },
        validity: {
            control: 'object',
            description: 'The validity state of the select.',
        },
        validationMessage: {
            control: 'text',
            description: 'The validation message of the select.',
        },
        willValidate: {
            control: 'boolean',
            defaultValue: true,
            description: 'Whether or not the select will be validated.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdFilledSelectProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: ({ ...args }) => (
        <MdFilledSelect {...args}>
            <MdSelectOption value="apple">Apple</MdSelectOption>
            <MdSelectOption value="banana">Banana</MdSelectOption>
        </MdFilledSelect>
    ),
}

export const WithLabel: Story = {
    args: {
        label: 'Label',
    },
    render: ({ ...args }) => (
        <MdFilledSelect {...args}>
            <MdSelectOption value="apple">Apple</MdSelectOption>
            <MdSelectOption value="banana">Banana</MdSelectOption>
        </MdFilledSelect>
    ),
}