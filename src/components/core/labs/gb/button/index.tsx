'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { ButtonElement as _MdGbButton } from '@material/web/labs/gb/components/button/button-element.js'
import '@material/web/labs/gb/components/button/md-gb-button.js'

/**
 * Props for the `MdGbButton` component.
 * This interface is used to provide the props for the `MdGbButton` component.
 *
 */
export type MdGbButtonProps = ComponentProps<typeof MdGbButton>

export interface MdGbButtonElement extends _MdGbButton {}

/**
 * Material Design expressive button. Put the label and an optional `MdGbIcon` in the children.
 * This component is a React wrapper around the `md-gb-button` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {'filled' | 'elevated' | 'tonal' | 'outlined' | 'text'} color - The button color style.
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} size - The button size.
 * @param {boolean} square - Whether the button uses a square shape instead of a round one.
 * @param {string} type - The button type: "submit" (default), "reset", "button" or "toggle". It reads "link" when `href` is set.
 * @param {boolean} disabled - Whether or not the button is disabled.
 * @param {boolean} softDisabled - Whether the button is disabled but still focusable.
 * @param {boolean} selected - Whether a toggle button is selected.
 * @param {string} href - The URL that the link button points to.
 * @param {string} download - The file name to download for a link button.
 * @param {string} target - Where to display the linked `href` URL.
 * @param {string} value - The value submitted with the form.
 * @param {string} name - The name used when the element participates in form submission.
 * @param {HTMLFormElement} form - The associated form element.
 * @param {(event: InputEvent) => void} onInput - Fires when a toggle button changes its selected state.
 * @param {(event: Event) => void} onChange - Fires when a toggle button changes its selected state.
 *
 * @example
 * ```tsx
 *   <MdGbButton color="filled" size="md">Label</MdGbButton>
 * ```
 */
export const MdGbButton = createComponent({
    react: React,
    tagName: 'md-gb-button',
    elementClass: _MdGbButton,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
