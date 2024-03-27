import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdPrimaryTab, MdTabs, MdTabsProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Tabs/Tabs',
    component: MdTabs,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        autoActivate: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not to automatically select a tab when it is focused.',
        },
        tabs: {
            control: 'object',
            defaultValue: undefined,
            description: 'The tabs of this tab bar.',
        },
        activeTab: {
            control: 'object',
            defaultValue: undefined,
            description: 'The active tab.',
        },
        activeTabIndex: {
            control: 'number',
            defaultValue: undefined,
            description: 'The index of the active tab.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdTabsProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <MdTabs>
            <MdPrimaryTab>Tab 1</MdPrimaryTab>
            <MdPrimaryTab>Tab 2</MdPrimaryTab>
        </MdTabs>
    ),
}
