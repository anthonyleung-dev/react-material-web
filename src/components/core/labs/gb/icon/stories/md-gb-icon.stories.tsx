import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import '../../../../../../stories/gb-setup'
import { MdGbIcon, MdGbIconProps } from '..'

const meta = {
    title: 'Material You/Labs Expressive/Icon',
    component: MdGbIcon,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<MdGbIconProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 16 }}>
            <MdGbIcon {...props}>star</MdGbIcon>
            <MdGbIcon {...props}>favorite</MdGbIcon>
            <MdGbIcon {...props}>settings</MdGbIcon>
        </div>
    ),
}
