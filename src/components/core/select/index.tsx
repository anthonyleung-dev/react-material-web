import { createComponent } from '@lit/react'
import React from 'react'

import { MdFilledSelect as _MdFilledSelect } from '@material/web/select/filled-select.js'
import { MdOutlinedSelect as _MdOutlinedSelect } from '@material/web/select/outlined-select.js'
import { MdSelectOption as _MdSelectOption } from '@material/web/select/select-option.js'

/**
 * Props for the `MdFilledSelect` component.
 * This interface is used to provide the props for the `MdFilledSelect` component.
 *
 */
export type MdFilledSelectProps = React.ComponentProps<typeof MdFilledSelect>

/**
 * Props for the `MdOutlinedSelect` component.
 * This interface is used to provide the props for the `MdOutlinedSelect` component.
 *
 */
export type MdOutlinedSelectProps = React.ComponentProps<typeof MdOutlinedSelect>

/**
 * Props for the `MdSelectOption` component.
 * This interface is used to provide the props for the `MdSelectOption` component.
 *
 */
export type MdSelectOptionProps = React.ComponentProps<typeof MdSelectOption>

export interface MdFilledSelectElement extends _MdFilledSelect {}

export interface MdOutlinedSelectElement extends _MdOutlinedSelect {}

export interface MdSelectOptionElement extends _MdSelectOption {}

/**
 * Material Design Filled Select component.
 * This component is a React wrapper around the `md-filled-select` custom element.
 *
 * @component
 * @param {boolean} quick - Opens the menu synchronously with no animation.
 * @param {boolean} required - Whether or not the select is required.
 * @param {boolean} disabled - Disables the select.
 * @param {string} errorText - Gets or sets whether or not the select is in a visually invalid state. This error state overrides the error state controlled by `reportValidity()`.
 * @param {string} label - The floating label for the field.
 * @param {string} supportingText - Conveys additional information below the select, such as how it should be used.
 * @param {boolean} error - Gets or sets whether or not the select is in a visually invalid state. This error state overrides the error state controlled by `reportValidity()`.
 * @param {string} menuPositioning - Whether or not the underlying `md-menu` should be `position: fixed` to display in a top-level manner, or `position: absolute`.
 * @param {number} typeaheadDelay - The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
 * @param {boolean} hasLeadingIcon - Whether or not the text field has a leading icon. Used for SSR.
 * @param {string} displayText - Text to display in the field. Only set for SSR.
 * @param {string} value - The value of the select.
 * @param {number} selectedIndex - The index of the selected option.
 * @param {SelectOption[]} options - The options for the select.
 * @param {SelectOption[]} selectedOptions - The selected options for the select.
 * @param {string} name - The name of the select.
 * @param {HTMLFormElement} form - The form element that the select is in.
 * @param {NodeList} labels - The labels for the select.
 * @param {ValidityState} validity - The validity state of the select.
 * @param {string} validationMessage - The validation message of the select.
 * @param {boolean} willValidate - Whether or not the select will be validated.
 *
 * Methods:
 * - `select(value: string): void` - Selects an option given the value of the option, and updates MdSelect's value.
 * - `selectIndex(index: number): void` - Selects an option given the index of the option, and updates MdSelect's value.
 * - `reset(): void` - Reset the select to its default value.
 * - `checkValidity(): boolean` - Checks the select's native validation and returns whether or not the element is valid. If invalid, this method will dispatch the invalid event.
 * - `reportValidity(): boolean` - Checks the select's native validation and returns whether or not the element is valid. If invalid, this method will dispatch the invalid event. This method will display or clear an error text message equal to the select's validationMessage, unless the invalid event is canceled. Use setCustomValidity() to customize the validationMessage. This method can also be used to re-announce error messages to screen readers.
 * - `setCustomValidity(error: string): void` - Sets the select's native validation error message. This is used to customize validationMessage. When the error is not an empty string, the select is considered invalid and validity.customError will be true.
 * - `getUpdateComplete(): Promise<boolean>` -
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdFilledSelect, MdSelectOption } from 'react-material-web'
 *
 * export const FilledSelectExample = () => {
 *    return (
 *       <MdFilledSelect>
 *         <MdSelectOption value="apple"><div slot="headline">Apple</div></MdSelectOption>
 *         <MdSelectOption value="banana"><div slot="headline">Banana</div></MdSelectOption>
 *       </MdFilledSelect>
 *   )
 * }
 * ```
 */
