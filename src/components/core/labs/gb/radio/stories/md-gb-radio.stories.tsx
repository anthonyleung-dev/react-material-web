import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbRadio, MdGbRadioProps } from '..'

const meta = {
    title: 'Material You/Labs Expressive/Radio',
    component: MdGbRadio,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean', description: 'Whether or not the radio is disabled.' },
        required: { control: 'boolean', description: 'Whether a radio in the group must be selected.' },
    },
    args: { onChange: fn(), onInput: fn() },
} satisfies Meta<MdGbRadioProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <div style={{ display: 'flex', gap: 16 }}>
            <label>
                <MdGbRadio {...props} name="gb-pet" value="cat" checked />
                Cat
            </label>
            <label>
                <MdGbRadio {...props} name="gb-pet" value="dog" />
                Dog
            </label>
            <label>
                <MdGbRadio {...props} name="gb-pet" value="bird" />
                Bird
            </label>
        </div>
    ),
}
