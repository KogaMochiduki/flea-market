import { Meta, StoryObj } from '@storybook/react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './'

const meta: Meta<typeof SearchIcon> = {
  title: 'Atoms/IconButton',
  component: SearchIcon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'text' },
      description: 'アイコン色',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  render: (args) => (
    <>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
    </>
  ),
}
