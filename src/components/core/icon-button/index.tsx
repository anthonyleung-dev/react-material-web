'use client'

import { MdIconButton as _MdIconButton } from '@material/web/iconbutton/icon-button.js'
import { MdFilledIconButton as _MdFilledIconButton } from '@material/web/iconbutton/filled-icon-button.js'
import { MdOutlinedIconButton as _MdOutlinedIconButton } from '@material/web/iconbutton/outlined-icon-button.js'
import { MdFilledTonalIconButton as _MdFilledTonalIconButton } from '@material/web/iconbutton/filled-tonal-icon-button.js'
import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'

/**
 * Props for the `MdIconButton` component.
 * This interface is used to provide the props for the `MdIconButton` component.
 *
 */
export type MdIconButtonProps = ComponentProps<typeof MdIconButton>

/**
 * Props for the `MdFilledIconButton` component.
 * This interface is used to provide the props for the `MdFilledIconButton` component.
 *
 */
export type MdFilledIconButtonProps = ComponentProps<typeof MdFilledIconButton>

/**
 * Props for the `MdOutlinedIconButton` component.
 * This interface is used to provide the props for the `MdOutlinedIconButton` component.
 *
 */
export type MdOutlinedIconButtonProps = ComponentProps<typeof MdOutlinedIconButton>

/**
 * Props for the `MdFilledTonalIconButton` component.
 * This interface is used to provide the props for the `MdFilledTonalIconButton` component.
 *
 */
export type MdFilledTonalIconButtonProps = ComponentProps<typeof MdFilledTonalIconButton>

export interface MdIconButtonElement extends _MdIconButton {}

export interface MdFilledIconButtonElement extends _MdFilledIconButton {}

export interface MdOutlinedIconButtonElement extends _MdOutlinedIconButton {}

export interface MdFilledTonalIconButtonElement extends _MdFilledTonalIconButton {}

/**
 * Material Design Icon Button component.
 * This component is a React wrapper around the `md-icon-button` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the button, making it non-interactive.
 * @param {boolean} flipIconInRtl - Flips the icon if in an RTL context at startup.
 * @param {string} href - Sets the underlying HTMLAnchorElement's href attribute.
 * @param {string} target - Sets the target attribute for the HTMLAnchorElement to define where to open the linked document.
 * @param {string} ariaLabelSelected - The aria-label of the button when it is toggleable and selected.
 * @param {boolean} toggle - When true, the button will toggle between selected and unselected states.
 * @param {boolean} selected - Sets the selected state. When false, displays the default icon; when true, displays the "selected" icon.
 * @param {string} type - The type attribute of the button (e.g., 'submit', 'reset', 'button').
 * @param {string} value - The value attribute of the button that gets sent when the form is submitted.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The form element that the button is associated with.
 * @param {NodeList} labels - A NodeList of label elements that are associated with the button.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdIconButton = createComponent({
    react: React,
    tagName: 'md-icon-button',
    elementClass: _MdIconButton,
    events: {},
})

/**
 * Material Design Filled Icon Button component.
 * This component is a React wrapper around the `md-filled-icon-button` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the button, making it non-interactive.
 * @param {boolean} flipIconInRtl - Flips the icon if in an RTL context at startup.
 * @param {string} href - Sets the underlying HTMLAnchorElement's href attribute.
 * @param {string} target - Sets the target attribute for the HTMLAnchorElement to define where to open the linked document.
 * @param {string} ariaLabelSelected - The aria-label of the button when it is toggleable and selected.
 * @param {boolean} toggle - When true, the button will toggle between selected and unselected states.
 * @param {boolean} selected - Sets the selected state. When false, displays the default icon; when true, displays the "selected" icon.
 * @param {string} type - The type attribute of the button (e.g., 'submit', 'reset', 'button').
 * @param {string} value - The value attribute of the button that gets sent when the form is submitted.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The form element that the button is associated with.
 * @param {NodeList} labels - A NodeList of label elements that are associated with the button.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdFilledIconButton = createComponent({
    react: React,
    tagName: 'md-filled-icon-button',
    elementClass: _MdFilledIconButton,
    events: {},
})

/**
 * Material Design Outlined Icon Button component.
 * This component is a React wrapper around the `md-outlined-icon-button` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the button, making it non-interactive.
 * @param {boolean} flipIconInRtl - Flips the icon if in an RTL context at startup.
 * @param {string} href - Sets the underlying HTMLAnchorElement's href attribute.
 * @param {string} target - Sets the target attribute for the HTMLAnchorElement to define where to open the linked document.
 * @param {string} ariaLabelSelected - The aria-label of the button when it is toggleable and selected.
 * @param {boolean} toggle - When true, the button will toggle between selected and unselected states.
 * @param {boolean} selected - Sets the selected state. When false, displays the default icon; when true, displays the "selected" icon.
 * @param {string} type - The type attribute of the button (e.g., 'submit', 'reset', 'button').
 * @param {string} value - The value attribute of the button that gets sent when the form is submitted.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The form element that the button is associated with.
 * @param {NodeList} labels - A NodeList of label elements that are associated with the button.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdOutlinedIconButton = createComponent({
    react: React,
    tagName: 'md-outlined-icon-button',
    elementClass: _MdOutlinedIconButton,
    events: {},
})

/**
 * Material Design Filled Tonal Icon Button component.
 * This component is a React wrapper around the `md-filled-tonal-icon-button` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the button, making it non-interactive.
 * @param {boolean} flipIconInRtl - Flips the icon if in an RTL context at startup.
 * @param {string} href - Sets the underlying HTMLAnchorElement's href attribute.
 * @param {string} target - Sets the target attribute for the HTMLAnchorElement to define where to open the linked document.
 * @param {string} ariaLabelSelected - The aria-label of the button when it is toggleable and selected.
 * @param {boolean} toggle - When true, the button will toggle between selected and unselected states.
 * @param {boolean} selected - Sets the selected state. When false, displays the default icon; when true, displays the "selected" icon.
 * @param {string} type - The type attribute of the button (e.g., 'submit', 'reset', 'button').
 * @param {string} value - The value attribute of the button that gets sent when the form is submitted.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The form element that the button is associated with.
 * @param {NodeList} labels - A NodeList of label elements that are associated with the button.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdFilledTonalIconButton = createComponent({
    react: React,
    tagName: 'md-filled-tonal-icon-button',
    elementClass: _MdFilledTonalIconButton,
    events: {},
})
