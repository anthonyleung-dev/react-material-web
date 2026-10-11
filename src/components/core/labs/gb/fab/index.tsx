'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { FabElement as _MdGbFab } from '@material/web/labs/gb/components/fab/fab-element.js'
import '@material/web/labs/gb/components/fab/md-gb-fab.js'

/**
 * Props for the `MdGbFab` component.
 * This interface is used to provide the props for the `MdGbFab` component.
 *
 */
export type MdGbFabProps = ComponentProps<typeof MdGbFab>

export interface MdGbFabElement extends _MdGbFab {}

/**
 * Material Design expressive floating action button. Put an `MdGbIcon` and an optional label in the children.
 * This component is a React wrapper around the `md-gb-fab` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {'primary' | 'primary-container' | 'secondary' | 'secondary-container' | 'tertiary' | 'tertiary-container'} color - The FAB color.
 * @param {'default' | 'md' | 'lg'} size - The FAB size.
 *
 * @example
 * ```tsx
 *   <MdGbFab color="primary-container">
 *     <MdGbIcon>add</MdGbIcon>
 *     Create
 *   </MdGbFab>
 * ```
 */
export const MdGbFab = createComponent({
    react: React,
    tagName: 'md-gb-fab',
    elementClass: _MdGbFab,
})
