import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import '../../../../../../stories/gb-setup'
import { MdGbCard, MdGbCardProps } from '..'
import { MdGbButton } from '../../button'

const COLORS = ['elevated', 'filled', 'outlined'] as const

const meta = {
    title: 'Material You/Labs Expressive/Card',
    component: MdGbCard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select', options: COLORS, description: 'The card color style.' },
        interactive: { control: 'boolean', description: 'Whether the card shows hover, focus and press states.' },
        disabled: { control: 'boolean', description: 'Whether or not an interactive card is disabled.' },
    },
    args: { color: 'elevated' },
} satisfies Meta<MdGbCardProps>

export default meta
type Story = StoryObj<typeof meta>

const content = { padding: 16 }

export const Detault: Story = {
    render: (props) => (
        <MdGbCard {...props}>
            <div style={content}>Card content</div>
        </MdGbCard>
    ),
}

export const Colors: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 16 }}>
            {COLORS.map((color) => (
                <MdGbCard key={color} {...props} color={color}>
                    <div style={content}>{color}</div>
                </MdGbCard>
            ))}
        </div>
    ),
}

export const Layout: Story = {
    render: (props) => (
        <MdGbCard {...props} style={{ maxWidth: 360 }}>
            <div style={content}>
                <h2>Headline</h2>
                <h3>Subhead</h3>
                <p>Explain more about the topic shown in the headline and subhead through supporting text here.</p>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                    <MdGbButton color="outlined">Action</MdGbButton>
                    <MdGbButton color="filled">Action</MdGbButton>
                </div>
            </div>
        </MdGbCard>
    ),
}
