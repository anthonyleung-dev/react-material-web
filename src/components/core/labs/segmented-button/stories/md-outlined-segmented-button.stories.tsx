import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdOutlinedSegmentedButton, MdOutlinedSegmentedButtonProps, MdOutlinedSegmentedButtonSet } from '..'
import { MdIcon } from '../../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Segmented Button/Outlined Segmented Button',
    component: MdOutlinedSegmentedButton,
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
            description: 'Whether the segmented button set is disabled.',
        },
        selected: {
            control: 'number',
            description: 'The index of the selected button.',
        },
        label: {
            control: 'text',
            description: 'The label for the segmented button.',
        },
        noCheckmark: {
            control: 'boolean',
            description: 'Whether the segmented button set has a checkmark.',
        },
        hasIcon: {
            control: 'boolean',
            description: 'Whether the segmented button set has icons.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdOutlinedSegmentedButtonProps>

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

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: ({ ...args }) => (
        <MdOutlinedSegmentedButtonSet>
            <MdOutlinedSegmentedButton {...args} label="Option 1" />
            <MdOutlinedSegmentedButton {...args} label="Option 2" />
        </MdOutlinedSegmentedButtonSet>
    ),
}

export const NoCheckmark: Story = {
    args: {
        noCheckmark: true,
    },
    render: ({ ...args }) => (
        <MdOutlinedSegmentedButtonSet>
            <MdOutlinedSegmentedButton {...args} label="Option 1" />
            <MdOutlinedSegmentedButton {...args} label="Option 2" />
        </MdOutlinedSegmentedButtonSet>
    ),
}

export const WithIcon: Story = {
    args: {
        hasIcon: true,
    },
    render: ({ ...args }) => (
        <MdOutlinedSegmentedButtonSet>
            <MdOutlinedSegmentedButton {...args} label="Option 1">
                <MdIcon slot="icon">directions_walk</MdIcon>
            </MdOutlinedSegmentedButton>
            <MdOutlinedSegmentedButton {...args} label="Option 2">
                <MdIcon slot="icon">directions_subway</MdIcon>
            </MdOutlinedSegmentedButton>
            <MdOutlinedSegmentedButton {...args} label="Option 3">
                <MdIcon slot="icon">directions_car</MdIcon>
            </MdOutlinedSegmentedButton>
        </MdOutlinedSegmentedButtonSet>
    ),
}

export const TransportatonModes: Story = {
    args: {
        hasIcon: true,
    },
    render: ({ ...args }) => (
        <MdOutlinedSegmentedButtonSet>
            <MdOutlinedSegmentedButton {...args}>
                <MdIcon slot="icon">directions_walk</MdIcon>
            </MdOutlinedSegmentedButton>
            <MdOutlinedSegmentedButton {...args}>
                <MdIcon slot="icon">directions_subway</MdIcon>
            </MdOutlinedSegmentedButton>
            <MdOutlinedSegmentedButton {...args}>
                <MdIcon slot="icon">directions_car</MdIcon>
            </MdOutlinedSegmentedButton>
        </MdOutlinedSegmentedButtonSet>
    ),
}

export const IconOnly: Story = {
    args: {
        hasIcon: true,
        noCheckmark: true,
    },
    render: ({ ...args }) => (
        <MdOutlinedSegmentedButtonSet>
            <MdOutlinedSegmentedButton {...args}>
                <MdIcon slot="icon">format_align_left</MdIcon>
            </MdOutlinedSegmentedButton>
            <MdOutlinedSegmentedButton {...args}>
                <MdIcon slot="icon">format_align_center</MdIcon>
            </MdOutlinedSegmentedButton>
            <MdOutlinedSegmentedButton {...args}>
                <MdIcon slot="icon">format_align_right</MdIcon>
            </MdOutlinedSegmentedButton>
        </MdOutlinedSegmentedButtonSet>
    ),
}
