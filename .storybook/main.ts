import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions","@storybook/addon-styling"],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;