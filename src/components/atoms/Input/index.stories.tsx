import { Meta, StoryObj } from '@storybook/react'
import Input from './'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'ボーダーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    hasError: false,
  },
}

export const Error: Story = {
  args: {
    hasError: true,
  },
}
