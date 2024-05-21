'use client'

import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdFilledTextField as _MdFilledTextField } from '@material/web/textfield/filled-text-field.js'
import { MdOutlinedTextField as _MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js'

export type MdFilledTextFieldProps = ComponentProps<typeof MdFilledTextField>

export type MdOutlinedTextFieldProps = ComponentProps<typeof MdOutlinedTextField>

export interface MdFilledTextFieldElement extends _MdFilledTextField {}

export interface MdOutlinedTextFieldElement extends _MdOutlinedTextField {}

/**
 * Material Design Filled Text Field
 * This component is a React wrapper around the `md-filled-text-field` custom element.
 *
 * @component
 * @param {ReactNode} disabled - Whether or not the text field is disabled.
 * @param {boolean} error - Whether or not the text field is in a visually invalid state.
 * @param {string} errorText - The error message that replaces supporting text when error is true. If errorText is an empty string, then the supporting text will continue to show.
 * @param {string} label - The label of the text field.
 * @param {boolean} required - Whether or not the text field is required.
 * @param {string} value - The current value of the text field. It is always a string.
 * @param {string} prefixText - An optional prefix to display before the input value.
 * @param {string} suffixText - An optional suffix to display after the input value.
 * @param {boolean} hasLeadingIcon - Whether or not the text field has a leading icon. Used for SSR.
 * @param {boolean} hasTrailingIcon - Whether or not the text field has a trailing icon. Used for SSR.
 * @param {string} supportingText - Conveys additional information below the text field, such as how it should be used.
 * @param {string} textDirection - Override the input text CSS direction. Useful for RTL languages that use LTR notation for fractions.
 * @param {number} rows - The number of rows to display for a type="textarea" text field. Defaults to 2.
 * @param {number} cols - The number of cols to display for a type="textarea" text field. Defaults to 20.
 * @param {string} inputMode - Returns or sets the element's inputmode attribute, which defines what kind of input mechanism would be most helpful for users entering content into the field.
 * @param {string} max - Defines the greatest value in the range of permitted values.
 * @param {number} maxLength - The maximum number of characters a user can enter into the text field. Set to -1 for none.
 * @param {string} min - Defines the most negative value in the range of permitted values.
 * @param {number} minLength - The minimum number of characters a user can enter into the text field. Set to -1 for none.
 * @param {string} pattern - A regular expression that the text field's value must match to pass constraint validation.
 * @param {string} placeholder - The placeholder text of the text field.
 * @param {boolean} readOnly - Indicates whether or not a user should be able to edit the text field's value.
 * @param {boolean} multiple - Indicates that input accepts multiple email addresses.
 * @param {string} step - Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
 * @param {string} type - The <input> type to use, defaults to "text". The type greatly changes how the text field behaves.
 * @param {string} autocomplete - Describes what, if any, type of autocomplete functionality the input should provide.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {NodeList} labels - The labels associated with the text field.
 * @param {string} name - The name of the text field.
 * @param {string} selectionDirection - The direction in which the text field's selection is expanding.
 * @param {number} selectionEnd - The end position of the text field's selection.
 * @param {number} selectionStart - The start position of the text field's selection.
 * @param {string} validationMessage - The text field's validation message.
 * @param {ValidityState} validity - The text field's validity state.
 * @param {number} valueAsNumber - The text field's value as a number.
 * @param {Date} valueAsDate - The text field's value as a date.
 * @param {boolean} willValidate - Whether or not the text field will be validated.
 *
 * Methods:
 * - `checkValidity(): boolean` - Checks the text field's native validation and returns whether or not the element is valid.
 * - `reportValidity(): boolean` - Checks the text field's native validation and returns whether or not the element is valid.
 * - `select(): void` - Selects all the text in the text field.
 * - `setCustomValidity(error: string): void` - Sets a custom validation error message for the text field. Use this for custom error message.
 * - `setRangeText(args): void`
 * - `setSelectionRange(start: number, end: number, direction: string): void` - Sets the start and end positions of a selection in the text field.
 * - `stepDown(stepDecrement): void` - Decrements the value of a numeric type text field by step or n step number of times.
 * - `stepUp(stepIncrement): void` - Increments the value of a numeric type text field by step or n step number of times.
 * - `reset(): void` - Reset the text field to its default value.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdFilledTextField } from 'react-material-web'
 *
 * const FilledTextField = () => (
 *    <MdFilledTextField label="Filled Text Field" />
 * )
 *```
 *
 */
export const MdFilledTextField = createComponent({
    react: React,
    tagName: 'md-filled-text-field',
    elementClass: _MdFilledTextField,
    events: {
        onChange: 'change',
        onSelect: 'select',
        onInput: 'input',
    },
})

/**
 * Material Design Outlined Text Field
 * This component is a React wrapper around the `md-outlined-text-field` custom element.
 *
 * @component
 * @param {ReactNode} disabled - Whether or not the text field is disabled.
 * @param {boolean} error - Whether or not the text field is in a visually invalid state.
 * @param {string} errorText - The error message that replaces supporting text when error is true. If errorText is an empty string, then the supporting text will continue to show.
 * @param {string} label - The label of the text field.
 * @param {boolean} required - Whether or not the text field is required.
 * @param {string} value - The current value of the text field. It is always a string.
 * @param {string} prefixText - An optional prefix to display before the input value.
 * @param {string} suffixText - An optional suffix to display after the input value.
 * @param {boolean} hasLeadingIcon - Whether or not the text field has a leading icon. Used for SSR.
 * @param {boolean} hasTrailingIcon - Whether or not the text field has a trailing icon. Used for SSR.
 * @param {string} supportingText - Conveys additional information below the text field, such as how it should be used.
 * @param {string} textDirection - Override the input text CSS direction. Useful for RTL languages that use LTR notation for fractions.
 * @param {number} rows - The number of rows to display for a type="textarea" text field. Defaults to 2.
 * @param {number} cols - The number of cols to display for a type="textarea" text field. Defaults to 20.
 * @param {string} inputMode - Returns or sets the element's inputmode attribute, which defines what kind of input mechanism would be most helpful for users entering content into the field.
 * @param {string} max - Defines the greatest value in the range of permitted values.
 * @param {number} maxLength - The maximum number of characters a user can enter into the text field. Set to -1 for none.
 * @param {string} min - Defines the most negative value in the range of permitted values.
 * @param {number} minLength - The minimum number of characters a user can enter into the text field. Set to -1 for none.
 * @param {string} pattern - A regular expression that the text field's value must match to pass constraint validation.
 * @param {string} placeholder - The placeholder text of the text field.
 * @param {boolean} readOnly - Indicates whether or not a user should be able to edit the text field's value.
 * @param {boolean} multiple - Indicates that input accepts multiple email addresses.
 * @param {string} step - Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
 * @param {string} type - The <input> type to use, defaults to "text". The type greatly changes how the text field behaves.
 * @param {string} autocomplete - Describes what, if any, type of autocomplete functionality the input should provide.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {NodeList} labels - The labels associated with the text field.
 * @param {string} name - The name of the text field.
 * @param {string} selectionDirection - The direction in which the text field's selection is expanding.
 * @param {number} selectionEnd - The end position of the text field's selection.
 * @param {number} selectionStart - The start position of the text field's selection.
 * @param {string} validationMessage - The text field's validation message.
 * @param {ValidityState} validity - The text field's validity state.
 * @param {number} valueAsNumber - The text field's value as a number.
 * @param {Date} valueAsDate - The text field's value as a date.
 * @param {boolean} willValidate - Whether or not the text field will be validated.
 *
 * Methods:
 * - `checkValidity(): boolean` - Checks the text field's native validation and returns whether or not the element is valid.
 * - `reportValidity(): boolean` - Checks the text field's native validation and returns whether or not the element is valid.
 * - `select(): void` - Selects all the text in the text field.
 * - `setCustomValidity(error: string): void` - Sets a custom validation error message for the text field. Use this for custom error message.
 * - `setRangeText(args): void`
 * - `setSelectionRange(start: number, end: number, direction: string): void` - Sets the start and end positions of a selection in the text field.
 * - `stepDown(stepDecrement): void` - Decrements the value of a numeric type text field by step or n step number of times.
 * - `stepUp(stepIncrement): void` - Increments the value of a numeric type text field by step or n step number of times.
 * - `reset(): void` - Reset the text field to its default value.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdOutlinedTextField } from 'react-material-web'
 *
 * const OutlinedTextField = () => (
 *   <MdOutlinedTextField label="Outlined Text Field" />
 * )
 * ```
 */
export const MdOutlinedTextField = createComponent({
    react: React,
    tagName: 'md-outlined-text-field',
    elementClass: _MdOutlinedTextField,
    events: {
        onChange: 'change',
        onSelect: 'select',
        onInput: 'input',
    },
})
