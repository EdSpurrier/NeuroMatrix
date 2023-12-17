import { ReactNode } from 'react'

export interface AnimatedSlideComponentProps {
  children?: ReactNode
  className?: string
  active: boolean
  callback?: (state: boolean) => void
  duration?: number
  fade?: boolean
}
