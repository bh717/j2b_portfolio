import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const imageVariants = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const divVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

export default function About() {
    const imgRef = useRef()
    const titleRef = useRef()
    const [alreadySeen, setAlreadySeen] = useState(false)
    const controls = useAnimation()
    const { ref, inView } = useInView()

    const parallax = e => {
        if (imgRef && titleRef) {
            const y = (e.clientY * -1) / 100
            const x = (e.clientX * -1) / 100
            imgRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
            titleRef.current.style.transform = `translateX(${-x}px) translateY(${-y}px)`
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
    }, [inView, controls])

    useEffect(() => {
        window.addEventListener('mousemove', parallax, false)
        return () => {
            window.removeEventListener('mousemove', parallax, false)
        }
    }, [])

    return (
        <section className="my-16 w-full flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl text-white z-[9999]">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
                    <motion.img
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                        ref={imgRef}
                        className="order-2 md:order-1" width={280} 
                        src="astronaut.jpg" 
                    />
                    <motion.div
                        ref={ref}
                        variants={divVariants}
                        initial="hidden"
                        animate={controls}
                        className="order-1 md:order-2 "
                    >
                        <h1 ref={titleRef} className="text-center font-home p-6 md:p-12 pt-0 px-2 text-6xl font-bold">ABOUT ME</h1>
                        <p className="px-4 sm:px-16 pb-8 font-bold">
                            Ambitious software developer with passion for learning new skills. 
                            Obsessed with application security and automating tasks. Experienced in 
                            creating web apps and mobile apps using Meta's technology "React" and "React Native". 
                            Bringing forth a motivated attitude and a variety of powerful skills. I love doing a lot of 
                            things, and one of them is reading Sci-Fi books. After reading Project Hail Mary by Andy Weir, 
                            I was inspired to do my personal portfolio. So here it is.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}