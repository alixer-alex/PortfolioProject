import SplitType from 'split-type'
import './App.css'
import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
function App() {
    const textRef = useRef("Hello");
    useEffect(() => {
    // Split the text into characters
    const split = new SplitType("#target");
    
    // Initially move all characters down
    split.chars.forEach((char) => {
      console.log(char)
      char.classList.add('translate-y-full'); // Tailwind or custom class
    });
    gsap.to(split.chars,{
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5
    })
  })
  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen">
      <h1 id = "target" style = {{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}} className = "text-8xl fond-bold">
        Hello!
      </h1>   
    </div>
  )
}

export default App
