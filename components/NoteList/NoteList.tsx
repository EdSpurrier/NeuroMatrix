'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './NoteList.module.css'
import { NoteListProps } from './NoteList.types'
import Note from '../Note/Note'
import system from '@/system'


const NoteList = ({
  className,
}: NoteListProps) => {
  const { data: notes } = system.useNote();

  const renderNotes = () => {
    console.log('note', notes)
    if (notes) {
      return notes.map((note, key) => {
        return <Note key={key} />
      })
    }
  }

  return (
    <div
      className={clsx(
        styles.root,
        className,
        'flex flex-col gap-1 w-full p-1'
      )}
    >
      <div
        className={clsx(
          'flex justify-center items-center'
        )}
      >
        <span>#:{notes?.length}</span>
      </div>
      {renderNotes()}
    </div>
  )
}


export default NoteList