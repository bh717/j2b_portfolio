import { BiLinkExternal } from 'react-icons/bi'
import { SiGithub } from 'react-icons/si'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const divVariants = {
    hidden: {
        scale: 1.25,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75
        }
    }
}

export default function ProjectItem({ link, color, title, description, techs, gitLink, bgPath, md, index }) {

    const [alreadySeen, setAlreadySeen] = useState(false)
    const { ref, inView } = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
            setAlreadySeen(true)
        }
        if (!inView && !alreadySeen) controls.start("hidden")
    }, [controls, inView])

    const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i ,(m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))

    const colorRGB = hexToRgb(color)

    const inverted = index % 2 == 0

    return (
        <motion.div variants={divVariants} initial="hidden" animate={controls} ref={ref} className="text-white flex m-3 md:m-8 relative my-8 md:my-16 text-shadow">
            <div className={`${inverted ? 'order-2' : ''} rounded-sm absolute md:relative hidden md:block`}>
                <a rel="noreferrer" target="_blank" href={link}>
                    <div style={{backgroundColor: `rgb(${colorRGB[0]} ${colorRGB[1]} ${colorRGB[2]} / var(--tw-bg-opacity))`}} className="absolute rounded-sm h-full w-full bg-opacity-30 hover:bg-opacity-0 transition-all"/>
                </a>
                <img alt="project" className="block w-fit h-full object-cover rounded-sm" src={bgPath} />
            </div>
            <div style={md ? {backgroundImage: `url(${bgPath})`} : {backgroundImage: 'none'}} className={`${inverted ? 'order-1 text-left' : 'text-right'} flex flex-col relative z-[10000] md:p-0 bg-cover rounded-sm md:rounded-none`}>
                <div style={{backgroundColor: `rgb(${colorRGB[0]} ${colorRGB[1]} ${colorRGB[2]} / var(--tw-bg-opacity))`}} className="p-8 h-full w-full bg-opacity-80 absolute block rounded-sm md:hidden"/>
                <div className="z-[10001] p-8 md:p-0">
                    <p className="font-home font-semibold text-sm pb-2">Featured Project</p>
                    <h1 className="font-bold font-home py-2 text-lg">{title}</h1>
                    <div style={md ? {backgroundColor: 'inherit', padding: 0} : {backgroundColor: color, padding: '24px'}} className={`${md ? 'ml-0' : inverted ? '-mr-12' : '-ml-12'} rounded-sm flex my-2`}>
                        <p className="font-semibold">{description}</p>
                    </div>
                    <div className={`${inverted ? 'justify-start' : 'justify-end'} flex flex-wrap self-end my-2 w-full`}>
                        {techs.map((tech, index) => <p key={index} className={`${inverted ? 'pr-4' : 'pl-4'} font-home text-sm font-semibold`}>{tech}</p>)}
                    </div>
                    <div className={`${inverted ? 'justify-start' : 'justify-end'} flex flex-wrap self-end my-2 w-full`}>
                        <a rel="noreferrer" target="_blank" href={gitLink} className={`${inverted ? 'pr-2' : 'pl-2'} hover:scale-125 cursor-pointer transition-all`}>
                            <SiGithub color={md ? 'white' : color} size={30} />
                        </a>
                        <a rel="noreferrer" target="_blank" href={link} className={`${inverted ? 'pr-2' : 'pl-2'} hover:scale-125 cursor-pointer transition-all`}>
                            <BiLinkExternal color={md ? 'white' : color} size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
