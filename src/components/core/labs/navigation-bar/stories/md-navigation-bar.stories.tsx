import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdNavigationBar, MdNavigationBarProps, MdNavigationTab } from '..'
import { MdIcon } from '../../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Navigation Bar/Navigation Bar',
    component: MdNavigationBar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        activeIndex: {
            control: 'number',
            description: 'The index of the active tab.',
        },
        hideInactiveLabels: {
            control: 'boolean',
            description: 'Whether to hide the labels of inactive tabs.',
        },
        tabs: {
            control: 'object',
            description: 'The tabs to display in the navigation bar.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdNavigationBarProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <MdNavigationBar>
            <MdNavigationTab label="Home">
                <MdIcon slot="active-icon">done</MdIcon>
                <MdIcon slot="inactive-icon">close</MdIcon>
            </MdNavigationTab>
            <MdNavigationTab label="Profile">
                <MdIcon slot="active-icon">person</MdIcon>
                <MdIcon slot="inactive-icon">person_outline</MdIcon>
            </MdNavigationTab>
        </MdNavigationBar>
    ),
}
