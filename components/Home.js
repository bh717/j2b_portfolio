import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ScrollIcon from './home/ScrollIcon'

export default function Home() {

    const { ref, inView } = useInView()
    const [alreadySeen, setAlreadySeen] = useState()

    useEffect(() => {
        
    }, [inView])

    return (
        <>
        <ScrollIcon />
        <section className='flex w-full my-36 font-home'>
            <div 
                ref={ref} 
                className='flex justify-center bg-home bg-opacity-60 from-sky-500 to-indigo-500 w-full h-[640px] bg-cover text-white'
            >
                <div className='z-[9999] justify-center items-center flex flex-col p-5 h-fit bg-black bg-opacity-75 rounded-md'>
                    <h1 className='text-6xl'>Yuri Corredor</h1>
                    <h3 className='text-2xl'>Developer</h3>
                </div>
            </div>
        </section>
        </>
    )
}