'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './NoteEditor.module.css'
import { NoteEditorProps } from './NoteEditor.types'
import system from '@/system'
import AnimatedSlideComponent from '../AnimatedSlideComponent'

const NoteEditor = ({
  children,
  className,
}: NoteEditorProps) => {

  const { editorActive } = system.useNote();



  return (
    <AnimatedSlideComponent
      active={editorActive}
      duration={0.5}
      className={clsx(
        styles.root,
        className,
        'bg-zinc-800 w-full h-1/2 fixed left-0 right-0'
      )}
    >
      BoilerPlate<br />
      {children}
    </AnimatedSlideComponent>
  )
}


export default NoteEditor