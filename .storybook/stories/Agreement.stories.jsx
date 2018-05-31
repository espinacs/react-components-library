import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Agreement from '../../src/components/Agreement';
// import { wTests } from '../withTests';

const testText = [
  {
    title: 'Privacy',
    content: 'Please say hello to our friends in NSA while you accept this Privacy Policy and the applicable legislation and regulations.',
  },
  {
    title: 'Other Provisions',
    content: 'We are at all times authorised to amend or to supplement these Conditions for Use. The amended or supplemented Conditions for Use will be brought to the attention of the User during his or her use of this software.',
  },
]
storiesOf('Custom|Agreement', module)
  // .addDecorator(wTests('Agreement'))
  .add('simple Agreement', () => (
    <div style={{ margin: 50 }}>
      <Agreement
        onAccept={action('ACCEPTED!')}
        agreementLabel="User Agreement"
        text={testText}
      />
    </div>
  ))
  .add('double Agreement', () => (
    <div style={{ margin: 50 }}>
      <Agreement
        onAccept={action('ACCEPTED!')}
        agreementLabel="User Agreement"
        text={testText}
      />
      <br />
      <Agreement
        onAccept={action('ACCEPTED!')}
        agreementLabel="Privacy Policy"
        text={testText}
      />
    </div>
  ));
