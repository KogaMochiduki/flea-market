import { Meta, StoryObj } from '@storybook/react'
import BadgeIconButton from './index'
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/IconButton'

const meta: Meta<typeof BadgeIconButton> = {
  title: 'Molecules/BadgeIconButton',
  component: BadgeIconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'アイコン',
      table: {
        type: { summary: 'object' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: 'バッジのカウンター',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: 'バッジの背景色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const SearchBadgeIcon: Story = {
  args: {
    icon: <SearchIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#ed9f28',
  },
}

export const PersonBadgeIcon: Story = {
  args: {
    icon: <PersonIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#d4001a',
  },
}

export const ShoppingCartBadgeIcon: Story = {
  args: {
    icon: <ShoppingCartIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#32bf00',
  },
}
