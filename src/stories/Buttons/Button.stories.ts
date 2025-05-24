import type { Meta, StoryObj } from '@storybook/html'
import type { ButtonProps } from './Button.ts'
import { createButton } from './Button.ts'

const meta = {
  title: 'Elements/Buttons/Button',
  tags: ['autodocs'],
  render: (args) => {
    return createButton(args)
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: { control: { type: 'select' }, options: ['primary', 'secondary'] }
  }
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: false
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button'
  }
}
