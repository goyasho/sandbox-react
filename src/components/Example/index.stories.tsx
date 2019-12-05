import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Example from './';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Example', () => (
    <Example
      text={text('テキスト', 'ああああ')}
      flag={boolean('テキスト表示', true)}
      action={action('ぽちっとな')}
    />
  ));
