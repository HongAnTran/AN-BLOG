import React from 'react'
import MainNavigation from './MainNavigation'
import Logo from './Logo'
import SocicalContacts from './SocicalContacts'
import ControlTheme from './ControlTheme'

export default function Header() {
  return (
    <header className='  bg-background py-4  shadow-md '>
      <div className=' container'>
        <div className=' flex gap-10 items-center'>
          <div className=' flex-shrink-0'>

          <Logo />
          </div>
          <div className=' flex-1 '>
            <MainNavigation />
          </div>
          <div >
            <ControlTheme />
          </div>
          <div >
            <SocicalContacts />
          </div>
        </div>
      </div>
    </header>
  )
}
