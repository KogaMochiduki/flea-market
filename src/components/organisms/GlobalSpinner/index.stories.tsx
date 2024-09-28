import { Meta, StoryObj } from '@storybook/react'
import GlobalSpinner from './index'
import Button from '@/components/atoms/Button'
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from '@/contexts/GlobalSpinnerContext'

const meta: Meta<typeof GlobalSpinner> = {
  title: 'organisms/GlobalSpinner',
  component: GlobalSpinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const Template = () => {
  const ChildComponent = () => {
    const setGlobalSpinner = useGlobalSpinnerActionsContext()
    const handleClick = () => {
      setGlobalSpinner(true)
      // 5秒後に閉じる
      setTimeout(() => {
        setGlobalSpinner(false)
      }, 5000)
    }

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>スピナー表示</Button>
      </>
    )
  }

  return (
    <GlobalSpinnerContextProvider>
      <ChildComponent />
    </GlobalSpinnerContextProvider>
  )
}

export const WithControl: Story = {
  render: (args) => <Template {...args} />,
}
