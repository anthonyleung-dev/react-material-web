import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbFab, MdGbFabProps } from '..'
import { MdGbIcon } from '../../icon'

const COLORS = [
    'primary-container',
    'secondary-container',
    'tertiary-container',
    'primary',
    'secondary',
    'tertiary',
] as const

const meta = {
    title: 'Material You/Labs Expressive/FAB',
    component: MdGbFab,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select', options: COLORS, description: 'The FAB color.' },
        size: { control: 'select', options: ['default', 'md', 'lg'], description: 'The FAB size.' },
    },
    args: { onClick: fn() },
} satisfies Meta<MdGbFabProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <MdGbFab {...props} aria-label="Edit">
            <MdGbIcon>edit</MdGbIcon>
        </MdGbFab>
    ),
}

export const Extended: Story = {
    render: (props) => (
        <MdGbFab {...props}>
            <MdGbIcon>add</MdGbIcon>
            Create
        </MdGbFab>
    ),
}

export const Colors: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 8 }}>
            {COLORS.map((color) => (
                <MdGbFab key={color} {...props} color={color} aria-label={color}>
                    <MdGbIcon>edit</MdGbIcon>
                </MdGbFab>
            ))}
        </div>
    ),
}
