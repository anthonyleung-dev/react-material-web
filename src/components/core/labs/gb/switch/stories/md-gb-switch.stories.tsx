import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbSwitch, MdGbSwitchProps } from '..'
import { MdGbIcon } from '../../icon'

const meta = {
    title: 'Material You/Labs Expressive/Switch',
    component: MdGbSwitch,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        selected: { control: 'boolean', description: 'Whether or not the switch is on.' },
        disabled: { control: 'boolean', description: 'Whether or not the switch is disabled.' },
        required: { control: 'boolean', description: 'Whether the switch must be on to submit a form.' },
    },
    args: { onChange: fn(), onInput: fn() },
} satisfies Meta<MdGbSwitchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {}

export const Icons: Story = {
    args: { selected: true },
    render: (props) => (
        <MdGbSwitch {...props}>
            <MdGbIcon slot="off-icon">close</MdGbIcon>
            <MdGbIcon slot="on-icon">check</MdGbIcon>
        </MdGbSwitch>
    ),
}
