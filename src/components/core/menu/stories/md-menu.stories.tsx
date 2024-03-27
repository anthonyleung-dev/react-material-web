import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdMenu, MdMenuElement, MdMenuItem, MdMenuProps, MdSubMenu } from '..'
import { MdFilledButtonElement, MdFilledButton } from '../../button'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Menu/Menu',
    component: MdMenu,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        anchor: {
            control: 'text',
            defaultValue: '',
            description:
                'The ID of the element in the same root node in which the menu should align to. Overrides setting anchorElement = elementReference.',
        },
        positioning: {
            control: 'text',
            defaultValue: '',
            description:
                'Whether the positioning algorithm should calculate relative to the parent of the anchor element (absolute) or relative to the window (fixed).',
        },
        quick: {
            control: 'boolean',
            defaultValue: false,
            description: 'Skips the opening and closing animations.',
        },
        hasOverflow: {
            control: 'boolean',
            defaultValue: false,
            description: 'Displays overflow content like a submenu.',
        },
        open: {
            control: 'boolean',
            description: 'Opens the menu and makes it visible. Alternative to the .show() and .close() methods',
        },
        xOffset: {
            control: 'number',
            defaultValue: 0,
            description:
                "Offsets the menu's inline alignment from the anchor by the given number in pixels. This value is direction aware and will follow the LTR / RTL direction.",
        },
        yOffset: {
            control: 'number',
            defaultValue: 0,
            description: "Offsets the menu's block alignment from the anchor by the given number in pixels.",
        },
        typeaheadDelay: {
            control: 'number',
            defaultValue: 1000,
            description:
                'The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer.',
        },
        anchorCorner: {
            control: 'text',
            defaultValue: '',
            description:
                "The corner of the anchor which to align the menu in the standard logical property style of - e.g. 'end-start'.",
        },
        menuCorner: {
            control: 'text',
            defaultValue: '',
            description:
                "The corner of the menu which to align the anchor in the standard logical property style of - e.g. 'start-start'.",
        },
        stayOpenOnOutsideClick: {
            control: 'boolean',
            defaultValue: false,
            description: 'Keeps the user clicks outside the menu.',
        },
        stayOpenOnFocusout: {
            control: 'boolean',
            defaultValue: false,
            description: "Keeps the menu open when focus leaves the menu's composed subtree.",
        },
        skipRestoreFocus: {
            control: 'boolean',
            defaultValue: false,
            description:
                'After closing, does not restore focus to the last focused element before the menu was opened.',
        },
        defaultFocus: {
            control: 'text',
            defaultValue: '',
            description: 'The element that should be focused by default once opened.',
        },
        isSubmenu: {
            control: 'boolean',
            defaultValue: false,
            description: 'Whether or not the current menu is a submenu and should not handle specific navigation keys.',
        },
        typeaheadController: {
            control: 'function',
            defaultValue: null,
            description: 'Handles typeahead navigation through the menu.',
        },
        anchorElement: {
            control: 'object',
            defaultValue: null,
            description: '',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdMenuProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: () => {
        const menuRef = React.useRef<MdMenuElement>(null)
        const anchorRef = React.useRef<MdFilledButtonElement>(null)
        const [open, setOpen] = React.useState(false)
        return (
            <div style={{ position: 'relative' }}>
                <MdFilledButton ref={anchorRef} onClick={() => setOpen(!open)}>
                    Open Menu
                </MdFilledButton>
                <MdMenu anchorElement={anchorRef.current ?? undefined} ref={menuRef} open={open}>
                    <MdMenuItem>
                        <span slot="headline">Item 1</span>
                    </MdMenuItem>
                    <MdMenuItem>
                        <span slot="headline">Item 2</span>
                    </MdMenuItem>
                </MdMenu>
            </div>
        )
    },
}

export const WithIcons: Story = {
    args: {},
    render: () => {
        const menuRef = React.useRef<MdMenuElement>(null)
        const anchorRef = React.useRef<MdFilledButtonElement>(null)
        const [open, setOpen] = React.useState(false)
        return (
            <div style={{ position: 'relative' }}>
                <MdFilledButton ref={anchorRef} onClick={() => setOpen(!open)}>
                    Open Menu
                </MdFilledButton>
                <MdMenu anchorElement={anchorRef.current ?? undefined} ref={menuRef} open={open}>
                    <MdMenuItem>
                        <MdIcon slot="start">settings</MdIcon>
                        <span slot="headline">Item 1</span>
                    </MdMenuItem>
                    <MdMenuItem>
                        <MdIcon slot="start">account_circle</MdIcon>
                        <span slot="headline">Item 2</span>
                    </MdMenuItem>
                    <MdMenuItem>
                        <span slot="headline">Item 3</span>
                        <MdIcon slot="end">circle</MdIcon>
                    </MdMenuItem>
                </MdMenu>
            </div>
        )
    },
}

export const WithSubmenu: Story = {
    args: {
        hasOverflow: true,
    },
    render: ({ ...args }) => {
        const menuRef = React.useRef<MdMenuElement>(null)
        const anchorRef = React.useRef<MdFilledButtonElement>(null)
        const [open, setOpen] = React.useState(false)
        return (
            <div style={{ position: 'relative' }}>
                <MdFilledButton ref={anchorRef} onClick={() => setOpen(!open)}>
                    Open Menu
                </MdFilledButton>
                <MdMenu {...args} anchorElement={anchorRef.current ?? undefined} ref={menuRef} open={open}>
                    <MdSubMenu>
                        <MdMenuItem slot="item">
                            <span slot="headline">Item 1</span>
                            <MdIcon slot="end">arrow_right</MdIcon>
                        </MdMenuItem>
                        <MdMenu slot="menu">
                            <MdMenuItem>
                                <span slot="headline">Submenu Item 1</span>
                            </MdMenuItem>
                            <MdMenuItem>
                                <span slot="headline">Submenu Item 2</span>
                            </MdMenuItem>
                        </MdMenu>
                    </MdSubMenu>
                    <MdMenuItem>
                        <span slot="headline">Item 2</span>
                    </MdMenuItem>
                    <MdMenuItem>
                        <span slot="headline">Item 3</span>
                    </MdMenuItem>
                </MdMenu>
            </div>
        )
    },
}
