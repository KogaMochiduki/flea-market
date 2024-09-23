import { Meta, StoryObj } from '@storybook/react'
import CheckBox from './'

const meta: Meta<typeof CheckBox> = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '表示ラベル',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'チェック',
      table: {
        type: { summary: 'number' },
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

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
}
