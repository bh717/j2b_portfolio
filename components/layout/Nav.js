import { useState, useRef, useEffect } from "react"

export default function Nav() {

    const myMenu = useRef()
    const navBar = useRef()
    const [menuOpen, setMenuOpen] = useState(false)
    const [prevScroll, setPrevScroll] = useState(0)
    
    const handleMenuClick = () => {
        if(!menuOpen) {
            myMenu.current.classList.add('menuopen')
            setMenuOpen(true)
        } else {
            myMenu.current.classList.remove('menuopen')
            setMenuOpen(false)
        }
    }

    const handleScroll = () => {
        if (navBar) {
            const currentScroll = window.scrollY
            if (prevScroll > currentScroll) {
                navBar.current.style.top = '0'
            } else {
                myMenu.current.classList.remove('menuopen')
                setMenuOpen(false)
                navBar.current.style.top = '-74px'
            }
            setPrevScroll(currentScroll)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, false)
        return () => {
            document.removeEventListener('scroll', handleScroll, false)
        }
    }, [handleScroll])
    

    return (
        <nav ref={navBar} className="flex fixed w-full text-white z-[10010] transition-all">
            <div className={`w-full justify-center flex p-4 bg-black bg-opacity-75 border-b-[1px] ${menuOpen ? 'h-[308px] md:h-fit' : 'h-[69px]'} transition-all`}>
                <div className="max-w-7xl w-full justify-between xl:justify-around flex-row hidden md:flex">
                    <div className="flex font-nav text-3xl font-extrabold">
                        <a href="#" className="cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">
                            <span >{'<'}</span>
                            <span>Yuri Corredor</span>
                            <span className="pl-2">{'/>'}</span>
                        </a>
                    </div>
                    <div className="flex justify-center items-center font-extrabold font-home">
                        <a href="#home" className="pr-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Home</a>
                        <a href="#about" className="pr-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">About</a>
                        <a href="#skills" className="pr-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Skills</a>
                        <a href="#projects" className="pr-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Projects</a>
                        <a href="#contact" className="cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Contact</a>
                    </div>
                </div>
                <div className={`md:hidden w-full flex flex-col justify-between items-center ${menuOpen ? 'h-[275px]' : 'h-[35px]'}`}>
                    <div className="flex w-full justify-between items-center">
                        <a href="#" className="cursor-pointer font-extrabold font-nav text-xl hover:text-[#ddd] hover:scale-110 transition-all whitespace-nowrap">
                            <span >{'<'}</span>
                            <span>Yuri Corredor</span>
                            <span className="pl-2">{'/>'}</span>
                        </a>
                        <div ref={myMenu} onClick={handleMenuClick} className="py-4 mx-5 cursor-pointer">
                            <div className="myBurguer"></div>
                        </div>
                    </div>
                    <div className={`flex flex-col text-center font-extrabold font-home ${menuOpen ? '' : 'opacity-0 pointer-events-none z-10'}  transition-all`}>
                        <a onClick={handleMenuClick} href="#home" className="p-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Home</a>
                        <a onClick={handleMenuClick} href="#about" className="p-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">About</a>
                        <a onClick={handleMenuClick} href="#skills" className="p-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Skills</a>
                        <a onClick={handleMenuClick} href="#projects" className="p-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Projects</a>
                        <a onClick={handleMenuClick} href="#contact" className="p-3 cursor-pointer hover:text-[#ddd] hover:scale-110 transition-all">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}