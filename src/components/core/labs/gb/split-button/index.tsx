'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { SplitButtonElement as _MdGbSplitButton } from '@material/web/labs/gb/components/splitbutton/split-button-element.js'
import '@material/web/labs/gb/components/splitbutton/md-gb-split-button.js'

/**
 * Props for the `MdGbSplitButton` component.
 * This interface is used to provide the props for the `MdGbSplitButton` component.
 *
 */
export type MdGbSplitButtonProps = ComponentProps<typeof MdGbSplitButton>

export interface MdGbSplitButtonElement extends _MdGbSplitButton {}

/**
 * Material Design expressive split button. Slots: `leading` takes the main `<button>`, `trailing` takes the menu `<button>` with a `popovertarget`, and the default slot takes the `MdGbMenu`.
 * This component is a React wrapper around the `md-gb-split-button` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {'filled' | 'elevated' | 'tonal' | 'outlined'} color - The split button color style.
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} size - The split button size.
 * @param {boolean} selected - Whether the trailing button shows the selected (menu open) state.
 *
 * @example
 * ```tsx
 *   <MdGbSplitButton color="filled">
 *     <button slot="leading">Label</button>
 *     <button slot="trailing" aria-label="More" {...{ popovertarget: 'menu' }} />
 *     <MdGbMenu id="menu">
 *       <MdGbMenuItem>Option</MdGbMenuItem>
 *     </MdGbMenu>
 *   </MdGbSplitButton>
 * ```
 */
export const MdGbSplitButton = createComponent({
    react: React,
    tagName: 'md-gb-split-button',
    elementClass: _MdGbSplitButton,
})
