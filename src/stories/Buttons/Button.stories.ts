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
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    disabled: false
  }
}

export const Secondary: Story = {
  args: {
    label: 'Button'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
}
