const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.stories\.[tj]sx?$/,
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { injectParameters: true },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
      // include: [path.resolve(__dirname, '../src')],
      // enforce: 'pre',
    },
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    }
  )
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
