'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { CardElement as _MdGbCard } from '@material/web/labs/gb/components/card/card-element.js'
import '@material/web/labs/gb/components/card/md-gb-card.js'

/**
 * Props for the `MdGbCard` component.
 * This interface is used to provide the props for the `MdGbCard` component.
 *
 */
export type MdGbCardProps = ComponentProps<typeof MdGbCard>

export interface MdGbCardElement extends _MdGbCard {}

/**
 * Material Design expressive card.
 * This component is a React wrapper around the `md-gb-card` custom element.
 * Experimental: it comes from `@material/web/labs/gb`. Its API can change in a minor release.
 *
 * @component
 * @param {'elevated' | 'filled' | 'outlined'} color - The card color style.
 * @param {boolean} interactive - Whether the card shows hover, focus and press states.
 * @param {boolean} disabled - Whether or not an interactive card is disabled.
 *
 * @example
 * ```tsx
 *   <MdGbCard color="outlined">Card content</MdGbCard>
 * ```
 */
export const MdGbCard = createComponent({
    react: React,
    tagName: 'md-gb-card',
    elementClass: _MdGbCard,
})
