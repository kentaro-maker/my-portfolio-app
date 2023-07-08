"use client";
import useEvent from '@/hooks/useEvent';
import useKey from '@/hooks/useKey';
import useMouse from '@/hooks/useMouse';
import React, { useEffect, useRef, useState, useMemo, ReactNode } from 'react';
import { on, off } from '@/misc/util';
import useMousePressEvent from '@/hooks/useMousePressEvent';
import useMousePress from '@/hooks/useMousePress';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import { useFirstMountState } from '@/hooks/useFirstMountState';


type ButtonProps = {
  className? :string,
  children?: ReactNode,
  value: string,
  downEvent:(key:string)=>void,
  upEvent:(key:string)=>void,
}
const Button = ({ className, children, value, downEvent, upEvent }: ButtonProps) => {
  
  const ref = useRef<HTMLDivElement>(null)
  const [pressed, set] = useState(false)
  const notInitialRender = useRef(false)

  useEffect(() => {
    if (notInitialRender.current) {
      return () => {
        if (pressed) {
          upEvent(value)
        } else if (!pressed) {
          downEvent(value)
        }
      }
    } else {
      notInitialRender.current = true
    }
  }, [pressed]);

  const down = () => {
    console.log('pointerdown')
    set(true)
  }
  const up = () => {
    console.log('pointerup')
    set(false)
  }

  useEffect(() => {
    // on(ref.current, 'mousedown', down);
    // on(ref.current, 'mouseup', up);
    on(ref.current, 'pointerdown', down);
    on(ref.current, 'pointerup', up);
    
    return () => {
        // off(ref.current, 'mousedown', down);
        // off(ref.current, 'mouseup', up);
        off(ref.current, 'pointerdown', down);
        off(ref.current, 'pointerup', up);
    };
  }, [ref.current]);

  return (
    <>
      <div className={`btn ${className}`} ref={ref}>{children}</div>
    </>
  )
}


type KeyboardProps = {
  downEvent?:(key:string)=>void,
  upEvent?:(key:string)=>void,
}

const downHandler = (v) => {
  console.log('Default Down Handler value:' + v)
}

const upHandler = (v) => {
  console.log('Default Up Handler value:' + v)
}

const KeyButton: React.FC<KeyboardProps> = ({downEvent = downHandler, upEvent = upHandler }) => {

  return (
    <>
      <div className="absolute p-4 bottom-0 grid gap-x-2 gap-y-4 grid-cols-3 z-50">
        <Button downEvent={downEvent} upEvent={upEvent} value="1">1</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="2">2</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="3">3</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="4">4</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="5">5</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="6">6</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="7">7</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="8">8</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="9">9</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value="0">0</Button>
        <Button downEvent={downEvent} upEvent={upEvent} value=" " className="col-span-2">SPACE</Button>
      </div>
  </>
  )
}

export default KeyButton
