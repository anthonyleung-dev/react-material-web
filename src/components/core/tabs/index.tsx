'use client'

import React, { ComponentProps } from 'react'
import { createComponent } from '@lit/react'
import { MdTabs as _MdTabs } from '@material/web/tabs/tabs.js'
import { MdPrimaryTab as _MdPrimaryTab } from '@material/web/tabs/primary-tab.js'
import { MdSecondaryTab as _MdSecondaryTab } from '@material/web/tabs/secondary-tab.js'

/**
 * Props for the `MdTabs` component.
 * This interface is used to provide the props for the `MdTabs` component.
 *
 */
export type MdTabsProps = ComponentProps<typeof MdTabs>

/**
 * Props for the `MdPrimaryTab` component.
 * This interface is used to provide the props for the `MdPrimaryTab` component.
 *
 */
export type MdPrimaryTabProps = ComponentProps<typeof MdPrimaryTab>

/**
 * Props for the `MdSecondaryTab` component.
 * This interface is used to provide the props for the `MdSecondaryTab` component.
 *
 */
export type MdSecondaryTabProps = ComponentProps<typeof MdSecondaryTab>

export interface MdTabsElement extends _MdTabs {}

export interface MdPrimaryTabElement extends _MdPrimaryTab {}

export interface MdSecondaryTabElement extends _MdSecondaryTab {}

/**
 * Material Design Tabs component.
 * This component is a React wrapper around the `md-tabs` custom element.
 *
 * @component
 * @param {boolean} autoActivate - Whether or not to automatically select a tab when it is focused.
 * @param {Tab[]} tabs - The tabs of this tab bar.
 * @param {Tab} activeTab - The active tab.
 * @param {number} activeTabIndex - The index of the active tab.
 *
 * Methods:
 * - `scrollToTab(tabToScrollTo): Promise<void>`: Scrolls the toolbar, if overflowing, to the active tab, or the provided tab.
 *
 * @example
 * ```tsx
 * import React from 'react'
 * import { MdTabs, MdPrimaryTab } from 'react-material-web'
 *
 * function TabsExample() {
 *   return (
 *    <MdTabs>
 *     <MdPrimaryTab>Tab 1</MdPrimaryTab>
 *     <MdPrimaryTab>Tab 2</MdPrimaryTab>
 *    <MdPrimaryTab>Tab 3</MdPrimaryTab>
 *   </MdTabs>
 *   )
 * }
 * ```
 */
export const MdTabs = createComponent({
    react: React,
    tagName: 'md-tabs',
    elementClass: _MdTabs,
    events: {
        onChange: 'change',
    },
})

/**
 * Material Design Primary Tab component.
 * This component is a React wrapper around the `md-primary-tab` custom element.
 *
 * @component
 * @param {boolean} inlineIcon - Whether or not the icon renders inline with label or stacked vertically.
 * @param {boolean} isTab - The attribute md-tab indicates that the element is a tab for the parent element, <md-tabs>. Make sure if you're implementing your own md-tab component that you have an md-tab attribute set.
 * @param {boolean} active - Whether or not the tab is selected.
 * @param {boolean} hasIcon - In SSR, set this to true when an icon is present.
 * @param {boolean} iconOnly - In SSR, set this to true when there is no label and only an icon.
 * @param {boolean} selected - Whether or not the tab is selected.
 */
export const MdPrimaryTab = createComponent({
    react: React,
    tagName: 'md-primary-tab',
    elementClass: _MdPrimaryTab,
})

/**
 * Material Design Secondary Tab component.
 * This component is a React wrapper around the `md-secondary-tab` custom element.
 *
 * @component
 * @param {boolean} isTab - The attribute md-tab indicates that the element is a tab for the parent element, <md-tabs>. Make sure if you're implementing your own md-tab component that you have an md-tab attribute set.
 * @param {boolean} active - Whether or not the tab is selected.
 * @param {boolean} hasIcon - In SSR, set this to true when an icon is present.
 * @param {boolean} iconOnly - In SSR, set this to true when there is no label and only an icon.
 * @param {boolean} selected - Whether or not the tab is selected.
 */
export const MdSecondaryTab = createComponent({
    react: React,
    tagName: 'md-secondary-tab',
    elementClass: _MdSecondaryTab,
})
