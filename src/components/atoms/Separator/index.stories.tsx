import { Meta, StoryObj } from '@storybook/react'
import Separator from './'

const meta: Meta<typeof Separator> = {
  title: 'Atoms/Separator',
  component: Separator,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  render: () => (
    <>
      <Separator>or</Separator>
      <Separator>and</Separator>
      <Separator />
    </>
  ),
}
