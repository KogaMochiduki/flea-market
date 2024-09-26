import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import FilterGroup, { FilterGroupProps } from './index'

const meta: Meta<typeof FilterGroup> = {
  title: 'Molecules/FilterGroup',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'タイトル',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'select' },
      description: 'オプション',
      table: {
        type: { summary: 'array' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Template = (args: FilterGroupProps) => {
  const [value, setValue] = useState<string[]>([])
  const handleChange = (value: string[]) => {
    setValue(value)
    if (args && args.onChange) {
      args.onChange(value)
    }
  }

  return <FilterGroup value={value} onChange={handleChange} {...args} />
}

export const Standard: Story = {
  args: {
    title: 'All categories',
    items: [
      { label: 'Clothes', name: 'clothes' },
      { label: 'Books', name: 'books' },
      { label: 'Shoes', name: 'shoes' },
    ],
  },
  render: (args) => <Template {...args} />,
}
