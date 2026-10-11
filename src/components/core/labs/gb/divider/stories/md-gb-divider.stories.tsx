import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import '../../../../../../stories/gb-setup'
import { MdGbDivider, MdGbDividerProps } from '..'

const meta = {
    title: 'Material You/Labs Expressive/Divider',
    component: MdGbDivider,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        vertical: { control: 'boolean', description: 'Whether the divider is vertical.' },
    },
    args: {},
} satisfies Meta<MdGbDividerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 200 }}>
            <div>Item</div>
            <MdGbDivider {...props} />
            <div>Item</div>
        </div>
    ),
}

export const Vertical: Story = {
    args: { vertical: true },
    render: (props) => (
        <div style={{ display: 'flex', gap: 8, height: 48, alignItems: 'center' }}>
            <div>Item</div>
            <MdGbDivider {...props} />
            <div>Item</div>
        </div>
    ),
}
