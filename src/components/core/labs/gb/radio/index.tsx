'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { RadioElement as _MdGbRadio } from '@material/web/labs/gb/components/radio/radio-element.js'
import '@material/web/labs/gb/components/radio/md-gb-radio.js'

/**
 * Props for the `MdGbRadio` component.
 * This interface is used to provide the props for the `MdGbRadio` component.
 *
 */
export type MdGbRadioProps = ComponentProps<typeof MdGbRadio>

export interface MdGbRadioElement extends _MdGbRadio {}

/**
 * Material Design expressive radio button. Radios with the same `name` form one group.
 * This component is a React wrapper around the `md-gb-radio` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} checked - Whether or not the radio is selected.
 * @param {boolean} defaultChecked - The checked state restored on form reset (the `checked` attribute).
 * @param {boolean} disabled - Whether or not the radio is disabled.
 * @param {boolean} required - When true, require a radio in the group to be selected.
 * @param {string} value - The value submitted with the form when selected.
 * @param {string} name - The name used when the element participates in form submission.
 * @param {HTMLFormElement} form - The associated form element.
 * @param {(event: InputEvent) => void} onInput - Fires when the radio becomes selected.
 * @param {(event: Event) => void} onChange - Fires when the radio becomes selected.
 *
 * @example
 * ```tsx
 *   <MdGbRadio name="pet" value="cat" checked />
 *   <MdGbRadio name="pet" value="dog" />
 * ```
 */
export const MdGbRadio = createComponent({
    react: React,
    tagName: 'md-gb-radio',
    elementClass: _MdGbRadio,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
