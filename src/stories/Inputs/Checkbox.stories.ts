import type { Meta } from '@storybook/html'
import { type CheckboxProps, createCheckbox } from './Checkbox.ts'

const meta = {
  title: 'Elements/Inputs/Checkbox',
  tags: ['autodocs'],
  render: (args) => {
    return createCheckbox(args)
  },
  argTypes: {}
} satisfies Meta<CheckboxProps>

export default meta

export const Default = {
  args: {
    disabled: false
  }
}
