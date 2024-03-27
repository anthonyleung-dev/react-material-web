import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdNavigationTab, MdNavigationTabProps, MdNavigationBar } from '..'
import { MdIcon } from '../../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Navigation Bar/Navigation Tab',
    component: MdNavigationTab,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Whether the tab is disabled.',
        },
        active: {
            control: 'boolean',
            description: 'Whether the tab is active.',
        },
        label: {
            control: 'text',
            description: 'The label for the navigation tab.',
        },
        badgeValue: {
            control: 'text',
            description: 'The value for the badge.',
        },
        showBadge: {
            control: 'boolean',
            description: 'Whether to show the badge.',
        },
        buttonElement: {
            control: 'object',
            description: 'The element to use as the button.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdNavigationTabProps>

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

export const ShowBadge: Story = {
    args: {
        showBadge: true,
        badgeValue: '3',
    },
    render: ({ ...args }) => (
        <MdNavigationBar>
            <MdNavigationTab {...args} label="Home">
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