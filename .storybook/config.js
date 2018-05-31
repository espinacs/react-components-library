import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  name: 'Components catalogue',
  enableShortcuts: false,
});

function loadStories() {
  require('./stories/Card.stories');
  // require('./stories/Agreement.stories');
  require('./stories/Expandable.stories');
  require('./stories/Button.stories');
}

configure(loadStories, module);
