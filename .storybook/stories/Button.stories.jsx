import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../src/components/Button';
import { wTests } from '../withTests';

storiesOf('Library|Button', module)
  .addDecorator(wTests('Button'))
  .add('Default button', () => (
    <Button onPress={action('clicked1')}>
      <span>Click me!</span>
    </Button>
  ))
  .add('Light button', () => (
    <Button onPress={action('clicked2')} type="light">
      <span>Click me!</span>
    </Button>
  ));
