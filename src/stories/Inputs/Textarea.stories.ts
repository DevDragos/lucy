import { createTextarea, type TextareaProps } from './Textarea.ts'
import type { Meta } from '@storybook/html'

const meta = {
  title: 'Elements/Inputs/Textarea',
  tags: ['autodocs'],
  render: (args) => {
    return createTextarea(args)
  },
  argTypes: {
    labelText: { control: 'text' }
  }
} satisfies Meta<TextareaProps>

export default meta

export const Default = {
  args: {
    labelText: 'Label',
    disabled: false
  }
}
