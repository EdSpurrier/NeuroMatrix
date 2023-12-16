'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './AddNoteButton.module.css'
import { AddNoteButtonProps } from './AddNoteButton.types'
import { IoMdAdd } from "react-icons/io";

const AddNoteButton = ({
  children,
  className,
}: AddNoteButtonProps) => {

  return (
    <div 
      className={clsx( 
        styles.root,
        className,
        'bg-zinc-800 rounded-full p-2 cursor-pointer shadow-md fixed bottom-5 right-5'
      )}
    >
      <IoMdAdd size="20" className='text-zinc-300'/>
    </div>
  )
}


export default AddNoteButton