import { useEffect, useRef } from "react"
import { BsFillMouseFill } from "react-icons/bs"

export default function ScrollIcon() {

    const scrollIconRef = useRef(null)

    const handleScroll = e => {
        if (window.pageYOffset < 30 && scrollIconRef) {
            scrollIconRef.current.classList.remove('hide-scroll')
        }
        else if (scrollIconRef) {
            scrollIconRef.current.classList.add('hide-scroll')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='flex h-screen justify-center items-end -mt-16 sm:-mt-8 group font-home'>
            <div
                ref={scrollIconRef}
                className='flex items-center px-2 justify-center group-hover:scale-125 opacity-100 transition-all animate-bounce'
            >
                <BsFillMouseFill color='white' size={35}/>
                <h1 className='text-white pl-2'>SCROLL</h1>
            </div>
        </div>
    )
}
