import type { Preview } from '@storybook/react'
import {TamaguiProvider} from 'tamagui';
import {config} from '../src/tamagui.config';

/*

export default {
  decorators: [
    (Story) => {
      const dark = useDarkMode();

      return (
        <>
          <PaletteStyleTag theme={dark ? 'dark' : 'light'} />
          <Story />
        </>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Preview;
*/
const preview: Preview = {
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 4,
        cellAmount: 4,
        opacity: 0.5,
      },
    },
    options: {
      storySort: {
        order: [
          'Inputs',
          'Data Display',
          'Feedback',
          'Containers',
          'Navigation',
          'Layout',
          'Message',
          'Sidebar',
        ],
      },
    },
    
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
};

export default preview;