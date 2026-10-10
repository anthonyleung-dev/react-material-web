'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { DividerElement as _MdGbDivider } from '@material/web/labs/gb/components/divider/divider-element.js'
import '@material/web/labs/gb/components/divider/md-gb-divider.js'

/**
 * Props for the `MdGbDivider` component.
 * This interface is used to provide the props for the `MdGbDivider` component.
 *
 */
export type MdGbDividerProps = ComponentProps<typeof MdGbDivider>

export interface MdGbDividerElement extends _MdGbDivider {}

/**
 * Material Design expressive divider.
 * This component is a React wrapper around the `md-gb-divider` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {boolean} vertical - Whether the divider is vertical instead of horizontal.
 *
 * @example
 * ```tsx
 *   <MdGbDivider />
 * ```
 */
export const MdGbDivider = createComponent({
    react: React,
    tagName: 'md-gb-divider',
    elementClass: _MdGbDivider,
})
