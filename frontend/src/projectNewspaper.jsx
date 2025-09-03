import React, { useState, useEffect,useRef } from 'react';
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import checkers from './assets/Checkers.mp4'
import searchengine from './assets/searchEngine.mp4'
import brat from './assets/Brat.png'
import rose from './assets/rose.svg'

function HorizontalElement(props){
    if (props.sourceType =="Video"){
        
        return(
            <>
            <div className = "flex md:flex-row flex-col p-2 border-b-2">
                <div className = "flex flex-col p-2 md:w-1/2">
                    <h2 className="text-3xl">{props.title}</h2>
                    <p style = {{ whiteSpace: 'pre-wrap' }}className="pt-2 px-5">
                        {props.description}

                    </p>
                </div>
                <div className="md:w-1/2 flex ">
                    <video controls className=" w-full object-fill rounded ">
                        <source src={props.source} type="video/mp4" />
                    </video>
                </div>
            </div>
            </>

        )
    }
    return(
        <>
        <div className = "flex md:flex-row flex-col p-2 border-b-2">
            <div className = "flex flex-col p-2 md:w-1/2">
                <h2 className="text-3xl">{props.title}</h2>
                <p style = {{ whiteSpace: 'pre-wrap' }}className="pt-2 px-5">
                    {props.description}

                </p>
            </div>
            <div className="md:w-1/2 flex ">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.source} className="px-2 object-cover aspect-video" alt="" />
                </a>
            </div>
        </div>
        </>

    )
}
function VerticalElement(props){
    if (props.sourceType =="Video"){
    return(
        <>
            <div className ="flex flex-col p-2 border-b-2 ">
                <h2 className="text-3xl">{props.title}</h2>
                <p style = {{ whiteSpace: 'pre-wrap' }} className="pt-2 px-5">
                    {props.description}
                </p>
                <video controls className=" w-full  object-fill rounded ">
                    <source src={props.source} type="video/mp4" />
                </video>
            </div>
        </>

    )
    }
    return(
        <>
            <div className ="flex flex-col p-2 border-b-2">
                <h2 className="text-3xl">{props.title}</h2>
                <p style = {{ whiteSpace: 'pre-wrap' }} className="pt-2 px-5">
                    {props.description}
                </p>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img src={props.source} className="px-2 object-cover aspect-video" alt="" />
                </a>
            </div>
        </>

    )
}
gsap.registerPlugin(useGSAP, InertiaPlugin, Draggable, SplitText, ScrollTrigger, ScrollSmoother)
function ProjectNewspaper(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const root = useRef()
    useGSAP(() => {
                ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
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
        <div ref={root} id = "smooth-wrapper" >
            <div id = "smooth-content" className=" flex min-h-screen font-serif  px-2 md:p-0 py-2 min-w-screen items-center text-center justify-center ">
            <div className = "flex flex-col  md:max-w-7xl bg-radial from-newspaper to-black to-800%">
                    <div className="flex border-double border-4 md:px-8 py-4 items-center text-center justify-between ">
                        <div className = "h-8 w-8 md:flex md:h-32 md:w-32 border "></div>
                        <h1 className=" flex text-4xl md:text-7xl border ">My Projects!</h1>
                        <img src={rose} className=" flex object-cover h-8 w-8  border md:h-32 md:w-32  " /> 
                    </div>
                <div className = "flex border-double border-l-4 border-r-4  text-2xl md:min-w-7xl justify-center">
                    {days[currentDate.getDay()]}, {months[currentDate.getMonth()]} {currentDate.getDay()}, {currentDate.getFullYear()}
                </div>
                <div className = "flex flex-col md:flex-row border-double border-4 md:min-w-7xl md:min-h-screen">
                    <div className = "flex flex-col flex-2 border-r text-center items-center md:items-stretch w-full">
                    <HorizontalElement title= "Checkers AI" 
                    description="• Developed a competitive Checkers AI from scratch, achieving a ∼70% win rate 
• Deployed the Monte Carlo Tree Search algorithm to make moves, reaching 99% accuracy  
• Optimized decision-making to ~30s per move through pruning & evaluation"
                    source = {checkers} sourceType = "Video"/>
                    <HorizontalElement title= "Web Crawler" 
                    description="• Engineered a high-performance search engine indexing 50K+ docs
• Built proprietary crawler + inverted index with SimHash + PageRank
• Achieved sub-0.3s latency with optimized indexing, caching, and ranking"
                    source = {searchengine} sourceType = "Video"/>

                    </div>
                    <div className = "flex flex-col flex-1">
                        <VerticalElement title= "Brat Weather" description="• Used Nominatim + NWS API for a weather app in Charli XCX’s Brat theme
• Flask backend + React frontend, deployed on Vercel
• Click image to view!" source = {brat} sourceType = "Image" link = "https://brat-weather.vercel.app/"/>
                        <VerticalElement title= "Brat Weather" description="• Used Nominatim + NWS API for a weather app in Charli XCX’s Brat theme
• Flask backend + React frontend, deployed on Vercel
• Click image to view!" source = {brat} sourceType = "Image" link = "https://brat-weather.vercel.app/"/>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )

}

export default ProjectNewspaper