'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './NoteNav.module.css'
import { NoteNavProps } from './NoteNav.types'
import CircleButton from '../CircleButton'
import { IoMdAdd, IoMdArrowBack, IoIosList } from "react-icons/io";
import system from '@/system'
import { Button } from '@nextui-org/button'
import AnimatedFadeComponent from '../AnimatedFadeComponent'
import {IoClose} from "react-icons/io5";
import {siteConfig} from "@/config/site";


const NoteNav = ({
  className,
}: NoteNavProps) => {

  const { editorActive, setEditorState } = system.useNote();

  const noteFilter = (filter: any) => {
    console.log('filter', filter)
  };

  const navigateTo = (route: string, closeEditor: boolean = false) => {
    if (editorActive && closeEditor) {
      setEditorState(false)
      return
    }

    window.location.href = siteConfig.navMenuItems.find(item => item.label === route)?.href || '/';
  }

  const isLocation = (route: string) => {
    return window.location.pathname === siteConfig.navMenuItems.find(item => item.label === route)?.href
  }

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
      callback={(state) => { /*console.log('animation state:', state)*/ }}
      active={editorActive}
      duration={0.125}
      >
        <Button
          id='add-note'
          disableAnimation={editorActive}
          isIconOnly
          className='fixed bottom-4 right-4'
          onClick={() => { setEditorState(true) }}
          color='success'
        >
          <IoMdAdd size="20" className='text-black' />
        </Button>
      </AnimatedFadeComponent>


      <AnimatedFadeComponent
          callback={(state) => { /*console.log('animation state:', state)*/ }}
          active={!editorActive}
          duration={0.125}
      >
        <CircleButton
            id='close-note'
            disableAnimation={editorActive}
            isIconOnly
            className='fixed bottom-4 right-4'
            onClick={() => { setEditorState(false) }}
            color='danger'
        >
          <IoClose size="20" className='text-black' />
        </CircleButton>
      </AnimatedFadeComponent>


        <CircleButton
          id='back'
          isIconOnly
          className='fixed top-4 right-4'
          onClick={navigateBack}
          color='secondary'
        >
          <IoMdArrowBack size="20" className='text-black' />
        </CircleButton>

    </div>
  )
}


export default NoteNav