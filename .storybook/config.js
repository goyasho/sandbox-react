import { configure } from '@storybook/react';

const loaderFn = () => {
  const req = require.context('../src', true, /\.stories\.(tsx|js)$/);
  return req.keys().map(fileName => req(fileName));
};

configure(loaderFn, module);
