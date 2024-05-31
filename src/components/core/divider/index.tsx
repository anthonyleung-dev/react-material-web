'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdDivider as _MdDivider } from '@material/web/divider/divider.js'

/**
 * Props for the `MdDivider` component.
 * This interface is used to provide the props for the `MdDivider` component.
 *
 */
export type MdDividerProps = ComponentProps<typeof MdDivider>

export interface MdDividerElement extends _MdDivider {}

/**
 * Material Design Divider component.
 * This component is a React wrapper around the `md-divider` custom element.
 *
 * @component
 * @param {boolean} inset - Indents the divider with equal padding on both sides.
 * @param {boolean} insetStart - Indents the divider with padding on the leading side.
 * @param {boolean} insetEnd - Indents the divider with padding on the trailing side.
 */
export const MdDivider = createComponent({
    react: React,
    tagName: 'md-divider',
    elementClass: _MdDivider,
})
