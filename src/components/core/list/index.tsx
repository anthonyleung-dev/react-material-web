'use client'

import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdList as _MdList } from '@material/web/list/list'
import { MdListItem as _MdListItem } from '@material/web/list/list-item'

/**
 * Props for the `MdList` component.
 * This interface is used to provide the props for the `MdList` component.
 *
 */
export type MdListProps = ComponentProps<typeof MdList>

/**
 * Props for the `MdListItem` component.
 * This interface is used to provide the props for the `MdListItem` component.
 *
 */
export type MdListItemProps = ComponentProps<typeof MdListItem>

export interface MdListElement extends _MdList {}

export interface MdListItemElement extends _MdListItem {}

/**
 * Material Design List component.
 * This component is a React wrapper around the `md-list` custom element.
 *
 * @component
 *
 * Methods:
 * - `activateNextItem(): ListItem` - Activates the next item in the list. If at the end of the list, the first item will be activated.
 * - `activatePreviousItem(): ListItem` - Activates the previous item in the list. If at the beginning of the list, the last item will be activated.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdList, MdListItem } from 'react-material-web'
 *
 * export const List = () => (
 *    <MdList>
 *       <MdListItem>Item 1</MdListItem>
 *      <MdListItem>Item 2</MdListItem>
 *   </MdList>
 * )
 * ```
 */
export const MdList = createComponent({
    react: React,
    tagName: 'md-list',
    elementClass: _MdList,
})

/**
 * Material Design List Item component.
 * This component is a React wrapper around the `md-list-item` custom element.
 *
 * @component
 * @param {boolean} disabled - Disables the item and makes it non-selectable and non-interactive.
 * @param {string} type - Sets the behavior of the list item, defaults to "text". Change to "link" or "button" for interactive items.
 * @param {string} href - Sets the underlying HTMLAnchorElement's href attribute.
 * @param {string} target - Sets the target attribute for the HTMLAnchorElement to define where to open the linked document.
 *
 */
export const MdListItem = createComponent({
    react: React,
    tagName: 'md-list-item',
    elementClass: _MdListItem,
    events: {
        onRequestActivation: 'request-activation',
    },
})
