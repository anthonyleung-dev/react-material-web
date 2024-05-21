'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdDialog as _MdDialog } from '@material/web/dialog/dialog.js'
import { DialogAnimation } from '@material/web/dialog/internal/animations'

/**
 * Props for the `MdDialog` component.
 * This interface is used to provide the props for the `MdDialog` component.
 *
 */
export type MdDialogProps = ComponentProps<typeof MdDialog>

export interface MdDialogElement extends _MdDialog {}

/**
 * Material Design Dialog component.
 * This component is a React wrapper around the `md-dialog` custom element.
 *
 * @component
 * @param {boolean} open - Opens the dialog.
 * @param {string} returnValue - Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue
 * @param {string} type - The type of dialog for accessibility. Set this to `alert` to announce a dialog as an `alert` dialog.
 * @param {() => DialogAnimation} getOpenAnimation - Gets the opening animation for a dialog. Set to a new function to customize the animation.
 * @param {() => DialogAnimation} getCloseAnimation - Gets the closing animation for a dialog. Set to a new function to customize the animation.
 *
 * Methods:
 * - `show() => Promise<void>` - Opens the dialog and fires a cancelable open event. After a dialog's animation, an opened event is fired. Add an autocomplete attribute to a child of the dialog that should receive focus after opening.
 * - `close(returnValue: string) => Promise<void>` - Closes the dialog and fires a cancelable close event. After a dialog's animation, a closed event is fired.
 *
 *
 * @example
 * ``` tsx
 * import React, { useState } from 'react'
 * import { MdDialog, MdDialogElement, MdFilledButton, MdTextButton } from 'react-material-web'
 *
 * export const Detault = () => {
 *  const [open, setOpen] = useState(false)
 *  return (
 *  <>
 *      <MdButton onClick={() => setOpen(true)}>Open Dialog</MdButton>
 *      <MdDialog open={open} onClose={() => setOpen(false)}>
 *          <div slot="headline">Dialog Title</div>
 *          <div slot="content">Dialog content</div>
 *          <div slot="actions">
 *              <MdTextButton onClick={() => setOpen(false)}>Cancel</MdTextButton>
 *              <MdTextButton type="submit">Ok</MdTextButton>
 *          </div>
 *      </MdDialog>
 *  </>)}
 * ```
 * 
 * @example
 * ``` tsx
 * import React, { useState } from 'react'
 * import { MdDialog, MdDialogElement, MdFilledButton, MdTextButton } from 'react-material-web'
 *
 * export const Detault = () => {
 *     const ref = useRef<MdDialogElement>(null)
 *     return (
 *         <>
 *             <MdFilledButton
 *                 onClick={() => {
 *                     ref.current?.show()
 *                 }}
 *             >
 *                 Open Dialog
 *             </MdFilledButton>
 *             <MdDialog ref={ref}>
 *                 <div slot="headline">Dialog Title</div>
 *                 <div slot="content">Dialog content</div>
 *                 <div slot="actions">
 *                     <MdTextButton
 *                         onClick={() => {
 *                             ref.current?.close('cancel')
 *                         }}
 *                     >
 *                         Cancel
 *                     </MdTextButton>
 *                     <MdTextButton type="submit">Ok</MdTextButton>
 *                 </div>
 *             </MdDialog>
 *         </>
 *     )
 * }
 * ```
 */
export const MdDialog = createComponent({
    react: React,
    tagName: 'md-dialog',
    elementClass: _MdDialog,
    events: {
        onOpen: 'open',
        onOpened: 'opened',
        onClose: 'close',
        onClosed: 'closed',
        onCancel: 'cancel',
    },
})
