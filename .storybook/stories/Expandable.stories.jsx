import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Expandable from '../../src/components/Agreement/Expandable';
import { wTests } from '../withTests';

const content = 'This is just some text meant to be used as an agreement, providing great information about a Privacy Policy and the applicable legislation and regulations.';
storiesOf('Custom|Agreement.Expandable', module)
  .addDecorator(wTests('Expandable'))
  .addDecorator(withKnobs)
  .add('Simple expand', () => <Expandable content={content} title="Privacy" />)
  .add('Empty expand', () => <Expandable />);

