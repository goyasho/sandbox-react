// TODO: 見直しは必要.
const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.stories\.[tj]sx?$/,
      include: [SRC_PATH],
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { injectParameters: true },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH],
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    }
  );
  config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
  return config;
};
