import React from 'react'
import Link from 'next/link'
import { showcase, SiteProps } from '@/showcase'
import { Footer } from '@/components/Footer'
import Image from 'next/image'


function Site({ 
  site,
  priority = false
}:{
  site: SiteProps,
  priority:boolean
}) {

  return (
    <li
      className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50"
      >
      <div className="flex flex-wrap items-center mt-6">
        <h2 className="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400">
          <Link href={`/showcase/${site.slug}`}>
            <span className="absolute inset-0 rounded-3xl" />
            {site.name}
          </Link>
        </h2>
        <svg
          className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
            stroke="#0EA5E9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
          {site.description}
        </p>
      </div>
    </li>
  )
}

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Black Phone Prototype",
     link: "/showcase/kurodenwa/proto",
  },
  {
    name: "Black Phone",
     link: "/showcase/kurodenwa",
  },
  {
    name: "KeyButton",
     link: "/showcase/keybutton",
  },
  {
    name: "KeyBoard",
     link: "/showcase/keyboard",
  },
  {
    name: "KeyBoard Prototype",
     link: "/showcase/keyboard/proto",
  },
  {
    name: "PDF",
     link: "/showcase/pdf",
  },
  {
    name: "PDF Prototype",
     link: "/showcase/pdf/proto",
  },
  {
    name: "Typewriter Prototype",
     link: "/showcase/typewriter/proto",
  },
  {
    name: "Pen Position",
     link: "/showcase/penpos",
  },
  {
    name: "Memo Proto",
     link: "/showcase/memo/proto",
  },
  {
    name: "PaperAnime Proto",
     link: "/showcase/paperanime/proto",
  },
  {
    name: "AlphaMap Experiment",
     link: "/showcase/alphamap",
  },
  {
    name: "Canvas FillText",
     link: "/showcase/canvasfilltext",
  },
  {
    name: "Cube Presentation",
     link: "/showcase/cubepresentation",
  },
  {
    name: "Selective BufferGeometry",
     link: "/showcase/selective-buffergeometry",
  },
  {
    name: "BufferGeometry",
     link: "/showcase/buffergeometry",
  },
  {
    name: "useFBO",
     link: "/showcase/usefbo",
  },
  {
    name: "gomi",
     link: "/showcase/gomi",
  },
  {
    name: "CanvasTexture",
     link: "/showcase/canvastexture",
  }
]

export default function Showcase() {
  return (
    <>
      {/* <main className="mt-16 sm:mt-20 relative">
        <Link href="/">Home</Link>
        <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
          <h1 className="text-sm leading-6 font-semibold text-sky-500">Showcase</h1>
          <p className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white">
            You can build anything with Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Well not quite <em>anything</em>, like you can't build a spaceship with it. But you can
            definitely build the website for the spaceship —{' '}
           
            .
          </p>
        </div>
        <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          {showcase.map((site, siteIndex) => (
            <Site key={site.name} site={site} priority={siteIndex < 6} />
          ))}
        </ul>
      </main> */}
      <main>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">My Site / Showcase</h1>
          </div>
          {links.map((site, siteIndex) => (
            <div key={siteIndex} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <Link
                href={site.link}
                className="mt-10 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                {site.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/render.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    imageSrc: '/render.png',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    imageSrc: '/render.png',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    imageSrc: '/render.png',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    imageSrc: '/render.png',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    imageSrc: '/render.png',
    href: '#',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]
