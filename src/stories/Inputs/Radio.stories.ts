import type { Meta } from '@storybook/html'
import { createRadio, type RadioProps } from './Radio.ts'

const meta = {
  title: 'Elements/Inputs/Radio',
  tags: ['autodocs'],
  render: (args) => {
    return createRadio(args)
  },
  argTypes: {}
} satisfies Meta<RadioProps>

export default meta

export const Default = {
  args: {
    disabled: false
  }
}
