import { Meta, StoryObj } from '@storybook/react'
import Breadcrumb from './'
import BreadcrumbItem from '@/components/atoms/BreadcrumbItem'

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Molecules/Breadcrumb',
  component: BreadcrumbItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="#">Top</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Clothes</a>
      </BreadcrumbItem>
      <BreadcrumbItem>Item</BreadcrumbItem>
    </Breadcrumb>
  ),
}
