import { ReactNode } from 'react'

export interface AnimatedFadeComponentProps {
  children?: ReactNode
  className?: string
  active: boolean
  callback?: (state: boolean) => void
  duration?: number
}
