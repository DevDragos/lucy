import { createLabel, type LabelProps } from './Label.ts'
import type { Meta } from '@storybook/html'

const meta = {
  title: 'Elements/Inputs/Label',
  tags: ['autodocs'],
  render: (args) => {
    return createLabel(args)
  },
  argTypes: {
    labelText: { control: 'text' }
  }
} satisfies Meta<LabelProps>

export default meta

export const Default = {
  args: {
    labelText: 'Label',
    disabled: false
  }
}
