import React from 'react';
import { storiesOf } from '@storybook/react';
import InstallSteps from "../../src/components/InstallSteps";
import { wTests } from '../withTests';
import { withKnobs } from '@storybook/addon-knobs';


storiesOf('Newart|InstallSteps', module)
  .addDecorator(wTests('InstallSteps'))
  .addDecorator(withKnobs)
  .add('with text', () => {
    const steps = [
      {
        title: 'Extension Installed',
        content: 'A new prompt will show that the installation process is complete.' ,
        imgSrc: 'http://10.102.138.11:3001/assets/images/chrome/tracker-add.png'
      },
      {
        title: 'Add Extension',
        content: 'When you click the install button above, A browser prompt will appear when you click the install button',
        imgSrc: 'http://10.102.138.11:3001/assets/images/chrome/tracker-installed.png'
      },
    ];
    return (
      <div style={{ margin: 50 }}>
        <InstallSteps steps={steps} />
      </div>
    );
  });
