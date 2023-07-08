"use client";
import React, { useEffect, useState } from 'react';

const Button = React.memo(({ dataKey, className, children}) => {
  // console.log('Button child component', value)
  return (
    <div
      data-key={dataKey}
      className={`vkey btn ${className ? className : ''}`}>
      {children}
    </div>
  )
})



const VKeyboard = ({
  handleDown = ((v)=> console.log(v)),
  handleUp =   ((v)=> console.log(v))
}) => {

    
  const handleKeyDown = (event) => {
    // console.log(event)
    const { key, code, type } = (() => {
      switch (event.type) {
        case 'mousedown':
          return (
            {
              key: event.target.dataset.key ?? null,
              code: event.target.dataset.code ?? null,
              type: "mouse"
            }
          )
        case 'keydown':
          return {
              key: event.key ?? null,
              code: event.code ?? null,
              type: "keyboard"
            }
        default:
          return null
      }
    })()
    // if(key) console.log("Down: " + key + ", From: " + type + ", Code: " + code)

    if(key) handleDown(key)
  }

  const handleKeyUp = (event) => {
    // console.log(event)
    const { key, code, type }  = (() => {
      switch (event.type) {
        case 'mouseup':
          return (
            {
              key: event.target.dataset.key ?? null,
              code: event.target.dataset.code ?? null,
              type: "mouse"
            }
          )
        case 'keyup':
          return (
            {
              key: event.key ?? null,
              code: event.code ?? null,
              type: "keyboard"
            }
          ) 
        default:
          return null
      }
    })()
    // if(key) console.log("Up: " + key + ", From: " + type + ", Code: " + code)
    if(key) handleUp(key)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    document.addEventListener('mousedown', handleKeyDown)
    document.addEventListener('mouseup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown',handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      document.removeEventListener('mousedown',handleKeyDown)
      document.removeEventListener('mouseup', handleKeyUp)
    }
  }, [])

  return (
    <>
    <div className="absolute p-4 bottom-0 grid gap-x-2 gap-y-4 grid-cols-3">
      <Button dataKey="1">1</Button>
      <Button dataKey="2">2</Button>
      <Button dataKey="3">3</Button>
      <Button dataKey="4">4</Button>
      <Button dataKey="5">5</Button>
      <Button dataKey="6">6</Button>
      <Button dataKey="7">7</Button>
      <Button dataKey="8">8</Button>
      <Button dataKey="9">9</Button>
      <Button dataKey="0">0</Button>
      <Button dataKey=" " className="col-span-2">SPACE</Button>
    </div>
  </>
  )
}


export default VKeyboard