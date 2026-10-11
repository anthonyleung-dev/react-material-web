import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import '../../../../../../stories/gb-setup'
import { MdGbList, MdGbListItem, MdGbListProps } from '..'
import { MdGbIcon } from '../../icon'

const meta = {
    title: 'Material You/Labs Expressive/List',
    component: MdGbList,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        segmented: { control: 'boolean', description: 'Whether the list items render as separate segments.' },
    },
    args: {},
} satisfies Meta<MdGbListProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <div style={{ width: 360 }}>
            <MdGbList {...props}>
                <MdGbListItem>Basic item</MdGbListItem>
                <MdGbListItem>
                    <MdGbIcon slot="leading">star</MdGbIcon>
                    With leading icon
                </MdGbListItem>
                <MdGbListItem>
                    <span slot="avatar">A</span>
                    With avatar and supporting text
                    <span slot="supporting-text">Supporting text goes here</span>
                </MdGbListItem>
                <MdGbListItem>
                    <MdGbIcon slot="leading">image</MdGbIcon>
                    <span slot="overline">Overline text</span>
                    Complex item
                    <span slot="supporting-text">With overline, supporting text and two icons</span>
                    <span slot="trailing-text">100+</span>
                    <MdGbIcon slot="trailing">chevron_right</MdGbIcon>
                </MdGbListItem>
                <MdGbListItem checked>
                    <MdGbIcon slot="leading">check</MdGbIcon>
                    Selected item
                </MdGbListItem>
                <MdGbListItem disabled>
                    <MdGbIcon slot="leading">block</MdGbIcon>
                    Disabled item
                </MdGbListItem>
            </MdGbList>
        </div>
    ),
}

export const Static: Story = {
    render: (props) => (
        <div style={{ width: 360 }}>
            <MdGbList {...props}>
                <MdGbListItem nonInteractive>
                    <MdGbIcon slot="leading">developer_board</MdGbIcon>
                    The first computer (ENIAC)
                    <span slot="trailing-text">Feb 14, 1946</span>
                </MdGbListItem>
                <MdGbListItem nonInteractive>
                    <MdGbIcon slot="leading">rocket_launch</MdGbIcon>
                    The Apollo 11 moon landing
                    <span slot="trailing-text">Jul 20, 1969</span>
                </MdGbListItem>
            </MdGbList>
        </div>
    ),
}
