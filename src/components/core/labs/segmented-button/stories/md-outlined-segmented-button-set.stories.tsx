import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdOutlinedSegmentedButton, MdOutlinedSegmentedButtonSet, MdOutlinedSegmentedButtonSetProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Segmented Button/Outlined Segmented Button Set',
    component: MdOutlinedSegmentedButtonSet,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        multiselect: {
            control: 'boolean',
            description: 'Whether the segmented button set allows multiple selections.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdOutlinedSegmentedButtonSetProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <MdOutlinedSegmentedButtonSet>
            <MdOutlinedSegmentedButton label="Option 1" />
            <MdOutlinedSegmentedButton label="Option 2" />
        </MdOutlinedSegmentedButtonSet>
    ),
}

export const Multiselect: Story = {
    args: {
        multiselect: true,
    },
    render: ({ ...args }) => (
        <MdOutlinedSegmentedButtonSet {...args}>
            <MdOutlinedSegmentedButton label="Option 1" />
            <MdOutlinedSegmentedButton label="Option 2" />
        </MdOutlinedSegmentedButtonSet>
    ),
}
