import './App.css'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

function App() {
  const root = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animations
      const hello = new SplitText('#hello', { type: 'words,chars' })
      gsap.from(hello.chars, { duration: 1, autoAlpha: 0, stagger: 0.05 })

      const begin = new SplitText('#begin', { type: 'words,chars' })
      gsap.from(begin.chars, { duration: 1, autoAlpha: 0, stagger: 0.01 })

      const projectText = new SplitText('#project-text', { type: 'chars' })
      gsap.from(projectText.chars, {
        scrollTrigger: {
          trigger: '#project-text',
          start: 'top 80%',
          markers: true,
          toggleActions: 'play none none none',
        },
        duration: 1,
        autoAlpha: 0,
        stagger: 0.01,
      })

      // Animate each card when it scrolls into view
      gsap.utils.toArray('.project-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            markers: true,
            toggleActions: 'play none none reverse',
          },
          duration: 1,
          autoAlpha: 0,
          y: 50,
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={root}>
      <div className="flex min-h-screen min-w-screen px-10 items-center justify-center">
        <div className="text-center">
          <h1 id="hello" className="text-8xl">Hello!</h1>
          <h1 id="begin" className="text-5xl">
            This is a little website I made showing off all of the cool things that I've made and what I've been up to!
          </h1>
        </div>
      </div>

      <div className="min-w-screen min-h-screen">
        <div className="flex justify-center pb-20">
          <h1 id="project-text" className="text-8xl">Here are some things I've done!</h1>
        </div>

        <div id="project-cards" className="flex items-center px-16 justify-center text-center gap-6">
          <div className="project-card flex-1 shadow-lg border-2 rounded-sm bg-white">
            <h2 className="text-3xl">Projects</h2>
          </div>
          <div className="project-card flex-1 shadow-lg border-2 rounded-sm bg-white">
            <h2 className="text-3xl">Projects</h2>
          </div>
          <div className="project-card flex-1 shadow-lg border-2 rounded-sm bg-white">
            <h2 className="text-3xl">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
