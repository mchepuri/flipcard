import { FlipCard } from './flipcard';

export default {
  title: 'Example/FlipCard',
  component: FlipCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const flip = {
  args: {
    children:[<div>Front</div>,<div>Back</div>]
  },
};
