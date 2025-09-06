import './App.css'
import React, { useRef } from 'react'
import Button from './Button'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import seals from './assets/seals.JPG'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import checkers from './assets/Checkers.mp4'
import searchengine from './assets/searchEngine.mp4'
import brat from './assets/Brat.png'


gsap.registerPlugin(useGSAP, InertiaPlugin, Draggable, SplitText, ScrollTrigger, ScrollSmoother)

function Home() {
  const root = useRef()

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 800px)", () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      })
    })
    const hello = new SplitText('#hello', { type: 'words,chars' })
    gsap.from(hello.chars, { duration: 1, autoAlpha: 0, stagger: 0.07, y: 50 })
    gsap.from("#lanterns", { duration: 1.5, autoAlpha: 0, stagger: 0.05 })
    const begin = new SplitText('#begin', { type: 'words,chars' })
    gsap.from(begin.chars, { duration: 1.5, autoAlpha: 0, stagger: 0.01 })

    const projectText = new SplitText('#project-text', { type: 'chars' })
    gsap.from(projectText.chars, {
      scrollTrigger: {
        trigger: '#project-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
      autoAlpha: 0,
      stagger: 0.01,
    })

    gsap.utils.toArray('.project-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
        autoAlpha: 0,
        y: 50,
      })
    })
    gsap.from("#footer", {       
        scrollTrigger: {
        trigger: '#project-cards',
        start: 'bottom 80%',
        toggleActions: 'play none none reverse',
        },
        duration: 1, autoAlpha: 0, stagger: 0.05 })
  }, { scope: root });

  return (
    <div ref={root} id="smooth-wrapper">
      <div id="smooth-content" className="flex flex-col min-h-screen font-helvetica ">

        <div className="flex flex-col flex-grow px-25 items-center justify-center min-h-screen">
          <div className="flex flex-col text-center items-center justify-center ">
            <h1 id="hello" className="text-4xl md:text-6xl pb-3">Hello! I'm Alex!</h1>
              <img
              id="lanterns"
              src={seals}
              className="flex object-cover object-center aspect-square h-96 w-96"
              alt="myPhoto"
            />
              <div id="lanterns" className = "flex flex-row items-start pt-5">
              <Button link="https://www.linkedin.com/in/alex-r-zhuang-45b99a27b/" name="LinkedIn" Image={FaLinkedin} />
              <Button link="https://github.com/alixer-alex" name="GitHub" Image={FaGithub} />
              <Button link="mailto:azhuang3@uci.edu" name="Email" Image={FaEnvelope} />
            </div>
            
            <h1 id="begin" className="text-3xl md:text-5xl pt-5">
              This is a little website I made showing off all of the cool things that I've made and what I've been up to!
            </h1>
          </div>
        </div>

        <div className="flex flex-col px-10 items-center justify-center text-center flex-grow py-20">
          <div className="flex flex-col text-center items-center justify-center">
            <h1 id="project-text" className="text-3xl pb-10 md:text-5xl break-normal">Here are some things I've done!</h1>

          <div className="flex justify-center px-6">
            <div id="project-cards" className="flex flex-col md:flex-row py-5 rounded-lg items-stretch md:px-16 justify-center text-center gap-6 max-w-7xl">
              
              <div className="project-card py-5 flex-1 flex flex-col shadow-lg border-2 rounded-sm bg-white">
                <h2 className="text-3xl">Checkers AI</h2>
                <p className="pt-2 px-5">
                  • Developed a competitive Checkers AI from scratch, achieving a ∼70% win rate<br />
                  • Deployed the Monte Carlo Tree Search algorithm to make moves, reaching 99% accuracy<br />
                  • Optimized decision-making to ~30s per move through pruning & evaluation
                </p>
                <video controls className="px-2 pt-2 mt-auto object-cover aspect-video">
                  <source src={checkers} type="video/mp4" />
                </video>
              </div>

              <div className="project-card py-5 flex-1 flex flex-col shadow-lg border-2 rounded-sm bg-white">
                <h2 className="text-3xl">Web Crawler</h2>
                <p className="pt-2 px-5">
                  • Engineered a high-performance search engine indexing 50K+ docs<br />
                  • Built proprietary crawler + inverted index with SimHash + PageRank<br />
                  • Achieved sub-0.3s latency with optimized indexing, caching, and ranking
                </p>
                <video controls className="px-2 pt-2 mt-auto object-cover aspect-video">
                  <source src={searchengine} type="video/mp4" />
                </video>
              </div>

              <div className="project-card py-5 flex-1 flex flex-col shadow-lg border-2 rounded-sm bg-white">
                <h2 className="text-3xl">Brat Weather</h2>
                <p className="pt-2 px-5">
                  • Used Nominatim + NWS API for a weather app in Charli XCX’s Brat theme<br />
                  • Flask backend + React frontend, deployed on Vercel<br />
                  • Click image to view!
                </p>
                <div className="pt-2 mt-auto">
                  <a href="https://brat-weather.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={brat} className="px-2 object-cover aspect-video" alt="Brat Weather" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-center py-6 text-xl">
            <a href="./projects" className="hover:text-gray-500 ">See More!</a>
          </div>
        </div>

        <footer id="footer" className="w-full  mt-auto py-6 bg-white">
          <h2 className="text-6xl text-center mb-6"></h2>
          <div className="flex flex-col pt-5 border-t md:flex-row items-center justify-center px-8 text-lg gap-4">
            <div className="text-sm text-gray-500 text-center md:text-right ml-auto">
              ©2025 Alex Zhuang. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Home
