'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdAssistChip as _MdAssistChip } from '@material/web/chips/assist-chip'
import { MdChipSet as _MdChipSet } from '@material/web/chips/chip-set'
import { MdFilterChip as _MdFilterChip } from '@material/web/chips/filter-chip'
import { MdInputChip as _MdInputChip } from '@material/web/chips//input-chip'
import { MdSuggestionChip as _MdSuggestionChip } from '@material/web/chips/suggestion-chip'
import { Chip } from '@material/web/chips/internal/chip'

/**
 * Props for the `MdAssistChip` component.
 * This interface is used to provide the props for the `MdAssistChip` component.
 *
 */
export type MdAssistChipProps = ComponentProps<typeof MdAssistChip>

/**
 * Props for the `MdChipSet` component.
 * This interface is used to provide the props for the `MdChipSet` component.
 *
 */
export type MdChipSetProps = ComponentProps<typeof MdChipSet>

/**
 * Props for the `MdFilterChip` component.
 * This interface is used to provide the props for the `MdFilterChip` component.
 *
 */
export type MdFilterChipProps = ComponentProps<typeof MdFilterChip>

/**
 * Props for the `MdInputChip` component.
 * This interface is used to provide the props for the `MdInputChip` component.
 *
 */
export type MdInputChipProps = ComponentProps<typeof MdInputChip>

/**
 * Props for the `MdSuggestionChip` component.
 * This interface is used to provide the props for the `MdSuggestionChip` component.
 *
 */
export type MdSuggestionChipProps = ComponentProps<typeof MdSuggestionChip>

export interface MdAssistChipElement extends _MdAssistChip {}

export interface MdChipSetElement extends _MdChipSet {}

export interface MdFilterChipElement extends _MdFilterChip {}

export interface MdInputChipElement extends _MdInputChip {}

export interface MdSuggestionChipElement extends _MdSuggestionChip {}

/**
 * Material Design Chip Set component.
 * This component is a React wrapper around the `md-chip-set` custom element.
 *
 * @component
 * @param {Chip} chips - The chips in the chip set.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdChipSet, MdAssistChip } from 'react-material-web'
 *
 * export const MdChipSetDemo = () => {
 *    return (
 *       <MdChipSet>
 *         <MdAssistChip label="Assist Chip" />
 *      </MdChipSet>
 *   )
 * }
 * ```
 */
export const MdChipSet = createComponent({
    react: React,
    tagName: 'md-chip-set',
    elementClass: _MdChipSet,
})

/**
 * Material Design Filter Chip component.
 * This component is a React wrapper around the `md-filter-chip` custom element.
 *
 * @component
 * @param {boolean} elevated - Whether or not the chip is elevated.
 * @param {boolean} removable - Whether or not the chip is removable.
 * @param {boolean} selected - Whether or not the chip is selected.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {boolean} disabled - Whether or not the chip is disabled. Disabled chips are not focusable, unless always-focusable is set.
 * @param {boolean} alwaysFocusable - (Deprecated: Use `softDisabled` instead of `alwaysFocusable` + `disabled`.) When true, allow disabled chips to be focused with arrow keys. Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} label - (Deprecated: Set text as content of the chip instead.) The label of the chip.
 * @param {() => void} handleTrailingActionFocus - Callback for when the trailing action is focused.
 * @param {string} ariaLabelRemove - Aria label for the remove button.
 */
export const MdFilterChip = createComponent({
    react: React,
    tagName: 'md-filter-chip',
    elementClass: _MdFilterChip,
})

/**
 * Material Design Input Chip component.
 * This component is a React wrapper around the `md-input-chip` custom element.
 *
 * @component
 * @param {React.ReactNode} children - The children of the chip.
 * @param {boolean} avatar - Whether or not the chip has an avatar.
 * @param {string} href - The URL that the chip links to.
 * @param {string} target - The target of the link.(e.g. _blank, _self, _parent, _top
 * @param {boolean} removeOnly - Whether or not the chip is remove only.
 * @param {boolean} selected - Whether or not the chip is selected.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {boolean} disabled - Whether or not the chip is disabled. Disabled chips are not focusable, unless always-focusable is set.
 * @param {boolean} alwaysFocusable - (Deprecated: Use `softDisabled` instead of `alwaysFocusable` + `disabled`.) When true, allow disabled chips to be focused with arrow keys. Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} label - (Deprecated: Set text as content of the chip instead.) The label of the chip.
 * @param {() => void} handleTrailingActionFocus - Callback for when the trailing action is focused.
 * @param {string} ariaLabelRemove - Aria label for the remove button.
 */
export const MdInputChip = createComponent({
    react: React,
    tagName: 'md-input-chip',
    elementClass: _MdInputChip,
})

/**
 * Material Design Suggestion Chip component.
 * This component is a React wrapper around the `md-suggestion-chip` custom element.
 *
 * @component
 * @param {boolean} elevated - Whether or not the chip is elevated.
 * @param {string} href - The URL that the chip links to.
 * @param {string} target - The target of the link.(e.g. _blank, _self, _parent, _top
 * @param {boolean} disabled - Whether or not the chip is disabled. Disabled chips are not focusable, unless always-focusable is set.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {boolean} alwaysFocusable - (Deprecated: Use `softDisabled` instead of `alwaysFocusable` + `disabled`.) When true, allow disabled chips to be focused with arrow keys. Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} label - (Deprecated: Set text as content of the chip instead.) The label of the chip.
 */
export const MdSuggestionChip = createComponent({
    react: React,
    tagName: 'md-suggestion-chip',
    elementClass: _MdSuggestionChip,
})

/**
 * Material Design Assist Chip component.
 * This component is a React wrapper around the `md-assist-chip` custom element.
 *
 * @component
 * @param {boolean} elevated - Whether or not the chip is elevated.
 * @param {string} href - The URL that the chip links to.
 * @param {string} target - The target of the link.(e.g. _blank, _self, _parent, _top
 * @param {boolean} disabled - Whether or not the chip is disabled. Disabled chips are not focusable, unless always-focusable is set.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {boolean} alwaysFocusable - (Deprecated: Use `softDisabled` instead of `alwaysFocusable` + `disabled`.) When true, allow disabled chips to be focused with arrow keys. Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} label - (Deprecated: Set text as content of the chip instead.) The label of the chip.
 */
export const MdAssistChip = createComponent({
    react: React,
    tagName: 'md-assist-chip',
    elementClass: _MdAssistChip,
})
