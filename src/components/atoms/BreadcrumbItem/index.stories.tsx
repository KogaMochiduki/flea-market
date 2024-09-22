import { Meta, StoryObj } from '@storybook/react'
import BreadcrumbItem from './index'

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Atoms/BreadcrumbItem',
  component: BreadcrumbItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  render: () => (
    <div>
      <BreadcrumbItem>Item 1</BreadcrumbItem>
      <BreadcrumbItem>Item 2</BreadcrumbItem>
      <BreadcrumbItem>Item 3</BreadcrumbItem>
    </div>
  ),
}
