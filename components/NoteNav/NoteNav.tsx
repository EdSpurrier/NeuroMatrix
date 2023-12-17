'use client'

import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './NoteNav.module.css'
import { NoteNavProps } from './NoteNav.types'
import AddNoteButton from '../AddNoteButton'
import BackButton from '../BackButton'

const NoteNav = ({
  children,
  className,
  style,
}: NoteNavProps) => {

  const setStyles = (): CSSProperties => {
    return {
      ...style,
      /* Add Additional CSS Styles Here... */
    }
  }

  return (
    <div 
      style={setStyles()}
      className={clsx( 
        styles.root,
        className
      )}
    >
            <AddNoteButton />
            <BackButton className='fixed bottom-5 right-5'/>
    </div>
  )
}


export default NoteNav