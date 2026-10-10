'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { IconButtonElement as _MdGbIconButton } from '@material/web/labs/gb/components/iconbutton/icon-button-element.js'
import '@material/web/labs/gb/components/iconbutton/md-gb-icon-button.js'

/**
 * Props for the `MdGbIconButton` component.
 * This interface is used to provide the props for the `MdGbIconButton` component.
 *
 */
export type MdGbIconButtonProps = ComponentProps<typeof MdGbIconButton>

export interface MdGbIconButtonElement extends _MdGbIconButton {}

/**
 * Material Design expressive icon button. Put an `MdGbIcon` in the children.
 * This component is a React wrapper around the `md-gb-icon-button` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {'filled' | 'tonal' | 'outlined' | 'standard'} color - The icon button color style.
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} size - The icon button size.
 * @param {'narrow' | 'wide' | ''} width - The icon button width.
 * @param {boolean} square - Whether the icon button uses a square shape.
 * @param {string} type - The button type: "submit" (default), "reset", "button" or "toggle". It reads "link" when `href` is set.
 * @param {boolean} disabled - Whether or not the icon button is disabled.
 * @param {boolean} softDisabled - Whether the icon button is disabled but still focusable.
 * @param {boolean} selected - Whether a toggle icon button is selected.
 * @param {string} href - The URL that the link icon button points to.
 * @param {string} download - The file name to download for a link icon button.
 * @param {string} target - Where to display the linked `href` URL.
 * @param {string} value - The value submitted with the form.
 * @param {string} name - The name used when the element participates in form submission.
 * @param {HTMLFormElement} form - The associated form element.
 * @param {(event: InputEvent) => void} onInput - Fires when a toggle icon button changes its selected state.
 * @param {(event: Event) => void} onChange - Fires when a toggle icon button changes its selected state.
 *
 * @example
 * ```tsx
 *   <MdGbIconButton aria-label="Favorite">
 *     <MdGbIcon>favorite</MdGbIcon>
 *   </MdGbIconButton>
 * ```
 */
export const MdGbIconButton = createComponent({
    react: React,
    tagName: 'md-gb-icon-button',
    elementClass: _MdGbIconButton,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