export const MdFilledSelect = createComponent({
    react: React,
    tagName: 'md-filled-select',
    elementClass: _MdFilledSelect,
    events: {
        onInput: 'input',
        onChange: 'change',
        onOpening: 'opening',
        onOpened: 'opened',
        onClosing: 'closing',
        onClosed: 'closed',
    },
})

/**
 * Material Design Outlined Select component.
 * This component is a React wrapper around the `md-outlined-select` custom element.
 *
 * @component
 * @param {boolean} quick - Opens the menu synchronously with no animation.
 * @param {boolean} required - Whether or not the select is required.
 * @param {boolean} disabled - Disables the select.
 * @param {string} errorText - Gets or sets whether or not the select is in a visually invalid state. This error state overrides the error state controlled by `reportValidity()`.
 * @param {string} label - The floating label for the field.
 * @param {string} supportingText - Conveys additional information below the select, such as how it should be used.
 * @param {boolean} error - Gets or sets whether or not the select is in a visually invalid state. This error state overrides the error state controlled by `reportValidity()`.
 * @param {string} menuPositioning - Whether or not the underlying `md-menu` should be `position: fixed` to display in a top-level manner, or `position: absolute`.
 * @param {number} typeaheadDelay - The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
 * @param {boolean} hasLeadingIcon - Whether or not the text field has a leading icon. Used for SSR.
 * @param {string} displayText - Text to display in the field. Only set for SSR.
 * @param {string} value - The value of the select.
 * @param {number} selectedIndex - The index of the selected option.
 * @param {SelectOption[]} options - The options for the select.
 * @param {SelectOption[]} selectedOptions - The selected options for the select.
 * @param {string} name - The name of the select.
 * @param {HTMLFormElement} form - The form element that the select is in.
 * @param {NodeList} labels - The labels for the select.
 * @param {ValidityState} validity - The validity state of the select.
 * @param {string} validationMessage - The validation message of the select.
 * @param {boolean} willValidate - Whether or not the select will be validated.
 *
 * Methods:
 * - `select(value: string): void` - Selects an option given the value of the option, and updates MdSelect's value.
 * - `selectIndex(index: number): void` - Selects an option given the index of the option, and updates MdSelect's value.
 * - `reset(): void` - Reset the select to its default value.
 * - `checkValidity(): boolean` - Checks the select's native validation and returns whether or not the element is valid. If invalid, this method will dispatch the invalid event.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdOutlinedSelect, MdSelectOption } from 'react-material-web'
 *
 * export const OutlinedSelectExample = () => {
 *   return (
 *    <MdOutlinedSelect>
 *     <MdSelectOption value="apple"><div slot="headline">Apple</div></MdSelectOption>
 *     <MdSelectOption value="banana"><div slot="headline">Banana</div></MdSelectOption>
 *    </MdOutlinedSelect>
 * )
 * }
 * ```
 */
export const MdOutlinedSelect = createComponent({
    react: React,
    tagName: 'md-outlined-select',
    elementClass: _MdOutlinedSelect,
    events: {
        onInput: 'input',
        onChange: 'change',
        onOpening: 'opening',
        onOpened: 'opened',
        onClosing: 'closing',
        onClosed: 'closed',
    },
})

/**
 * Material Design Select Option component.
 * This component is a React wrapper around the `md-select-option` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the item and makes it non-selectable and non-interactive.
 * @param {boolean} selected - Sets the item in the selected visual state when a submenu is opened.
 * @param {string} value - Form value of the option.
 * @param {string} type - The type of the option.
 * @param {string} typeaheadText - The text to use for typeahead.
 * @param {string} displayText - The text to display.
 *
 */
export const MdSelectOption = createComponent({
    react: React,
    tagName: 'md-select-option',
    elementClass: _MdSelectOption,
    events: {
        onCloseMenu: 'close-menu',
        onRequestSelection: 'request-selection',
        onRequestDeselection: 'request-deselection',
    },
})
