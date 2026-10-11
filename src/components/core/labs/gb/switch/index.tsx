'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { SwitchElement as _MdGbSwitch } from '@material/web/labs/gb/components/switch/switch-element.js'
import '@material/web/labs/gb/components/switch/md-gb-switch.js'

/**
 * Props for the `MdGbSwitch` component.
 * This interface is used to provide the props for the `MdGbSwitch` component.
 *
 */
export type MdGbSwitchProps = ComponentProps<typeof MdGbSwitch>

export interface MdGbSwitchElement extends _MdGbSwitch {}

/**
 * Material Design expressive switch. Slots: `off-icon` and `on-icon`.
 * This component is a React wrapper around the `md-gb-switch` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} selected - Whether or not the switch is on.
 * @param {boolean} defaultSelected - The selected state restored on form reset (the `selected` attribute).
 * @param {boolean} disabled - Whether or not the switch is disabled.
 * @param {boolean} required - When true, require the switch to be on when participating in form submission.
 * @param {string} value - The value submitted with the form when on.
 * @param {string} name - The name used when the element participates in form submission.
 * @param {HTMLFormElement} form - The associated form element.
 * @param {(event: InputEvent) => void} onInput - Fires when the selected state changes.
 * @param {(event: Event) => void} onChange - Fires when the selected state changes.
 *
 * @example
 * ```tsx
 *   <MdGbSwitch selected />
 * ```
 */
export const MdGbSwitch = createComponent({
    react: React,
    tagName: 'md-gb-switch',
    elementClass: _MdGbSwitch,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
