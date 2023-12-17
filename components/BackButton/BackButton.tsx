'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './BackButton.module.css'
import { BackButtonProps } from './BackButton.types'
import { IoMdArrowBack } from "react-icons/io";

const BackButton = ({
  className,
}: BackButtonProps) => {

  const navigateBack = () => {
    // Check if back in history is this url

    if (window.history.length === 1) {
      window.location.href = '/'
    }

    window.history.back()
  }

  return (
    <div
      onClick={navigateBack}
      className={clsx( 
        styles.root,
        className,
        'bg-zinc-800 rounded-full p-2 cursor-pointer shadow-md'
      )}
    >
      <IoMdArrowBack size="20" className='text-zinc-300'/>
    </div>
  )
}


export default BackButton