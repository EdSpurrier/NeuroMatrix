'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './CircleButton.module.css'
import { CircleButtonProps } from './CircleButton.types'
import { Button } from '@nextui-org/button';


const CircleButton = ({
  children,
  className,
  ...props
}: CircleButtonProps) => {

  return (
    <Button 
      className={clsx( 
        styles.root,
        className,
        'rounded-full p-2'
      )}
      {...props}
    >
      {children}
    </Button>
  )
}


export default CircleButton