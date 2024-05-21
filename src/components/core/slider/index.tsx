'use client'

import { createComponent } from '@lit/react'
import React from 'react'

import { MdSlider as _MdSlider } from '@material/web/slider/slider.js'

/**
 * Props for the `MdSlider` component.
 * This interface is used to provide the props for the `MdSlider` component.
 *
 */
export type MdSliderProps = React.ComponentProps<typeof MdSlider>

export interface MdSliderElement extends _MdSlider {}

/**
 * Material Design Slider component.
 * This component is a React wrapper around the `md-slider` custom element.
 *
 * @component
 * @param {boolean} disabled - Whether or not the slider is disabled.
 * @param {number} min - The slider minimum value
 * @param {number} max - The slider maximum value
 * @param {number} value - The slider value displayed when range is false.
 * @param {number} valueStart - The slider start value displayed when range is true.
 * @param {number} valueEnd - The slider end value displayed when range is true.
 * @param {string} valueLabel - An optional label for the slider's value displayed when range is false; if not set, the label is the value itself.
 * @param {string} valueLabelStart - An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself.
 * @param {string} valueLabelEnd - An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself.
 * @param {string} ariaLabelStart - Aria label for the slider's start handle displayed when range is true.
 * @param {string} ariaValueTextStart - Aria value text for the slider's start value displayed when range is true.
 * @param {string} ariaLabelEnd - Aria label for the slider's end handle displayed when range is true.
 * @param {string} ariaValueTextEnd - Aria value text for the slider's end value displayed when range is true.
 * @param {number} step - The step between values.
 * @param {boolean} ticks - Whether or not to show tick marks.
 * @param {boolean} labeled - Whether or not to show a value label when activated.
 * @param {boolean} range - Whether or not to show a value range. When false, the slider displays a slideable handle for the value property; when true, it displays slideable handles for the valueStart and valueEnd properties.
 * @param {string} name - The name of the slider.
 * @param {string} nameStart - The name of the slider start value.
 * @param {string} nameEnd - The name of the slider end value.
 * @param {HTMLFormElement} form - The form element that the slider is in.
 * @param {NodeList} labels - The labels for the slider.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdSlider } from 'react-material-web'
 *
 * const Slider = () => {
 *   return (
 *    <MdSlider min={0} max={100} value={50} />
 *  )
 * }
 * ```
 */
export const MdSlider = createComponent<MdSliderElement>({
    react: React,
    tagName: 'md-slider',
    elementClass: _MdSlider,
})
