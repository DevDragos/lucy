import type { Meta } from '@storybook/html'
import { createToggle, type ToggleProps } from './Toggle.ts'

const meta = {
  title: 'Elements/Inputs/Toggle',
  tags: ['autodocs'],
  render: (args) => {
    return createToggle(args)
  },
  argTypes: {}
} satisfies Meta<ToggleProps>

export default meta

export const Default = {
  args: {
    disabled: false
  }
}
