import { Meta, StoryObj } from '@storybook/react'
import RectLoader from './'

const meta: Meta<typeof RectLoader> = {
  title: 'Atoms/RectLoader',
  component: RectLoader,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    width: 320,
    height: 320,
  },
}
