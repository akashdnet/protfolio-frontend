import React from 'react'
import HeroSection from './_home/HeroSection'
import AboutMeSection from './_home/AboutMeSection'
import BlogSection from './_home/BlogSection'
import ProjectsSection from './_home/ProjectsSection'

export default function page() {
  return (
    <main>
      <HeroSection/>
      <AboutMeSection/>
      <BlogSection/>
      <ProjectsSection/>
    </main>
  )
}
