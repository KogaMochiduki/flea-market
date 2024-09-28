import { Meta, StoryObj } from '@storybook/react'
import ProductCard from './'

const meta: Meta<typeof ProductCard> = {
  title: 'Organisms/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '商品名',
      table: {
        type: { summary: 'string' },
      },
    },
    price: {
      control: { type: 'number' },
      description: '商品価格',
      table: {
        type: { summary: 'number' },
      },
    },
    imageUrl: {
      control: { type: 'text' },
      description: '商品画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    blurDataUrl: {
      control: { type: 'text' },
      description: '商品のぼかし画像のデータURIスキーム',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      options: ['listing', 'small', 'detail'],
      control: { type: 'radio' },
      defaultValue: 'listing',
      description: 'バリアント（表示スタイル）',
      table: {
        type: { summary: 'listing | small | detail' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Listingカード
export const Listing: Story = {
  args: {
    variant: 'listing',
    title: 'ナイスシューズ',
    imageUrl: '/images/sample/1.jpg',
    price: 2000,
  },
}

// Smallカード
export const Small: Story = {
  args: {
    variant: 'small',
    title: 'ナイスシューズ',
    imageUrl: '/images/sample/1.jpg',
    price: 2000,
  },
}

// Detailカード
export const Detail: Story = {
  args: {
    variant: 'detail',
    title: 'ナイスシューズ',
    imageUrl: '/images/sample/1.jpg',
    price: 2000,
  },
}
