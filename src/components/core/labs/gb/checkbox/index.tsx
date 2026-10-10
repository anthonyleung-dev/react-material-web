'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { CheckboxElement as _MdGbCheckbox } from '@material/web/labs/gb/components/checkbox/checkbox-element.js'
import '@material/web/labs/gb/components/checkbox/md-gb-checkbox.js'

/**
 * Props for the `MdGbCheckbox` component.
 * This interface is used to provide the props for the `MdGbCheckbox` component.
 *
 */
export type MdGbCheckboxProps = ComponentProps<typeof MdGbCheckbox>

export interface MdGbCheckboxElement extends _MdGbCheckbox {}

/**
 * Material Design expressive checkbox.
 * This component is a React wrapper around the `md-gb-checkbox` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} checked - Whether or not the checkbox is selected.
 * @param {boolean} defaultChecked - The checked state restored on form reset (the `checked` attribute).
 * @param {boolean} indeterminate - Whether or not the checkbox is indeterminate.
 * @param {boolean} error - Whether or not the checkbox shows an error state.
 * @param {boolean} disabled - Whether or not the checkbox is disabled.
 * @param {boolean} required - When true, require the checkbox to be selected when participating in form submission.
 * @param {string} value - The value submitted with the form when selected.
 * @param {string} name - The name used when the element participates in form submission.
 * @param {HTMLFormElement} form - The associated form element.
 * @param {(event: InputEvent) => void} onInput - Fires when the checked state changes.
 * @param {(event: Event) => void} onChange - Fires when the checked state changes.
 *
 * @example
 * ```tsx
 *   <MdGbCheckbox checked />
 * ```
 */
export const MdGbCheckbox = createComponent({
    react: React,
    tagName: 'md-gb-checkbox',
    elementClass: _MdGbCheckbox,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
