import { Meta, StoryObj } from '@storybook/react'
import React, { useEffect } from 'react'
import Header from './'
import { AuthContextProvider } from '@/contexts/AuthContext'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from '@/contexts/ShoppingCartContext'

const meta: Meta<typeof Header> = {
  title: 'organisms/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const Template = () => {
  const authUser = {
    id: 1,
    username: 'dummy',
    displayName: 'Taketo Yoshida',
    email: 'test@example.com',
    profileImageUrl: '/images/sample/1.jpg',
    description: '',
  }

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext()

    useEffect(() => {
      addProductToCart({
        id: 1,
        category: 'book',
        title: 'Product',
        description: '',
        imageUrl: '/images/sample/1.jpg',
        blurDataUrl: '',
        price: 1000,
        condition: 'used',
        owner: authUser,
      })
    }, [])

    return <Header />
  }

  return (
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: 'https://dummy' }}
        authUser={authUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  )
}

export const Login: Story = {
  render: (args) => <Template {...args} />,
}
