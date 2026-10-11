'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { ListElement as _MdGbList } from '@material/web/labs/gb/components/list/list-element.js'
import { ListItemElement as _MdGbListItem } from '@material/web/labs/gb/components/list/list-item-element.js'
import '@material/web/labs/gb/components/list/md-gb-list.js'
import '@material/web/labs/gb/components/list/md-gb-list-item.js'

/**
 * Props for the `MdGbList` component.
 * This interface is used to provide the props for the `MdGbList` component.
 *
 */
export type MdGbListProps = ComponentProps<typeof MdGbList>

/**
 * Props for the `MdGbListItem` component.
 * This interface is used to provide the props for the `MdGbListItem` component.
 *
 */
export type MdGbListItemProps = ComponentProps<typeof MdGbListItem>

export interface MdGbListElement extends _MdGbList {}
export interface MdGbListItemElement extends _MdGbListItem {}

/**
 * Material Design expressive list. Put `MdGbListItem` elements in the children.
 * This component is a React wrapper around the `md-gb-list` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} segmented - Whether the list items render as separate segments.
 *
 * @example
 * ```tsx
 *   <MdGbList>
 *     <MdGbListItem>Item</MdGbListItem>
 *   </MdGbList>
 * ```
 */
export const MdGbList = createComponent({
    react: React,
    tagName: 'md-gb-list',
    elementClass: _MdGbList,
})

/**
 * Material Design expressive list item. Slots: `avatar`, `leading`, `overline`, `supporting-text`, `trailing-text`, `trailing`.
 * This component is a React wrapper around the `md-gb-list-item` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} checked - Whether the list item is checked. A checked item shows the selected style.
 * @param {boolean} disabled - Whether the list item is disabled.
 * @param {boolean} nonInteractive - Whether the list item is static and has no interaction states (the `static` attribute).
 *
 * @example
 * ```tsx
 *   <MdGbListItem>
 *     Headline
 *     <span slot="supporting-text">Supporting text</span>
 *   </MdGbListItem>
 * ```
 */
export const MdGbListItem = createComponent({
    react: React,
    tagName: 'md-gb-list-item',
    elementClass: _MdGbListItem,
})
