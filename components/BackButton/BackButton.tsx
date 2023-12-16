'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './BackButton.module.css'
import { BackButtonProps } from './BackButton.types'
import { IoMdArrowBack } from "react-icons/io";

const BackButton = ({
  children,
  className,
}: BackButtonProps) => {

  return (
    <div 
      className={clsx( 
        styles.root,
        className,
        'bg-zinc-800 rounded-full p-2 cursor-pointer shadow-md fixed bottom-5 right-5'
      )}
    >
      <IoMdArrowBack size="20" className='text-zinc-300'/>
    </div>
  )
}


export default BackButton