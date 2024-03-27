import { createComponent } from '@lit/react'
import React from 'react'

import { MdRipple as _MdRipple } from '@material/web/ripple/ripple.js'

/**
 * Props for the `MdRipple` component.
 * This interface is used to provide the props for the `MdRipple` component.
 *
 */
export type MdRippleProps = React.ComponentProps<typeof MdRipple>

export interface MdRippleElement extends _MdRipple {}

/**
 * Material Design Ripple component.
 * This component is a React wrapper around the `md-ripple` custom element.
 *
 * @component
 * @param {boolean} disabled - Whether or not the ripple is disabled.
 * @param {string} htmlFor - The id of the element that the ripple is for.
 * @param {HTMLElement} container - The container element for the ripple.
 * 
 * Methods:
 * - `attach(container: HTMLElement): void` - Attaches the ripple to the container.
 * - `detach(): void` - Detaches the ripple from the container.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdRipple } from 'material-web-react'
 *
 * export const RippleExample = () => {
 * return (
 *  <div
 *      style={{
 *      width: '64px',
 *      height: '64px',
 *          position: 'relative',
 *          cursor: 'pointer',
 *          border: '1px solid',
 *          borderRadius: '16px',
 *      }}
 *  >
 *      <MdRipple />
 *  </div>
 *  )
 * }
 * ```
 */
export const MdRipple = createComponent({
    react: React,
    tagName: 'md-ripple',
    elementClass: _MdRipple,
})
