import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdFocusRing as _MdFocusRing } from '@material/web/focus/md-focus-ring'

/**
 * Props for the `MdFocusRing` component.
 * This interface is used to provide the props for the `MdFocusRing` component.
 *
 */
export type MdFocusRingProps = ComponentProps<typeof MdFocusRing>

export interface MdFocusRingElement extends _MdFocusRing {}

/**
 * Material Design FocusRing component.
 * This component is a React wrapper around the `md-focus-ring` custom element.
 *
 * @component
 * @param {boolean} visible - Makes the focus ring visible.
 * @param {boolean} inward - Makes the focus ring animate inwards instead of outwards.
 * @param {string} htmlFor - The id of the input element that the focus ring should be associated with.
 * @param {HTMLElement} control - The input element that the focus ring should be associated with.
 * 
 * Methods:
 * - `attach(control: HTMLElement): void` - Attaches the focus ring to the given control.
 * - `detach(): void` - Detaches the focus ring from the control.
 * 
 * @example
 * ``` tsx
 * import React, { useRef } from 'react'
 * import { MdFocusRing } from 'react-material-web'
 * 
 * export const Detault = () => {
 *  return (
 *      <>
 *        <button style={{position: 'relative', zIndex: 1}}>
 *              <MdFocusRing />
 *              Click me
 *        </button>
 *     </>
 * )}
 * ```
 */
export const MdFocusRing = createComponent({
    react: React,
    tagName: 'md-focus-ring',
    elementClass: _MdFocusRing,
})
