'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './NoteList.module.css'
import { NoteListProps } from './NoteList.types'
import Note from '../Note/Note'
import system from '@/system'
import AddNoteButton from '../AddNoteButton'
import BackButton from '../BackButton'

const NoteList = ({
  className,
}: NoteListProps) => {
  const { data: notes } = system.useNote();

  const renderNotes = () => {
    console.log('note', notes)
    return (
      <>
        <Note />
        <Note />
        <Note />
        <Note />
      </>
    )
  }

  return (
    <>
      <div
        className={clsx(
          styles.root,
          className,
          'flex flex-col gap-1 w-full p-1'
        )}
      >
        {renderNotes()}
      </div>
      <AddNoteButton />
      <BackButton />
    </>
  )
}


export default NoteList