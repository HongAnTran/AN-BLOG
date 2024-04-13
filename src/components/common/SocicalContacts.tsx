import { Facebook, FacebookIcon, Instagram } from 'lucide-react'
import React from 'react'

export default function SocicalContacts() {
  return (
    <div className=' flex gap-2 items-center'>
      <div className=' cursor-pointer hover:shadow-[0_5px_20px_-2px_#2e7bf2]  transition-all hover:-translate-y-1 w-10 h-10 rounded-full border  border-dashed border-primary '>
        <a href='a' target="_blank" className=' w-full h-full  flex items-center justify-center'>
          <Facebook color="#79adff" fill='#79adff' />

        </a>
      </div>

      <div className=' cursor-pointer hover:shadow-[0_5px_20px_-2px_#ff376c]  transition-all hover:-translate-y-1 w-10 h-10 rounded-full border  border-dashed border-primary '>
        <a href='a' target="_blank" className=' w-full h-full  flex items-center justify-center'>
          <Instagram color="#ff376c" />

        </a>
      </div>
    </div>
  )
}
