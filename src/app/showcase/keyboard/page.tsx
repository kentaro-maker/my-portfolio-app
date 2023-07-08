"use client";
import React from 'react';
import KeyButton from '@/components/KeyButton';


const Page = () => {
  
  const customDown = (value) => {
    console.log("From customDown " + value)
  }
  return (
    <>
      <p>keybutton</p>
      <KeyButton  />
    </>
  )
}

export default Page
