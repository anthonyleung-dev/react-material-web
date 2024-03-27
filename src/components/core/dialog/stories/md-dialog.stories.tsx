import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MdDialog, MdDialogElement, MdDialogProps } from '..'
import { MdFilledButton, MdTextButton } from '../../button'
import { MdIcon } from '../../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Material You/Dialog/Dialog',
    component: MdDialog,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        open: {
            control: 'boolean',
            defaultValue: false,
            description: 'Opens the dialog.',
        },
        returnValue: {
            control: 'text',
            description:
                "Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue",
        },
        type: {
            control: 'text',
            description:
                'The type of dialog for accessibility. Set this to `alert` to announce a dialog as an `alert` dialog.',
        },
        getOpenAnimation: {
            control: 'function',
            description: 'Gets the opening animation for a dialog. Set to a new function to customize the animation.',
        },
        getCloseAnimation: {
            control: 'function',
            description: 'Gets the closing animation for a dialog. Set to a new function to customize the animation.',
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
} satisfies Meta<MdDialogProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Detault: Story = {
    args: {},
    render: ({ ...props }) => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <MdFilledButton onClick={() => setOpen(true)}>Open Dialog</MdFilledButton>
                <MdDialog open={open} onClose={() => setOpen(false)} {...props}>
                    <div slot="headline">Dialog Title</div>
                    <div slot="content">Dialog content</div>
                    <div slot="actions">
                        <MdTextButton onClick={() => setOpen(false)}>Cancel</MdTextButton>
                        <MdTextButton onClick={() => setOpen(false)} type="submit">
                            Ok
                        </MdTextButton>
                    </div>
                </MdDialog>
            </>
        )
    },
}

export const WithRef: Story = {
    args: {},
    render: ({ ...props }) => {
        const ref = React.useRef<MdDialogElement>(null)
        const formRef = React.useRef<HTMLFormElement>(null)

        return (
            <>
                <MdFilledButton
                    onClick={() => {
                        ref.current?.show()
                    }}
                >
                    Open Dialog
                </MdFilledButton>
                <MdDialog
                    ref={ref}
                    {...props}
                    onClose={() => {
                        console.log('onClose')
                    }}
                    onOpen={() => {
                        console.log('onOpen')
                    }}
                    onCancel={(e: Event) => {
                        console.log('onCancel', e)
                    }}
                >
                    <div slot="headline">Dialog Title</div>
                    <form id="form" slot="content" method="dialog" ref={formRef}>
                        Dialog content
                    </form>
                    <div slot="actions">
                        <MdTextButton
                            onClick={() => {
                                ref.current?.close('cancel')
                            }}
                        >
                            Cancel
                        </MdTextButton>
                        <MdTextButton type="submit" value="ok" onClick={() => ref.current?.close('ok')}>
                            Ok
                        </MdTextButton>
                    </div>
                </MdDialog>
            </>
        )
    },
}

export const HeaderIcon: Story = {
    args: {},
    render: ({ ...props }) => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <MdFilledButton onClick={() => setOpen(true)}>Open Dialog</MdFilledButton>
                <MdDialog open={open} onClose={() => setOpen(false)} {...props}>
                    <div slot="headline">
                        <MdIcon slot="icon">settings</MdIcon>
                        Dialog Title
                    </div>
                    <div slot="content">Dialog content</div>
                    <div slot="actions">
                        <MdTextButton onClick={() => setOpen(false)}>Cancel</MdTextButton>
                        <MdTextButton onClick={() => setOpen(false)} type="submit">
                            Ok
                        </MdTextButton>
                    </div>
                </MdDialog>
            </>
        )
    },
}
