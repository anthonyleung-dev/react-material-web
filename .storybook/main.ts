import type { StorybookConfig } from '@storybook/react-webpack5'
import { materialGbWebpackRule } from '../bundler/gb.cjs'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    // `@material/web/labs/gb` loads its styles as CSS module scripts; use the same rule the README gives users.
    webpackFinal: async (webpackConfig) => {
        webpackConfig.module = webpackConfig.module ?? {}
        webpackConfig.module.rules = [...(webpackConfig.module.rules ?? []), materialGbWebpackRule()]
        return webpackConfig
    },
}
export default config
