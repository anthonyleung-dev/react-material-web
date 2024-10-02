'use client'

import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdBadge as _MdBadge } from '@material/web/labs/badge/badge.js'

/**
 * Props for the `MdBadge` component.
 * This interface is used to provide the props for the `MdBadge` component.
 *
 */
export type MdBadgeProps = ComponentProps<typeof MdBadge>

export interface MdBadgeElement extends _MdBadge {
}

/**
 * Material design badge component
 * This component is a React wrapper around the `md-badge` custom element.
 *
 */
export const MdBadge = createComponent({
    react: React,
    tagName: 'md-badge',
    elementClass: _MdBadge,
})