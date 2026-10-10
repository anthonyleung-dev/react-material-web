import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import '../../../../../../stories/gb-setup'
import { MdGbBadge, MdGbBadgeProps } from '..'

const meta = {
    title: 'Material You/Labs Expressive/Badge',
    component: MdGbBadge,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<MdGbBadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <MdGbBadge {...props} />
            <MdGbBadge {...props}>3</MdGbBadge>
            <MdGbBadge {...props}>99+</MdGbBadge>
        </div>
    ),
}
