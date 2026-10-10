import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbCheckbox, MdGbCheckboxProps } from '..'

const meta = {
    title: 'Material You/Labs Expressive/Checkbox',
    component: MdGbCheckbox,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        checked: { control: 'boolean', description: 'Whether or not the checkbox is selected.' },
        indeterminate: { control: 'boolean', description: 'Whether or not the checkbox is indeterminate.' },
        error: { control: 'boolean', description: 'Whether or not the checkbox shows an error state.' },
        disabled: { control: 'boolean', description: 'Whether or not the checkbox is disabled.' },
        required: { control: 'boolean', description: 'Whether the checkbox must be selected to submit a form.' },
    },
    args: { onChange: fn(), onInput: fn() },
} satisfies Meta<MdGbCheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {}

export const Label: Story = {
    render: (props) => (
        <label>
            <MdGbCheckbox {...props} />
            Checkbox one
        </label>
    ),
}
