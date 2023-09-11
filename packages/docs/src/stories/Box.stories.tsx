import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@ea-ignite-ui/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o Elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

type Story = StoryObj<typeof Box>

export const Primary: Story = {}

export default meta
