import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import type * as Stitches from '@stitches/react'

export const StyledBox = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof StyledBox> {
  as?: ElementType
}

export type StyledButtonVariants = Stitches.VariantProps<typeof StyledBox>

export function Box(props: StyledButtonVariants) {
  return <StyledBox {...props}></StyledBox>
}
