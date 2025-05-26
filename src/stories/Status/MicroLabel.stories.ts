import { createMicroLabel, type MicroLabelProps } from './MicroLabel.ts'
import type { Meta } from '@storybook/html'

const meta = {
  title: 'Elements/Status/MicroLabel',
  tags: ['autodocs'],
  render: (args) => {
    return createMicroLabel(args)
  },
  argTypes: {
    labelText: { control: 'text' },
    variant: { control: { type: 'select' }, options: ['primary', 'success', 'info', 'warning', 'error'] }
  }
} satisfies Meta<MicroLabelProps>

export default meta

export const Default = {
  args: {
    labelText: 'Label',
    variant: 'primary'
  }
}
