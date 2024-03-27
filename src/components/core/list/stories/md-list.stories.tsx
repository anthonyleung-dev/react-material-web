import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdList, MdListItem, MdListProps } from '..'
import { MdDivider } from '../../divider'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/List/List',
    component: MdList,
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
} satisfies Meta<MdListProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => (
        <div style={{ width: '400px' }}>
            <MdList>
                <MdListItem>Item 1</MdListItem>
                <MdListItem>Item 2</MdListItem>
                <MdListItem>Item 3</MdListItem>
            </MdList>
        </div>
    ),
}

export const WithDivider: Story = {
    args: {},
    render: () => (
        <div style={{ width: '400px' }}>
            <MdList>
                <MdListItem>Item 1</MdListItem>
                <MdDivider />
                <MdListItem>Item 2</MdListItem>
                <MdDivider />
                <MdListItem>Item 3</MdListItem>
   
            </MdList>
        </div>
    ),
}

export const WithSupportTextAndIcon: Story = {
    args: {},
    render: () => (
        <div style={{ width: '400px' }}>
            <MdList>
                <MdListItem>
                    <div slot="headline">Cucumber</div>
                    <div slot="supporting-text">
                        Cucumbers are long green fruits that are just as long as this multi-line description
                    </div>
                </MdListItem>
                <MdDivider />
                <MdListItem href="https://google.com/search?q=buy+kiwis&tbm=shop" target="_blank">
                    <div slot="headline">Shop for Kiwis</div>
                    <div slot="supporting-text">This will link you out in a new tab</div>
                    <MdIcon slot="end">open_in_new</MdIcon>
                </MdListItem>
                <MdDivider />
                <MdListItem>Item 3</MdListItem>
            </MdList>
        </div>
    ),
}

export const IconItems: Story = {
    args: {},
    render: () => (
        <div style={{ width: '400px' }}>
            <MdList>
                <MdListItem>
                    <MdIcon slot="start">star</MdIcon>
                    Star
                </MdListItem>
                <MdListItem>
                    <MdIcon slot="start">favorite</MdIcon>
                    Favorite
                </MdListItem>
                <MdListItem>
                    <MdIcon slot="start">bookmark</MdIcon>
                    Bookmark
                </MdListItem>
            </MdList>
        </div>
    ),
}
