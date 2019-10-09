import { Welcome } from '@storybook/angular/demo';
import * as markdown from './sample.md';
import { storiesOf } from '@storybook/angular';

export default {
  title: 'Welcome',
};

export const toStorybook = () => ({
  component: Welcome,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};

toStorybook.story = {
  name: 'some shit out here',
  parameters: { notes: markdown },
};

storiesOf('Welcome A', module)
  .add('Classic', () => ({
    component: Welcome,
    props: {
      name: 'Chris',
    },
  }),
  { notes: markdown }
  );
