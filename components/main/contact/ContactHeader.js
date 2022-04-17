import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const divVariants = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    }
}


export default function ContactHeader() {

    const controls = useAnimation()
    const { ref, inView } = useInView()
    const [alreadySeen, setAlreadySeen] = useState(false)

    useEffect(() => {
        if (inView) {
            controls.start("visible")
            setAlreadySeen(true)
        }
        if (!inView && !alreadySeen) {
            controls.start("hidden")
        }
    }, [controls, inView])

    return (
        <motion.div ref={ref} variants={divVariants} initial="hidden" animate={controls}>
            <h1 className="font-bold text-4xl sm:text-6xl">Send me a message!</h1>
            <p className="text-xl sm:text-2xl py-4">Say hello, dear astronaut!</p>
        </motion.div>
    )
}
