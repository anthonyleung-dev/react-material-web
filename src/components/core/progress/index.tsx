'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdCircularProgress as _MdCircularProgress } from '@material/web/progress/circular-progress.js'
import { MdLinearProgress as _MdLinearProgress } from '@material/web/progress/linear-progress.js'

export type MdCircularProgressProps = ComponentProps<typeof MdCircularProgress>

export type MdLinearProgressProps = ComponentProps<typeof MdLinearProgress>

/**
 * Material Design Circular Progress component.
 * This component is a React wrapper around the `md-circular-progress` custom element.
 *
 * @component
 * @param {number} value - Progress to display, a fraction between 0 and `max`.
 * @param {number} max - Maximum progress to display, defaults to 1.
 * @param {boolean} indeterminate - Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.
 * @param {boolean} fourColor - Whether or not to render indeterminate mode using 4 colors instead of one.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdCircularProgress } from 'react-material-web'
 *
 * export const CircularProgressExample = () => {
 *     return <MdCircularProgress value={0.5} max={1} />
 * }
 * ```
 */
export const MdCircularProgress = createComponent({
    react: React,
    tagName: 'md-circular-progress',
    elementClass: _MdCircularProgress,
})

/**
 * Material Design Linear Progress component.
 * This component is a React wrapper around the `md-linear-progress` custom element.
 *
 * @component
 * @param {number} buffer - Buffer amount to display, a fraction between 0 and `max`.
 * @param {number} value - Progress to display, a fraction between 0 and `max`.
 * @param {number} max - Maximum progress to display, defaults to 1.
 * @param {boolean} indeterminate - Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.
 * @param {boolean} reversed - Whether or not to reverse the direction of the progress indicator.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdLinearProgress } from 'react-material-web'
 *
 * export const LinearProgressExample = () => {
 *    return <MdLinearProgress value={0.5} max={1} />
 * }
 * ```
 */
export const MdLinearProgress = createComponent({
    react: React,
    tagName: 'md-linear-progress',
    elementClass: _MdLinearProgress,
})
