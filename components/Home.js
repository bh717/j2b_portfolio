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
        <section className='flex text-center justify-center items-center w-full my-36 font-home max-w-7xl mx-auto'>
            <div 
                ref={ref} 
                className='flex justify-center mx-auto border-x-2 bg-home w-full h-[580px] bg-cover bg-center bg-no-repeat text-white'
            >
                <div className='z-[9999] justify-center flex flex-col p-5 h-fit bg-black bg-opacity-75 rounded-md'>
                    <h1 className='text-6xl'>Yuri Corredor</h1>
                    <h3 className='text-2xl'>Developer</h3>
                </div>
            </div>
        </section>
        </>
    )
}