'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdCheckbox as _MdCheckbox } from '@material/web/checkbox/checkbox.js'

/**
 * Props for the `MdCheckbox` component.
 * This interface is used to provide the props for the `MdCheckbox` component.
 *
 */
export type MdCheckboxProps = ComponentProps<typeof MdCheckbox>

export interface MdCheckboxElement extends _MdCheckbox {}

/**
 * Material Design Checkbox component.
 * This component is a React wrapper around the `md-checkbox` custom element.
 *
 * @component
 * @param {boolean} checked - Whether or not the checkbox is selected.
 * @param {boolean} disabled - Whether or not the checkbox is disabled.
 * @param {boolean} indeterminate - Whether or not the checkbox is indeterminate.
 * @param {boolean} required - When true, require the checkbox to be selected when participating in form submission.
 * @param {string} value - The value of the checkbox that is submitted with a form when selected.
 * @param {string} name - The name of the checkbox.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {NodeList} labels - A NodeList of label elements that are associated with the checkbox.
 * @param {ValidityState} validity - The validity state of the checkbox.
 * @param {string} validationMessage - The validation message of the checkbox.
 * @param {boolean} willValidate - Whether or not the checkbox will be validated.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 */
export const MdCheckbox = createComponent({
    react: React,
    tagName: 'md-checkbox',
    elementClass: _MdCheckbox,
})
