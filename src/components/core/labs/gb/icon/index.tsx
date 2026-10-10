'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { IconElement as _MdGbIcon } from '@material/web/labs/gb/styles/icon/icon-element.js'
import '@material/web/labs/gb/styles/icon/md-gb-icon.js'

/**
 * Props for the `MdGbIcon` component.
 * This interface is used to provide the props for the `MdGbIcon` component.
 *
 */
export type MdGbIconProps = ComponentProps<typeof MdGbIcon>

export interface MdGbIconElement extends _MdGbIcon {}

/**
 * Material Design expressive icon. The children are the icon name of the icon font.
 * This component is a React wrapper around the `md-gb-icon` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 *
 * @example
 * ```tsx
 *   <MdGbIcon>star</MdGbIcon>
 * ```
 */
export const MdGbIcon = createComponent({
    react: React,
    tagName: 'md-gb-icon',
    elementClass: _MdGbIcon,
})
