'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdSwitch as _MdSwitch } from '@material/web/switch/switch.js'

/**
 * Props for the `MdSwitch` component.
 * This interface is used to provide the props for the `MdSwitch` component.
 *
 */
export type MdSwitchProps = ComponentProps<typeof MdSwitch>

export interface MdSwitchElement extends _MdSwitch {}

/**
 * Material Design Switch component.
 * This component is a React wrapper around the `md-switch` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the switch and makes it non-interactive.
 * @param {boolean} selected - Puts the switch in the selected state and sets the form submission value to the value property.
 * @param {boolean} icons - Shows both the selected and deselected icons.
 * @param {boolean} showOnlySelectedIcon - Shows only the selected icon, and not the deselected icon. If true, overrides the behavior of the icons property.
 * @param {boolean} required - When true, require the switch to be selected when participating in form submission.
 * @param {string} value - The value associated with this switch on form submission. null is submitted when selected is false.
 * @param {string} name - The name of the switch.
 * @param {HTMLFormElement} form - The form element that the switch is associated with.
 * @param {NodeList} labels - The labels associated with the switch.
 * @param {ValidityState} validity - The validity state of the switch.
 * @param {string} validationMessage - The validation message of the switch.
 * @param {boolean} willValidate - Whether or not the switch will be validated.
 *
 * Methods:
 * - `checkValidity()`: Checks the switch's native validation and returns whether or not the element is valid. If invalid, this method will dispatch the invalid event.
 * - `reportValidity()`: Checks the switch's native validation and returns whether or not the element is valid. If invalid, this method will dispatch the invalid event. The validationMessage is reported to the user by the browser. Use setCustomValidity() to customize the validationMessage.
 * - `setCustomValidity(error)`: Sets the switch's native validation error message. This is used to customize validationMessage. When the error is not an empty string, the switch is considered invalid and validity.customError will be true.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdSwitch } from 'react-material-web'
 *
 * function SwitchExample() {
 *    return <MdSwitch selected />
 * }
 * ```
 */
export const MdSwitch = createComponent({
    react: React,
    tagName: 'md-switch',
    elementClass: _MdSwitch,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
