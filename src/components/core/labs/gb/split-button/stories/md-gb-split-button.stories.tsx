import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import '../../../../../../stories/gb-setup'
import { MdGbSplitButton, MdGbSplitButtonProps } from '..'
import { MdGbMenu, MdGbMenuItem } from '../../menu'

const meta = {
    title: 'Material You/Labs Expressive/Split Button',
    component: MdGbSplitButton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['filled', 'elevated', 'tonal', 'outlined'],
            description: 'The split button color style.',
        },
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], description: 'The split button size.' },
        selected: { control: 'boolean', description: 'Whether the trailing button shows the selected (menu open) state.' },
    },
    args: { color: 'filled', size: 'sm' },
} satisfies Meta<MdGbSplitButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Detault: Story = {
    render: (props) => (
        <MdGbSplitButton {...props}>
            <button slot="leading">Label</button>
            {/* React 18 has no `popoverTarget` prop, so pass the HTML attribute as is. */}
            <button slot="trailing" aria-label="More actions" {...{ popovertarget: 'gb-split-menu' }} />
            <MdGbMenu id="gb-split-menu">
                <MdGbMenuItem>Option 1</MdGbMenuItem>
                <MdGbMenuItem>Option 2</MdGbMenuItem>
            </MdGbMenu>
        </MdGbSplitButton>
    ),
}
