"use client"
import { Moon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ControlTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  function handleChangeTheme() {
    if (theme === "dark") {
      setTheme("light")
      return
    }
    if (theme === "light") {
      setTheme("dark")
      return
    }

    setTheme("light")
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (


    <div onClick={handleChangeTheme} className="flex items-center justify-center cursor-pointer transition-all hover:-translate-y-1 w-10 h-10 rounded-full border  border-dashed border-primary ">
      {
        theme === "light" ? <Moon color="#ff376c" /> : <SunMoon color="#ff376c" />
      }</div>
  )
}
