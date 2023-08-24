import React, { useEffect, useRef, useState, useMemo, ReactNode } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { ZCOOL_QingKe_HuangYou, Long_Cang } from 'next/font/google'

const zcool = ZCOOL_QingKe_HuangYou({
  weight: '400',
})

const Navbar = ({title = 'Title'}: {title?:string}) => {
  return (
    <>
      <div className=" navbar bg-base-100 drop-shadow-md">
       
        <div className="navbar-start">
          <Link href="/" className={`${zcool.className} btn btn-ghost normal-case text-xl`}>安眠休</Link>
          {/* <a className="btn btn-ghost normal-case text-xl">安眠休</a> */}
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">{title}</a>
        </div>

        <div className="navbar-end gap-2">

          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <Image
                  src="https://github.com/kentaro-maker.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                /> */}
              </div>
            </label>
            
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

      </div>
    </div>
    <div className="text-sm breadcrumbs">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/showcase">Showcase</Link></li>
        <li>{title}</li>
      </ul>
    </div>
  </>
  )
}

export default Navbar