import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  name: 'Newart Catalogue',
  enableShortcuts: false,
});

function loadStories() {
  require('./stories/InstallSteps.stories');
  // require('./stories/AntDesign');
}

configure(loadStories, module);
