import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdOutlinedSegmentedButton as _MdOutlinedSegmentedButton } from '@material/web/labs/segmentedbutton/outlined-segmented-button.js'
import { MdOutlinedSegmentedButtonSet as _MdOutlinedSegmentedButtonSet } from '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js'

/**
 * Props for the `MdOutlinedSegmentedButton` component.
 * This interface is used to provide the props for the `MdOutlinedSegmentedButton` component.
 *
 */
export type MdOutlinedSegmentedButtonProps = ComponentProps<typeof MdOutlinedSegmentedButton>

/**
 * Props for the `MdOutlinedSegmentedButtonSet` component.
 * This interface is used to provide the props for the `MdOutlinedSegmentedButtonSet` component.
 *
 */
export type MdOutlinedSegmentedButtonSetProps = ComponentProps<typeof MdOutlinedSegmentedButtonSet>

export interface MdOutlinedSegmentedButtonElement extends _MdOutlinedSegmentedButton {}

export interface MdOutlinedSegmentedButtonSetElement extends _MdOutlinedSegmentedButtonSet {}

/**
 * Material design outlined segmented button component
 * This component is a React wrapper around the `md-outlined-segmented-button` custom element.
 *
 * @component
 * @param {boolean} multiselect - Whether the segmented button set allows multiple selections.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdOutlinedSegmentedButton, MdOutlinedSegmentedButtonSet } from 'material-web-react'
 *
 * const App = () => {
 *    return <MdOutlinedSegmentedButtonSet multiselect>
 *       <MdOutlinedSegmentedButton label="Option 1" />
 *       <MdOutlinedSegmentedButton label="Option 2" />
 *   </MdOutlinedSegmentedButtonSet>
 * }
 * ```
 */
export const MdOutlinedSegmentedButtonSet = createComponent({
    react: React,
    tagName: 'md-outlined-segmented-button-set',
    elementClass: _MdOutlinedSegmentedButtonSet,
})

/**
 * Material design outlined segmented button set component
 * This component is a React wrapper around the `md-outlined-segmented-button-set` custom element.
 *
 * @component
 * @param {boolean} disabled - Whether the segmented button set is disabled.
 * @param {boolean} selected - The index of the selected button.
 * @param {string} label - The label for the segmented button.
 * @param {boolean} noCheckmark - Whether the segmented button set has a checkmark.
 * @param {boolean} hasIcon - Whether the segmented button set has icon.
 *
 */
export const MdOutlinedSegmentedButton = createComponent({
    react: React,
    tagName: 'md-outlined-segmented-button',
    elementClass: _MdOutlinedSegmentedButton,
})
