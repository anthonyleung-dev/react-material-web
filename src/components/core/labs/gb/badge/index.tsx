'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { BadgeElement as _MdGbBadge } from '@material/web/labs/gb/components/badge/badge-element.js'
import '@material/web/labs/gb/components/badge/md-gb-badge.js'

/**
 * Props for the `MdGbBadge` component.
 * This interface is used to provide the props for the `MdGbBadge` component.
 *
 */
export type MdGbBadgeProps = ComponentProps<typeof MdGbBadge>

export interface MdGbBadgeElement extends _MdGbBadge {}

/**
 * Material Design expressive badge. Children are the badge text; leave it empty for a small dot badge.
 * This component is a React wrapper around the `md-gb-badge` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 *
 * @example
 * ```tsx
 *   <MdGbBadge>3</MdGbBadge>
 * ```
 */
export const MdGbBadge = createComponent({
    react: React,
    tagName: 'md-gb-badge',
    elementClass: _MdGbBadge,
})
