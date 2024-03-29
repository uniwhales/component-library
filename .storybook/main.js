const path = require("path");
module.exports = {
  webpackFinal: async (config, {
    configType
  }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    // Return the altered config
    return config;
  },
  "stories": ["../src/atoms/**/*.stories.mdx", "../src/molecules/**/*.stories.mdx", "../src/atoms/**/*.stories.@(js|jsx|ts|tsx)", "../src/molecules/**/*.stories.@(js|jsx|ts|tsx)", "../src/organisms/**/*.stories.@(js|jsx|ts|tsx)", "../src/layouts/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-controls", "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss"],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};