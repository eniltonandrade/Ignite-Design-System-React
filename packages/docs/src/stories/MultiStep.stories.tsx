import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, Text } from '@ignite-ui/react'

const meta: Meta<typeof MultiStep> = {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof MultiStep>

export const Primary: Story = {}
