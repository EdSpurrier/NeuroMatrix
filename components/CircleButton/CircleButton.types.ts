import { ButtonProps } from '@nextui-org/button'
import { ReactNode } from 'react'

export interface CircleButtonProps extends ButtonProps {
  children?: ReactNode
  className?: string
}
