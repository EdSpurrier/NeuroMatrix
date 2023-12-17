'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './NoteNav.module.css'
import { NoteNavProps } from './NoteNav.types'
import CircleButton from '../CircleButton'
import { IoMdAdd, IoMdArrowBack } from "react-icons/io";
import system from '@/system'
import { Button } from '@nextui-org/button'
import AnimatedFadeComponent from '../AnimatedFadeComponent'

const NoteNav = ({
  className,
}: NoteNavProps) => {

  const { editorActive, setEditorState } = system.useNote();



  const navigateBack = () => {
    if (editorActive) {
      setEditorState(false)
      return
    }
    // Check if back in history is this url
    if (window.history.length === 1) {
      window.location.href = '/'
    }
    window.history.back()
  }

  return (
    <div
      className={clsx(
        styles.root,
        className
      )}
    >

      <AnimatedFadeComponent
      callback={(state) => { console.log('animation state:', state) }}
      active={editorActive}
      >
        <Button
          id='add-note'
          disableAnimation={editorActive}
          isIconOnly
          className='fixed bottom-4 right-4'
          onClick={() => { setEditorState(true) }}
          color='primary'
        >
          <IoMdAdd size="20" className='text-black' />
        </Button>
      </AnimatedFadeComponent>

      <CircleButton
        id='back'
        isIconOnly
        className='fixed top-4 right-4'
        onClick={navigateBack}
      >
        <IoMdArrowBack size="20" className='text-black' />
      </CircleButton>

    </div>
  )
}


export default NoteNav