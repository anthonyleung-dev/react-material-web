'use client'

import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdFilledCard as _MdFilledCard } from '@material/web/labs/card/filled-card.js'
import { MdElevatedCard as _MdElevatedCard } from '@material/web/labs/card/elevated-card.js'
import { MdOutlinedCard as _MdOutlinedCard } from '@material/web/labs/card/outlined-card.js'

/**
 * Props for the `MdFilledCard` component.
 * This interface is used to provide the props for the `MdFilledCard` component.
 *
 */
export type MdFilledCardProps = ComponentProps<typeof MdFilledCard>

/**
 * Props for the `MdElevatedCard` component.
 * This interface is used to provide the props for the `MdElevatedCard` component.
 *
 */
export type MdElevatedCardProps = ComponentProps<typeof MdElevatedCard>

/**
 * Props for the `MdOutlinedCard` component.
 * This interface is used to provide the props for the `MdOutlinedCard` component.
 *
 */
export type MdOutlinedCardProps = ComponentProps<typeof MdOutlinedCard>

export interface MdFilledCardElement extends _MdFilledCard {}

export interface MdElevatedCardElement extends _MdElevatedCard {}

export interface MdOutlinedCardElement extends _MdOutlinedCard {}

/**
 * Material design filled card component
 * This component is a React wrapper around the `md-filled-card` custom element.
 *
 */
export const MdFilledCard = createComponent({
    react: React,
    tagName: 'md-filled-card',
    elementClass: _MdFilledCard,
})

/**
 * Material design elevated card component
 * This component is a React wrapper around the `md-elevated-card` custom element.
 *
 */
export const MdElevatedCard = createComponent({
    react: React,
    tagName: 'md-elevated-card',
    elementClass: _MdElevatedCard,
})

/**
 * Material design outlined card component
 * This component is a React wrapper around the `md-outlined-card` custom element.
 *
 */
export const MdOutlinedCard = createComponent({
    react: React,
    tagName: 'md-outlined-card',
    elementClass: _MdOutlinedCard,
})
