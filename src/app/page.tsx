import React from 'react'
import HeroSection from './_home/HeroSection'
import AboutMeSection from './_home/AboutMeSection'
import BlogSection from './_home/BlogSection'

export default function page() {
  return (
    <main>
      <HeroSection/>
      <AboutMeSection/>
      <BlogSection/>
    </main>
  )
}
