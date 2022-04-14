import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { 
    SiExpress, 
    SiJavascript, 
    SiMongodb, 
    SiNextdotjs, 
    SiPython, 
    SiFlask, 
    SiSqlite, 
    SiTailwindcss, 
    SiReact, 
    SiHtml5,
    SiCss3,
    SiGit,
    SiPostman,
    SiRedux,
    SiAdobephotoshop
} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import SkillsItem from './skills/SkillsItem'

const skills = [
    {
        name: 'expressjs',
        Icon: SiExpress,
        hoverColor: 'white'
    },
    {
        name: 'javascript',
        Icon: SiJavascript,
        hoverColor: '#ead41c'
    },
    {
        name: 'nodejs',
        Icon: FaNode,
        hoverColor: '#89bb3c'
    },
    {
        name: 'mongodb',
        Icon: SiMongodb,
        hoverColor: '#359e40'
    },
    {
        name: 'nextjs',
        Icon: SiNextdotjs,
        hoverColor: 'white'
    },
    {
        name: 'python',
        Icon: SiPython,
        hoverColor: '#346998'
    },
    {
        name: 'flask',
        Icon: SiFlask,
        hoverColor: 'white'
    },
    {
        name: 'sqlite',
        Icon: SiSqlite,
        hoverColor: '#6bb6df'
    },
    {
        name: 'tailwind',
        Icon: SiTailwindcss,
        hoverColor: '#35b3eb'
    },
    {
        name: 'react',
        Icon: SiReact,
        hoverColor: '#5ad2ea'
    },
    {
        name: 'html',
        Icon: SiHtml5,
        hoverColor: '#e6640a'
    },
    {
        name: 'css',
        Icon: SiCss3,
        hoverColor: '#2760e5'
    },
    {
        name: 'git',
        Icon: SiGit,
        hoverColor: '#f24c2d'
    },
    {
        name: 'postman',
        Icon: SiPostman,
        hoverColor: '#e66637'
    },
    {
        name: 'redux',
        Icon: SiRedux,
        hoverColor: '#7046b2'
    },
    {
        name: 'photoshop',
        Icon: SiAdobephotoshop,
        hoverColor: '#001c33'
    }
]

const divVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

export default function Skills() {

    const [alreadySeen, setAlreadySeen] = useState(false)
    const controls = useAnimation()
    const { ref, inView } = useInView()
    const titleRef = useRef()
    const skillsDivRef = useRef()

    const parallax = e => {
        if (skillsDivRef && titleRef) {
            const y = (e.clientY * -1) / 100
            const x = (e.clientX * -1) / 100
            titleRef.current.style.transform = `translateX(${-x}px) translateY(${-y}px)`
            skillsDivRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
            setAlreadySeen(true)
        }
        if (!inView && !alreadySeen) {
            controls.start('hidden')
        }
    }, [controls, inView])

    useEffect(() => {
        window.addEventListener('mousemove', parallax, false)
        return () => {
            window.removeEventListener('mousemove', parallax, false)
        }
    }, [])

    return (
        <section className='flex max-w-7xl w-full bg-stars bg-cover justify-center items-center'>
            <motion.div variants={divVariants} initial='hidden' animate={controls} className='flex w-full flex-col justify-center items-center z-[9999]'>
                <h1 ref={titleRef} className='font-home font-bold text-5xl text-white'>SKILLS</h1>
                <div ref={skillsDivRef}>
                    <div ref={ref} className='p-4 pt-8 flex justify-center items-center flex-wrap max-w-2xl'>
                        {skills.map((skill, index) => <SkillsItem 
                            key={index} 
                            Icon={skill.Icon} 
                            name={skill.name} 
                            hoverColor={skill.hoverColor} 
                        />)}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
