import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbIconButton, MdGbIconButtonProps } from '..'
import { MdGbIcon } from '../../icon'

const COLORS = ['filled', 'tonal', 'outlined', 'standard'] as const
const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const meta = {
    title: 'Material You/Labs Expressive/Icon Button',
    component: MdGbIconButton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select', options: COLORS, description: 'The icon button color style.' },
        size: { control: 'select', options: SIZES, description: 'The icon button size.' },
        width: { control: 'select', options: ['', 'narrow', 'wide'], description: 'The icon button width.' },
        square: { control: 'boolean', description: 'Whether the icon button uses a square shape.' },
        type: {
            control: 'select',
            options: ['submit', 'reset', 'button', 'toggle'],
            description: 'The button type. `toggle` makes it a toggle button.',
        },
        disabled: { control: 'boolean', description: 'Whether or not the icon button is disabled.' },
        selected: { control: 'boolean', description: 'Whether a toggle icon button is selected.' },
    },
    args: { color: 'filled', onClick: fn(), onChange: fn() },
} satisfies Meta<MdGbIconButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <MdGbIconButton {...props} aria-label="Favorite">
            <MdGbIcon>favorite</MdGbIcon>
        </MdGbIconButton>
    ),
}

export const Colors: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 8 }}>
            {COLORS.map((color) => (
                <MdGbIconButton key={color} {...props} color={color} aria-label={color}>
                    <MdGbIcon>favorite</MdGbIcon>
                </MdGbIconButton>
            ))}
        </div>
    ),
}

export const Sizes: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {SIZES.map((size) => (
                <MdGbIconButton key={size} {...props} size={size} aria-label={size}>
                    <MdGbIcon>favorite</MdGbIcon>
                </MdGbIconButton>
            ))}
        </div>
    ),
}

export const Toggle: Story = {
    args: { type: 'toggle', color: 'outlined' },
    render: (props) => (
        <MdGbIconButton {...props} aria-label="Bookmark">
            <MdGbIcon>bookmark</MdGbIcon>
        </MdGbIconButton>
    ),
}
