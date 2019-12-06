import { configure, addDecorator, addParameters } from "@storybook/react";
import { setConsoleOptions } from "@storybook/addon-console";
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

setConsoleOptions({
  panelExclude: []
});
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

const req = require.context('../src', true, /.stories.(tsx|js)$/);
function loadStories() {
  addDecorator(withInfo);
  addDecorator(withKnobs({ escapeHTML: false })); // & とかをエスケープしないようにしたいなら true にする.

  req.keys().forEach(req);
}

configure(loadStories, module);
