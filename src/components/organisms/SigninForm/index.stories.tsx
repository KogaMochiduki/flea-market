import { Meta, StoryObj } from '@storybook/react'
import SigninForm from './'

const meta: Meta<typeof SigninForm> = {
  title: 'Organisms/SigninForm',
  component: SigninForm,
  tags: ['autodocs'],
  argTypes: {
    onSignin: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Form: Story = {}
