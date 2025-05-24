import { createInput, type InputProps } from './Inputs.ts'
import type { Meta } from '@storybook/html'

const meta = {
  title: 'Elements/Inputs/Input',
  tags: ['autodocs'],
  render: (args) => {
    return createInput(args)
  },
  argTypes: {
    labelText: { control: 'text' }
  }
} satisfies Meta<InputProps>

export default meta

export const Default = {
  args: {
    labelText: 'Label',
    disabled: false
  }
}
