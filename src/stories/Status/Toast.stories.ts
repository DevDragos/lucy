import type { Meta } from '@storybook/html'
import { createToast, type ToastProps } from './Toast.ts'

const meta = {
  title: 'Elements/Status/Toast',
  tags: ['autodocs'],
  render: (args) => {
    return createToast(args)
  },
  argTypes: {
    titleText: { control: 'text' },
    content: { control: 'text' },
    variant: { control: { type: 'select' }, options: ['primary', 'success', 'info', 'warning', 'error'] }
  }
} satisfies Meta<ToastProps>

export default meta

export const Default = {
  args: {
    titleText: 'Title',
    content: 'Content text goes here',
    variant: 'primary'
  }
}
