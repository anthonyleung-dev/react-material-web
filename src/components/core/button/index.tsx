'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps, ReactNode } from 'react'
import { MdFilledButton as _MdFilledButton } from '@material/web/button/filled-button.js'
import { MdOutlinedButton as _MdOutlinedButton } from '@material/web/button/outlined-button.js'
import { MdTextButton as _MdTextButton } from '@material/web/button/text-button.js'
import { MdFilledTonalButton as _MdFilledTonalButton } from '@material/web/button/filled-tonal-button.js'
import { MdElevatedButton as _MdElevatedButton } from '@material/web/button/elevated-button.js'
import { Button } from '@material/web/button/internal/button'

/**
 * Props for the `MdOutlinedButton` component.
 * This interface is used to provide the props for the `MdOutlinedButton` component.
 *
 */
export type MdOutlinedButtonProps = ComponentProps<typeof MdOutlinedButton>

/**
 * Props for the `MdFilledButton` component.
 * This interface is used to provide the props for the `MdFilledButton` component.
 *
 */
export type MdFilledButtonProps = ComponentProps<typeof MdFilledButton>

/**
 * Props for the `MdTextButton` component.
 * This interface is used to provide the props for the `MdTextButton` component.
 *
 */
export type MdTextButtonProps = ComponentProps<typeof MdTextButton>

/**
 * Props for the `MdFilledTonalButton` component.
 * This interface is used to provide the props for the `MdFilledTonalButton` component.
 *
 */
export type MdFilledTonalButtonProps = ComponentProps<typeof MdFilledTonalButton>

/**
 * Props for the `MdElevatedButton` component.
 * This interface is used to provide the props for the `MdElevatedButton` component.
 *
 */
export type MdElevatedButtonProps = ComponentProps<typeof MdElevatedButton>

export interface MdFilledButtonElement extends _MdFilledButton {}

export interface MdOutlinedButtonElement extends _MdOutlinedButton {}

export interface MdTextButtonElement extends _MdTextButton {}

export interface MdFilledTonalButtonElement extends _MdFilledTonalButton {}

export interface MdElevatedButtonElement extends _MdElevatedButton {}

/**
 * Material Design Outlined Button component.
 * This component is a React wrapper around the `md-outlined-button` custom element.
 *
 * @component
 * @param {ReactNode} children - The children of the `MdOutlinedButton` component.
 * @param {boolean} disabled - Whether or not the button is disabled.
 * @param {string} href - The URL that the link button points to.
 * @param {string} target - Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
 * @param {boolean} trailingIcon - Whether to render the icon at the inline end of the label rather than the inline start.
 * @param {boolean} hasIcon - Whether to display the icon or not.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} type - The default behavior of the button. May be "text", "reset", or "submit" (default).
 * @param {string} value - The value added to a form with the button's name when the button submits a form.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdOutlinedButton = createComponent({
    react: React,
    tagName: 'md-outlined-button',
    elementClass: _MdOutlinedButton,
    events: {},
})

/**
 * Material Design Filled Button component.
 * This component is a React wrapper around the `md-filled-button` custom element.
 *
 * @component
 * @param {ReactNode} children - The children of the `MdOutlinedButton` component.
 * @param {boolean} disabled - Whether or not the button is disabled.
 * @param {string} href - The URL that the link button points to.
 * @param {string} target - Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
 * @param {boolean} trailingIcon - Whether to render the icon at the inline end of the label rather than the inline start.
 * @param {boolean} hasIcon - Whether to display the icon or not.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} type - The default behavior of the button. May be "text", "reset", or "submit" (default).
 * @param {string} value - The value added to a form with the button's name when the button submits a form.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdFilledButton = createComponent({
    react: React,
    tagName: 'md-filled-button',
    elementClass: _MdFilledButton,
    events: {},
})

/**
 * Material Design Text Button component.
 * This component is a React wrapper around the `md-text-button` custom element.
 *
 * @component
 * @param {ReactNode} children - The children of the `MdOutlinedButton` component.
 * @param {boolean} disabled - Whether or not the button is disabled.
 * @param {string} href - The URL that the link button points to.
 * @param {string} target - Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
 * @param {boolean} trailingIcon - Whether to render the icon at the inline end of the label rather than the inline start.
 * @param {boolean} hasIcon - Whether to display the icon or not.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {string} type - The default behavior of the button. May be "text", "reset", or "submit" (default).
 * @param {string} value - The value added to a form with the button's name when the button submits a form.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */

export const MdTextButton = createComponent({
    react: React,
    tagName: 'md-text-button',
    elementClass: _MdTextButton,
    events: {},
})

/**
 * Material Design Filled Tonal Button component.
 * This component is a React wrapper around the `md-filled-tonal-button` custom element.
 *
 * @component
 * @param {ReactNode} children - The children of the `MdOutlinedButton` component.
 * @param {boolean} disabled - Whether or not the button is disabled.
 * @param {string} href - The URL that the link button points to.
 * @param {string} target - Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
 * @param {boolean} trailingIcon - Whether to render the icon at the inline end of the label rather than the inline start.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {boolean} hasIcon - Whether to display the icon or not.
 * @param {string} type - The default behavior of the button. May be "text", "reset", or "submit" (default).
 * @param {string} value - The value added to a form with the button's name when the button submits a form.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdFilledTonalButton = createComponent({
    react: React,
    tagName: 'md-filled-tonal-button',
    elementClass: _MdFilledTonalButton,
    events: {},
})

/**
 * Material Design Elevated Button component.
 * This component is a React wrapper around the `md-elevated-button` custom element.
 *
 * @component
 * @param {ReactNode} children - The children of the `MdOutlinedButton` component.
 * @param {boolean} disabled - Whether or not the button is disabled.
 * @param {string} href - The URL that the link button points to.
 * @param {string} target - Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
 * @param {boolean} trailingIcon - Whether to render the icon at the inline end of the label rather than the inline start.
 * @param {string} softDisabled - Whether or not the button is "soft-disabled" (disabled but still focusable). https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
 * @param {boolean} hasIcon - Whether to display the icon or not.
 * @param {string} type - The default behavior of the button. May be "text", "reset", or "submit" (default).
 * @param {string} value - The value added to a form with the button's name when the button submits a form.
 * @param {string} name - The name of the button.
 * @param {HTMLFormElement} form - The associated form element with which this element's value will submit.
 * @param {() => Promise<void> | void} onClick - The event handler for the `click` event.
 * @param {() => Promise<void> | void} onFocus - The event handler for the `focus` event.
 * @param {() => Promise<void> | void} onBlur - The event handler for the `blur` event.
 *
 */
export const MdElevatedButton = createComponent({
    react: React,
    tagName: 'md-elevated-button',
    elementClass: _MdElevatedButton,
    events: {},
})
