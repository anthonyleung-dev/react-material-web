'use client'

import { createComponent } from '@lit/react'
import { MdIcon as _MdIcon } from '@material/web/icon/icon.js'
import React, { ComponentProps } from 'react'

export type MdIconProps = ComponentProps<typeof MdIcon>

export interface MdIconElement extends _MdIcon {}

export const MdIcon = createComponent({
    react: React,
    tagName: 'md-icon',
    elementClass: _MdIcon,
})
