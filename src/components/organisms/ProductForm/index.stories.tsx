import { Meta, StoryObj } from '@storybook/react'
import ProductForm from './index'

const meta: Meta<typeof ProductForm> = {
  title: 'Organisms/ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
  argTypes: {
    onProductSave: {
      description: '出品ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {}
