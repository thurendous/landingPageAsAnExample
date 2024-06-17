'use client'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { Hero } from './Hero'
import { EditedVideos } from './EditedVideos'
import { EditedShorts } from './EditedShorts'
import { Channels } from './Channels'
import { Calendly } from './Calendly'
import { Footer } from './Footer'

export const Landing = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic',
      // offset: 100,
      // once: true,
    })
  }, [])
  return (
    <div>
      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative max-w-5xl min-h-screen px-4 mx-auto sm:px-6 space-y-80">
        <Hero />
        <EditedVideos />
        <EditedShorts />
        <Channels />
        <Calendly />
        {/*  */}
      </div>
      <Footer />
    </div>
  )
}
