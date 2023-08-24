import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ZCOOL_QingKe_HuangYou, Long_Cang } from 'next/font/google'

const zcool = ZCOOL_QingKe_HuangYou({
  weight: '400',
})

const longcang = Long_Cang({weight: '400'})


export default function Home() {
  return (
    <main>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            <span className={zcool.className}>安眠休</span>
            <span className={longcang.className}>an min q</span>
          </h1>
        </div>

        <div>
          <p>Hi, My Name is Kentaro (健太朗 written in Kanji). Some call me Ken-chan or Kenny.</p>
          <p>I'm figuring  out that 3DWeb is the most novel way to express something.</p>
          <p>Lets's innovate!</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         
          <Link href="/showcase" className="mt-10 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Showcase</Link>
        </div>
      </div>
    </main>
  )
}
