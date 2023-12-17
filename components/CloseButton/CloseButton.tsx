'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './CloseButton.module.css'
import { CloseButtonProps } from './CloseButton.types'
import { IoMdArrowBack } from "react-icons/io";

const CloseButton = ({
  className,
  closeAction,
}: CloseButtonProps) => {

  return (
    closeAction !== null && (
      <div
        onClick={closeAction}
        className={clsx(
          styles.root,
          className,
          'bg-zinc-800 rounded-full p-2 cursor-pointer shadow-md'
        )}
      >
        <IoMdArrowBack size="20" className='text-zinc-300'/>
      </div>
    )
  )
}


export default CloseButton