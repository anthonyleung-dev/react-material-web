import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdElevation as _MdElevation } from '@material/web/elevation/elevation'
/**
 * Props for the `MdElevation` component.
 * This interface is used to provide the props for the `MdElevation` component.
 *
 */
export type MdElevationProps = ComponentProps<typeof MdElevation>

export interface MdElevationElement extends _MdElevation {}

/**
 * Material Design Elevation component.
 * This component is a React wrapper around the `md-elevation` custom element.
 *
 * @example
 * ``` tsx
 * import React from 'react'
 * import { MdElevation } from 'react-material-web'
 *
 * export const Detault = () => (
 *   <div style={{ width: '64px', height: '64px', position: 'relative', borderRadius: '16px' }}>
 *      <MdElevation />
 *   </div>
 * )
 * ```
 */
export const MdElevation = createComponent({
    react: React,
    tagName: 'md-elevation',
    elementClass: _MdElevation,
})
