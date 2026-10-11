import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import '../../../../../../stories/gb-setup'
import { MdGbMenu, MdGbMenuGroup, MdGbMenuItem, MdGbMenuProps } from '..'
import { MdGbDivider } from '../../divider'

const meta = {
    title: 'Material You/Labs Expressive/Menu',
    component: MdGbMenu,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select', options: ['standard', 'vibrant'], description: 'The menu color style.' },
    },
    args: { color: 'standard', onToggle: fn() },
} satisfies Meta<MdGbMenuProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <>
            {/* React 18 has no `popoverTarget` prop, so pass the HTML attribute as is. */}
            <button {...{ popovertarget: 'gb-menu' }}>Open menu</button>
            <MdGbMenu {...props} id="gb-menu">
                <MdGbMenuItem>Standard item 1</MdGbMenuItem>
                <MdGbMenuItem>
                    Standard item 2<span slot="supporting-text">Supporting text</span>
                </MdGbMenuItem>
                <MdGbMenuItem disabled>Standard item 3</MdGbMenuItem>
                <MdGbDivider />
                <MdGbMenuGroup checkable="single">
                    <MdGbMenuItem checked>Radio 1</MdGbMenuItem>
                    <MdGbMenuItem>Radio 2</MdGbMenuItem>
                </MdGbMenuGroup>
                <MdGbDivider />
                <MdGbMenuGroup checkable="multiple">
                    <MdGbMenuItem checked>Checkbox 1</MdGbMenuItem>
                    <MdGbMenuItem>Checkbox 2</MdGbMenuItem>
                </MdGbMenuGroup>
            </MdGbMenu>
        </>
    ),
}
