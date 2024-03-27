import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdSecondaryTab, MdTabs, MdSecondaryTabProps } from '..'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Tabs/Secondary Tab',
    component: MdSecondaryTab,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        isTab: {
            control: 'boolean',
            defaultValue: false,
            description: 'Indicates that the element is a tab for the parent element, <md-tabs>.',
        },
        active: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the tab is selected.',
        },
        hasIcon: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not an icon is present.',
        },
        iconOnly: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not there is only an icon and no label.',
        },
        selected: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the tab is selected.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdSecondaryTabProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: ({ ...args }) => (
        <MdTabs>
            <MdSecondaryTab {...args}>Tab 1</MdSecondaryTab>
            <MdSecondaryTab {...args}>Tab 2</MdSecondaryTab>
        </MdTabs>
    ),
}

export const WithIcon: Story = {
    args: {
        hasIcon: true,
    },
    render: ({ ...args }) => (
        <MdTabs>
            <MdSecondaryTab {...args}>
                <MdIcon slot="icon">piano</MdIcon>
                Keyboard
            </MdSecondaryTab>
            <MdSecondaryTab {...args}>
                <MdIcon slot="icon">tune</MdIcon>
                Guitar
            </MdSecondaryTab>
        </MdTabs>
    ),
}

export const IconOnly: Story = {
    args: {
        iconOnly: true,
    },
    render: ({ ...args }) => (
        <MdTabs>
            <MdSecondaryTab {...args}>
                <MdIcon slot="icon">piano</MdIcon>
            </MdSecondaryTab>
            <MdSecondaryTab {...args}>
                <MdIcon slot="icon">tune</MdIcon>
            </MdSecondaryTab>
        </MdTabs>
    ),
}
