import { Meta, StoryObj } from '@storybook/react'
import Footer from './'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {}
