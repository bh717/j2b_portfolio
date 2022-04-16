import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const textVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
}

export default function ProjectsTitle() {

    const [alreadySeen, setAlreadySeen] = useState(false)
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
            setAlreadySeen(true)
        }
        if (!inView && !alreadySeen) controls.start("hidden")
    }, [inView, controls])

    return <motion.h1 
        variants={textVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="text-4xl sm:text-6xl text-white font-home font-bold pb-8">PROJECTS</motion.h1>
}
