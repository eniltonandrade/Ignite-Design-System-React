import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@ignite-ui/react'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/eniltonandrade.png',
    alt: 'Enilton Andrade',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
