'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MenuElement as _MdGbMenu } from '@material/web/labs/gb/components/menu/menu-element.js'
import { MenuGroupElement as _MdGbMenuGroup } from '@material/web/labs/gb/components/menu/menu-group-element.js'
import { MenuItemElement as _MdGbMenuItem } from '@material/web/labs/gb/components/menu/menu-item-element.js'
import '@material/web/labs/gb/components/menu/md-gb-menu.js'
import '@material/web/labs/gb/components/menu/md-gb-menu-group.js'
import '@material/web/labs/gb/components/menu/md-gb-menu-item.js'

/**
 * Props for the `MdGbMenu` component.
 * This interface is used to provide the props for the `MdGbMenu` component.
 *
 */
export type MdGbMenuProps = ComponentProps<typeof MdGbMenu>

/**
 * Props for the `MdGbMenuGroup` component.
 * This interface is used to provide the props for the `MdGbMenuGroup` component.
 *
 */
export type MdGbMenuGroupProps = ComponentProps<typeof MdGbMenuGroup>

/**
 * Props for the `MdGbMenuItem` component.
 * This interface is used to provide the props for the `MdGbMenuItem` component.
 *
 */
export type MdGbMenuItemProps = ComponentProps<typeof MdGbMenuItem>

export interface MdGbMenuElement extends _MdGbMenu {}
export interface MdGbMenuGroupElement extends _MdGbMenuGroup {}
export interface MdGbMenuItemElement extends _MdGbMenuItem {}

/**
 * Material Design expressive menu. The menu is a popover. Open it from a button whose `popoverTarget` (React 19) or `popovertarget` attribute (React 18) is the menu `id`.
 * This component is a React wrapper around the `md-gb-menu` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {string} id - The id that a `popovertarget` attribute refers to.
 * @param {'standard' | 'vibrant'} color - The menu color style.
 * @param {(event: ToggleEvent) => void} onBeforeToggle - Fires before the menu opens or closes.
 * @param {(event: ToggleEvent) => void} onToggle - Fires after the menu opens or closes.
 *
 * @example
 * ```tsx
 *   <MdGbMenu id="menu">
 *     <MdGbMenuItem>Item</MdGbMenuItem>
 *   </MdGbMenu>
 * ```
 */
export const MdGbMenu = createComponent({
    react: React,
    tagName: 'md-gb-menu',
    elementClass: _MdGbMenu,
    events: {
        onBeforeToggle: 'beforetoggle',
        onToggle: 'toggle',
    },
})

/**
 * Material Design expressive menu group. Groups menu items and makes them checkable.
 * This component is a React wrapper around the `md-gb-menu-group` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {'single' | 'multiple' | null} checkable - Whether one item (`single`) or many items (`multiple`) can be checked.
 *
 * @example
 * ```tsx
 *   <MdGbMenuGroup checkable="single">
 *     <MdGbMenuItem checked>One</MdGbMenuItem>
 *     <MdGbMenuItem>Two</MdGbMenuItem>
 *   </MdGbMenuGroup>
 * ```
 */
export const MdGbMenuGroup = createComponent({
    react: React,
    tagName: 'md-gb-menu-group',
    elementClass: _MdGbMenuGroup,
})

/**
 * Material Design expressive menu item. Slots: `leading`, `supporting-text`, `trailing-text`, `trailing`.
 * This component is a React wrapper around the `md-gb-menu-item` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} checked - Whether the item is checked inside a checkable `MdGbMenuGroup`.
 * @param {boolean} disabled - Whether the menu item is disabled.
 * @param {(event: InputEvent) => void} onInput - Fires when the checked state changes.
 * @param {(event: Event) => void} onChange - Fires when the checked state changes.
 *
 * @example
 * ```tsx
 *   <MdGbMenuItem>Item</MdGbMenuItem>
 * ```
 */
export const MdGbMenuItem = createComponent({
    react: React,
    tagName: 'md-gb-menu-item',
    elementClass: _MdGbMenuItem,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
