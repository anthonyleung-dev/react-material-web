import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdNavigationBar as _MdNavigationBar } from '@material/web/labs/navigationbar/navigation-bar.js'
import { MdNavigationTab as _MdNavigationTab } from '@material/web/labs/navigationtab/navigation-tab.js'

/**
 * Props for the `MdNavigationBar` component.
 * This interface is used to provide the props for the `MdNavigationBar` component.
 *
 */
export type MdNavigationBarProps = ComponentProps<typeof MdNavigationBar>

/**
 * Props for the `MdNavigationTab` component.
 * This interface is used to provide the props for the `MdNavigationTab` component.
 *
 */
export type MdNavigationTabProps = ComponentProps<typeof MdNavigationTab>

export interface MdNavigationBarElement extends _MdNavigationBar {}

export interface MdNavigationTabElement extends _MdNavigationTab {}

/**
 * Material design navigation bar component
 * This component is a React wrapper around the `md-navigation-bar` custom element.
 *
 * @component
 * @param {number} activeIndex - The index of the active tab.
 * @param {boolean} hideInactiveLabels - Whether to hide the labels of inactive tabs.
 * @param {NavigationTab[]} tabs - The tabs to display in the navigation bar.
 *
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdNavigationBar, MdNavigationTab } from 'material-web-react'
 *
 * const App = () => {
 *    return <MdNavigationBar>
 *       <MdNavigationTab label="Home" />
 *       <MdNavigationTab label="Profile" />
 *   </MdNavigationBar>
 * }
 * ```
 */
export const MdNavigationBar = createComponent({
    react: React,
    tagName: 'md-navigation-bar',
    elementClass: _MdNavigationBar,
})

/**
 * Material design navigation tab component
 * This component is a React wrapper around the `md-navigation-tab` custom element.
 *
 * @component
 * @param {boolean} disabled - Whether the tab is disabled.
 * @param {boolean} active - Whether the tab is active.
 * @param {boolean} hideInactiveLabel - Whether to hide the label of inactive tabs.
 * @param {string} label - The label for the tab.
 * @param {string} badgeValue - The value for the badge.
 * @param {boolean} showBadge - Whether to show the badge.
 * @param {HTMLElement | null} buttonElement - The button element.
 *
 */
export const MdNavigationTab = createComponent({
    react: React,
    tagName: 'md-navigation-tab',
    elementClass: _MdNavigationTab,
})
