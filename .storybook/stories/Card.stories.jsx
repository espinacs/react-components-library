import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../../src/components/Card';
import { wTests } from '../withTests';

storiesOf('Library|Card', module)
  .addDecorator(wTests('Card'))
  .add('Regular', () => (
    <Card>
      <span>Content goes here</span>
    </Card>
  ))
  .add('Contrast Card', () => (
    <Card type="contrast">
      <span>Content goes here</span>
    </Card>
  ));
