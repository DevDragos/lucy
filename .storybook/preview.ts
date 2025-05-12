import type { Preview } from '@storybook/html'
import { themes } from '@storybook/theming';
//@ts-ignore
import '../base/style.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
      backgrounds: {
          default: 'light',
          values: [
              { name: 'light', value: '#ffffff' },
              { name: 'dark', value: '#000000' },
          ],
      },
      docs: {
          theme: themes.light,
      },
  },
};

export default preview;