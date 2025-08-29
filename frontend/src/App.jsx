import './App.css'
import React, { useLayoutEffect, useRef } from 'react'
import Button from './Button'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import {Draggable} from 'gsap/Draggable'
import {InertiaPlugin} from 'gsap/InertiaPlugin'
import lanterns from './assets/lanterns.JPG'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(useGSAP, InertiaPlugin, Draggable, SplitText, ScrollTrigger, ScrollSmoother)

function App() {
  const root = useRef()

  useGSAP(() => {
      ScrollSmoother.create({
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      });
      // Intro animations
      const hello = new SplitText('#hello', { type: 'words,chars' })
      gsap.from(hello.chars, { duration: 1, autoAlpha: 0, stagger: 0.07, y:50 })
      gsap.from("#lanterns", { duration: 1, autoAlpha: 0, stagger: 0.05 })
      const begin = new SplitText('#begin', { type: 'words,chars' })
      gsap.from(begin.chars, { duration: 1, autoAlpha: 0, stagger: 0.01 })

      const projectText = new SplitText('#project-text', { type: 'chars' })
      gsap.from(projectText.chars, {
        scrollTrigger: {
          trigger: '#project-text',
          start: 'top 80%',
          markers: true,
          toggleActions: 'play none none reverse',
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
            start: 'top 80%',
            markers: true,
            toggleActions: 'play none none reverse',
          },
          duration: 1,
          autoAlpha: 0,
          y: 50,
        })
      }
      
    )

  }, {scope: root});

  return (
    <>
    <div  ref={root}>
      <div id = "smooth-wrapper">
        <div id = "smooth-content" className = "">
          <div  className="flex  min-h-screen min-w-screen px-10 items-center justify-center">
            <div className="text-center">
              <h1 id="hello" className="text-8xl pb-3 ">Hello!</h1>
              <img id= "lanterns" src = {lanterns} className = "object-cover object-center mask-clip-border aspect-square h-96 w-96 mx-auto" alt = "myPhoto" />
              <h1 id="begin" className="text-5xl pt-5 ">
              This is a little website I made showing off all of the cool things that I've made and what I've been up to!
              </h1>
            </div>
          </div>
    
          <div className="flex flex-col py-50 min-w-screen min-h-screen">
            <div className="flex justify-center pb-20">
              <h1 id="project-text" className="text-8xl">Here are some things I've done!</h1>
            </div>
            <div className = "flex px-6 justify-center">
              <div id="project-cards" className="flex py-5 rounded-lg items-stretch px-16 justify-center text-center gap-6">
                <div className="project-card py-5 flex-1 shadow-lg border-2 rounded-sm bg-white">
                  <h2 className="text-3xl">Checkers AI</h2>
                  <p className = "pt-2 px-5"> • Developed a competitive Checkers AI from scratch, achieving a ∼70% win rate against other student bots <br/>
                      • Deployed the Monte Carlo Tree Search algorithm to make moves, reaching 99% accuracy against the practice bot <br/>
                      • Optimized decision-making to ~30 seconds per move through algorithmic pruning and efficient state evaluation</p>
                  </div>
                <div className="project-card py-5 flex-1 shadow-lg border-2 rounded-sm bg-white">
                  <h2 className="text-3xl ">Web Crawler</h2>
                  <p className = "pt-2 px-5"> 
                    • Engineered a high-performance search engine from scratch, indexing 50K+ documents across all UCI ICS domains <br/>
                    • Built a proprietary web crawler and inverted index, integrated SimHash for near-duplicate detection and PageRank
                    for ranking precision<br/>
                    • Achieved sub-0.3s average query latency through optimized indexing, caching, and ranking of the corpus<br/>
                  </p>
                  </div>
                <div className="project-card justify-center flex-1 py-5 shadow-lg border-2 rounded-sm bg-white">
                  <a href = "https://brat-weather.vercel.app/" target="_blank" className="text-3xl "> Brat Weather</a>
                  <p  className = "pt-2 px-5"> 
                      • Utilized Nominatim and National Weather Service’s API to build a full-stack weather forecast app in the theme of
                      Charli xcx’s album Brat <br/>
                      • Deployed to Vercel as a Flask application serving a static React frontend<br/>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className = "flex-col mt-auto ">
              <hr className = "flex pb-5"/>
              <div className = "flex pl-10 pb-4 gap-8 ">
              <Button link = "https://www.linkedin.com/in/alex-r-zhuang-45b99a27b/" name = "LinkedIn" Image = {FaLinkedin}/>
              <Button link = "https://github.com/alixer-alex" name = "GitHub" Image = {FaGithub}/>
              <Button link = "mailto:azhuang3@uci.edu" name = "Email" Image = {FaEnvelope}/>
              <div className ="ml-auto mt-auto">
                © 2025 Alex Zhuang. All rights reserved.
              </div>
              </div>
              
          </div>
          
        </div>
      </div>
      
    </div>
      
    </>
  )
}

export default App
