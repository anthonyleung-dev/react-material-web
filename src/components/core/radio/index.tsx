'use client'

import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdRadio as _MdRadio } from '@material/web/radio/radio.js'

/**
 * Props for the `MdRadio` component.
 * This interface is used to provide the props for the `MdRadio` component.
 *
 */
export type MdRadioProps = ComponentProps<typeof MdRadio>

export interface MdRadioElement extends _MdRadio {}

/**
 * Material Design Radio component.
 * This component is a React wrapper around the `md-radio` custom element.
 *
 * @component
 * @param {boolean} disabled - Whether or not the radio is disabled.
 * @param {string} value - The value of the radio.
 * @param {boolean} checked - Whether or not the radio is checked.
 * @param {string} name - The name of the radio.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdRadio } from 'react-material-web'
 *
 * export const RadioExample = () => {
 *  return (
 *      <form>
 *          <MdRadio name="radio" value="cats" checked />
 *          <MdRadio name="radio" value="dogs" />
 *      </form>
 *  )
 * }
 */
export const MdRadio = createComponent({
    react: React,
    tagName: 'md-radio',
    elementClass: _MdRadio,
    events: {
        onInput: 'input',
        onChange: 'change',
    },
})
