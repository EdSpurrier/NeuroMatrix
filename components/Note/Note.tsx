'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './Note.module.css'
import { NoteProps } from './Note.types'

const Note = ({
  className,
}: NoteProps) => {

  return (
    <div 
      className={clsx( 
        styles.root,
        className,
        'bg-zinc-800 p-3 py-2 rounded-md text-md'
      )}
    >
      Note
    </div>
  )
}


export default Note