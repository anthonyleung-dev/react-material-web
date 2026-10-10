import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbButton, MdGbButtonProps } from '..'
import { MdGbIcon } from '../../icon'

const COLORS = ['filled', 'elevated', 'tonal', 'outlined', 'text'] as const
const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const meta = {
    title: 'Material You/Labs Expressive/Button',
    component: MdGbButton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select', options: COLORS, description: 'The button color style.' },
        size: { control: 'select', options: SIZES, description: 'The button size.' },
        square: { control: 'boolean', description: 'Whether the button uses a square shape.' },
        type: {
            control: 'select',
            options: ['submit', 'reset', 'button', 'toggle'],
            description: 'The button type. `toggle` makes it a toggle button.',
        },
        disabled: { control: 'boolean', description: 'Whether or not the button is disabled.' },
        softDisabled: { control: 'boolean', description: 'Whether the button is disabled but still focusable.' },
        selected: { control: 'boolean', description: 'Whether a toggle button is selected.' },
        href: { control: 'text', description: 'The URL that the link button points to.' },
    },
    args: { color: 'filled', size: 'sm', onClick: fn(), onChange: fn() },
} satisfies Meta<MdGbButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => <MdGbButton {...props}>Label</MdGbButton>,
}

export const WithIcon: Story = {
    render: (props) => (
        <MdGbButton {...props}>
            <MdGbIcon>add</MdGbIcon>
            Label
        </MdGbButton>
    ),
}

export const Colors: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 8 }}>
            {COLORS.map((color) => (
                <MdGbButton key={color} {...props} color={color}>
                    {color}
                </MdGbButton>
            ))}
        </div>
    ),
}

export const Sizes: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {SIZES.map((size) => (
                <MdGbButton key={size} {...props} size={size}>
                    {size.toUpperCase()}
                </MdGbButton>
            ))}
        </div>
    ),
}

export const Toggle: Story = {
    args: { type: 'toggle', color: 'tonal' },
    render: (props) => <MdGbButton {...props}>Toggle</MdGbButton>,
}
