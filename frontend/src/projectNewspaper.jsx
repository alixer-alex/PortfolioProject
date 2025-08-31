import React, { useState, useEffect,useRef } from 'react';
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(useGSAP, InertiaPlugin, Draggable, SplitText, ScrollTrigger, ScrollSmoother)
function ProjectNewspaper(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const root = useRef()
    useGSAP(() => {
                ScrollSmoother.create({
                smooth: 1,
                effects: true,
                smoothTouch: 0.1,
            })}, {scope: root})
    useEffect(
        () => {

            setCurrentDate(new Date())
        }, []

    )
    return(
        <div ref={root} className=" flex min-h-screen min-w-screen items-center text-center justify-center ">
            <div className = "flex flex-col max-w-7xl bg-radial from-newspaper to-black to-800%">
                <div className="flex border-2 px-8 py-4 items-center  justify-center ">
                    <h1 className="text-7xl">My Projects!</h1>
                </div>
                <div className = "flex border-l-2 border-r-2 text-2xl min-w-7xl justify-center">
                    {currentDate.toLocaleDateString()}
                </div>
                <div className = "flex border-2  min-w-7xl min-h-screen">

                </div>
            </div>
        </div>

    )

}

export default ProjectNewspaper