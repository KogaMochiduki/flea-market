import { Meta, StoryObj } from '@storybook/react'
import Dropdown from './'

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'select' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'array' },
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
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
  },
}

export const InitialValue: Story = {
  args: {
    options: [
      { value: null, label: '-' },
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
      { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
    value: 'one',
  },
}

export const Many: Story = {
  args: {
    options: Array.from(Array(20), (_v, k) => {
      return { value: k.toString(), label: k.toString() }
    }),
    placeholder: 'Please select items from the list',
  },
}
