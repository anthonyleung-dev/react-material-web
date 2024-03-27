import { createComponent } from '@lit/react'
import React, { ComponentProps } from 'react'
import { MdMenu as _MdMenu } from '@material/web/menu/menu.js'
import { MdMenuItem as _MdMenuItem } from '@material/web/menu/menu-item.js'
import { MdSubMenu as _MdSubMenu } from '@material/web/menu/sub-menu.js'

/**
 * Props for the `MdMenu` component.
 * This interface is used to provide the props for the `MdMenu` component.
 *
 */
export type MdMenuProps = ComponentProps<typeof MdMenu>

export type MdMenuItemProps = ComponentProps<typeof MdMenuItem>

export type MdSubMenuProps = ComponentProps<typeof MdSubMenu>

export interface MdMenuElement extends _MdMenu {}

export interface MdMenuItemElement extends _MdMenuItem {}

export interface MdSubMenuElement extends _MdSubMenu {}

/**
 * Material Design Menu component.
 * This component is a React wrapper around the `md-menu` custom element.
 *
 * @component
 *
 * @param {string} anchor - The ID of the element in the same root node in which the menu should align to. Overrides setting anchorElement = elementReference.
 * @param {string} positioning - Whether the positioning algorithm should calculate relative to the parent of the anchor element (absolute) or relative to the window (fixed).
 * @param {boolean} quick - Skips the opening and closing animations.
 * @param {boolean} hasOverflow - Displays overflow content like a submenu.
 * @param {boolean} open - Opens the menu and makes it visible. Alternative to the .show() and .close() methods
 * @param {number} xOffset - Offsets the menu's inline alignment from the anchor by the given number in pixels. This value is direction aware and will follow the LTR / RTL direction.
 * @param {number} yOffset - Offsets the menu's block alignment from the anchor by the given number in pixels.
 * @param {number} typeaheadDelay - The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer.
 * @param {string} anchorCorner - The corner of the anchor which to align the menu in the standard logical property style of - e.g. 'end-start'.
 * @param {string} menuCorner - The corner of the menu which to align the anchor in the standard logical property style of - e.g. 'start-start'.
 * @param {boolean} stayOpenOnOutsideClick - Keeps the user clicks outside the menu.
 * @param {boolean} stayOpenOnFocusout - Keeps the menu open when focus leaves the menu's composed subtree.
 * @param {boolean} skipRestoreFocus - After closing, does not restore focus to the last focused element before the menu was opened.
 * @param {string} defaultFocus - The element that should be focused by default once opened.
 * @param {boolean} isSubmenu - Whether or not the current menu is a submenu and should not handle specific navigation keys.
 * @param {function} typeaheadController - Handles typeahead navigation through the menu.
 * @param {HTMLElement & Partial<SurfacePositionTarget>} anchorElement -
 *
 * Methods:
 * - `close(): void` - Closes the menu.
 * - `show(): void` - Opens the menu.
 * - `activateNextItem: MenuItem` - Activates the next item in the menu. If at the end of the menu, the first item will be activated.
 * - `activatePreviousItem: MenuItem` - Activates the previous item in the menu. If at the beginning of the menu, the last item will be activated.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdMenu, MdMenuItem, MdFilledButton } from 'material-web-react'
 * 
 * export const MenuExample = () => {
 *      const menuRef = React.useRef<MdMenuElement>(null)
 *      const anchorRef = React.useRef<MdFilledButtonElement>(null)
 *      const [open, setOpen] = React.useState(false)
 *      return (
 *          <div style={{ position: 'relative' }}>
 *              <MdFilledButton ref={anchorRef} onClick={() => setOpen(!open)}>
 *                  Open Menu
 *              </MdFilledButton>
 *              <MdMenu anchorElement={anchorRef.current ?? undefined} ref={menuRef} open={open}>
 *                  <MdMenuItem>
 *                      <span slot="headline">Item 1</span>
 *                  </MdMenuItem>
 *                  <MdMenuItem>
 *                      <span slot="headline">Item 2</span>
 *                  </MdMenuItem>
 *              </MdMenu>
 *          </div>
 *      )
 * }
 * ```
 */
export const MdMenu = createComponent({
    react: React,
    tagName: 'md-menu',
    elementClass: _MdMenu,
    events: {
        onOpening: 'opening',
        onOpened: 'opened',
        onClosing: 'closing',
        onClosed: 'closed',
    },
})

export const MdMenuItem = createComponent({
    react: React,
    tagName: 'md-menu-item',
    elementClass: _MdMenuItem,
    events: {
        onCloseMenu: 'close-menu',
    },
})

export const MdSubMenu = createComponent({
    react: React,
    tagName: 'md-sub-menu',
    elementClass: _MdSubMenu,
    events: {
        onDeactivateItems: 'deactivate-items',
        onRequestActivation: 'request-activation',
        onDeactivateTypeahead: 'deactivate-typeahead',
        onActivateTypeahead: 'activate-typeahead',
    },
})


