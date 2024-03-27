import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdElevation, MdElevationProps } from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Elevation/Elevation',
    component: MdElevation,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdElevationProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: ({ ...props }) => (
        <div
            style={{
                width: '64px',
                height: '64px',
                position: 'relative',
                borderRadius: '16px',
            }}
        >
            <MdElevation {...props} />
        </div>
    ),
}

export const ElevationLevel3: Story = {
    args: {},
    render: ({ ...props }) => (
        <div
            style={
                {
                    width: '64px',
                    height: '64px',
                    position: 'relative',
                    borderRadius: '16px',
                    '--md-elevation-level': '3',
                } as React.CSSProperties
            }
        >
            <MdElevation {...props} />
        </div>
    ),
}
