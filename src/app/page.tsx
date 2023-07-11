import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">安眠休 Ann-Ming-Qu</h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         
          <Link href="/showcase" className="mt-10 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Showcase</Link>
        </div>
      </div>
    </main>
  )
}
