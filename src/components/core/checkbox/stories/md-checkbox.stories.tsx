import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { MdCheckbox, MdCheckboxProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Checkbox/Checkbox',
    component: MdCheckbox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        checked: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the checkbox is selected.',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the checkbox is disabled.',
        },
        indeterminate: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the checkbox is indeterminate.',
        },
        required: {
            control: 'boolean',
            defaultValue: false,
            description: 'When true, require the checkbox to be selected when participating in form submission.',
        },
        value: {
            control: 'text',
            description: 'The value of the checkbox that is submitted with a form when selected.',
        },
        name: { control: 'text', description: 'The name of the checkbox.' },
        form: {
            control: 'text',
            description: "The associated form element with which this element's value will submit.",
        },
        labels: { control: 'text', description: 'A NodeList of label elements that are associated with the checkbox.' },
        validity: { control: 'text', description: 'The validity state of the checkbox.' },
        validationMessage: { control: 'text', description: 'The validation message of the checkbox.' },
        willValidate: { control: 'boolean', description: 'Whether or not the checkbox will be validated.' },
        onClick: { control: 'function', description: 'The event handler for the `click` event.' },
        onFocus: { control: 'function', description: 'The event handler for the `focus` event.' },
        onBlur: { control: 'function', description: 'The event handler for the `blur` event.' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn(), onFocus: fn(), onBlur: fn() },
} satisfies Meta<MdCheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
}

export const Label: Story = {
    args: {},
    render: (props: MdCheckboxProps) => (
        <div>
            <label>
                <MdCheckbox {...props} touch-target="wrapper" />
                Checkbox one
            </label>
        </div>
    ),
}
