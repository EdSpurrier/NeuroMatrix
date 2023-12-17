'use client'

import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './NoteEditor.module.css'
import { NoteEditorProps } from './NoteEditor.types'

const NoteEditor = ({
  children,
  className,
  style,
}: NoteEditorProps) => {

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
      BoilerPlate<br />
      {children}
    </div>
  )
}


export default NoteEditor