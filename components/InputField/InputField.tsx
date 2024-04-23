'use client'

import React, {useState} from 'react'
import clsx from 'clsx'
import styles from './InputField.module.css'
import { InputFieldProps } from './InputField.types'
import system from '@/system'
import AnimatedSlideComponent from '../AnimatedSlideComponent'
import {Input} from "@nextui-org/input";
import { Button } from '@nextui-org/button';
import {MdClear, MdContentPasteGo, MdCopyAll} from "react-icons/md";

const InputField = ({
    label,
    value,
    className,
    onValueChange,
}: InputFieldProps) => {
    const [inputValue, setInputValue] = useState(value);


    const updateValue = (value: string) => {
        setInputValue(value);
        if (onValueChange) onValueChange(value);
    }

  return (
    <div
        className={clsx(
            styles.root,
            className,
            'flex gap-1 align-middle w-full'
        )}
    >
      <Input
          isRequired
          type="text"
          label={label}
          size='sm'
          onChange={(e) => updateValue(e.target.value)}
          value={inputValue}
          defaultValue={inputValue}
      />
        <Button
            size="lg"
            isIconOnly
            color="success"
            aria-label="Paste"
            onClick={async () => updateValue(`${inputValue}` + await system.utils.clipboard.paste())}
        >
            <MdContentPasteGo size="20"/>
        </Button>
        <Button
            size="lg"
            isIconOnly
            color="primary"
            aria-label="Copy"
            onClick={() => system.utils.clipboard.copy(inputValue)}
        >
            <MdCopyAll size="20"/>
        </Button>
        <Button
            size="lg"
            isIconOnly
            color="danger"
            aria-label="Clear"
            onClick={() => updateValue('')}
        >
            <MdClear size="20"/>
        </Button>

    </div>
  )
}


export default InputField