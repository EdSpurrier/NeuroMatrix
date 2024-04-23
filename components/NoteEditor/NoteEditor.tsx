'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './NoteEditor.module.css'
import { NoteEditorProps } from './NoteEditor.types'
import system from '@/system'
import AnimatedSlideComponent from '../AnimatedSlideComponent'
import InputField from "@/components/InputField";
import {MdClear} from "react-icons/md";
import {Button} from "@nextui-org/button";

const NoteEditor = ({
  className,
}: NoteEditorProps) => {

  const { editorActive, createData, currentData } = system.useNote();

  const saveData = () => {

    createData(currentData.name, currentData.type, currentData.data);
    console.log('Saving data:', currentData);
  }

  return (
    <AnimatedSlideComponent
      active={editorActive}
      duration={0.25}
      className={clsx(
        styles.root,
        className,
        'bg-zinc-900 w-full h-1/2 fixed left-0 right-0 p-4'
      )}
    >
      <InputField
        label="Title"
        value={currentData.name}
        onValueChange={(value) => currentData.name = value}
      />
      <Button
          size="lg"
          isIconOnly
          color="danger"
          aria-label="Clear"
          onClick={saveData}
      >
        <MdClear size="20"/>
      </Button>
    </AnimatedSlideComponent>
  )
}


export default NoteEditor