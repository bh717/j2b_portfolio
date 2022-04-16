import SkillsItem from '../main/skills/SkillsItem'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs, SiFramer } from 'react-icons/si'

const techs = [
    {
        name: 'NEXTJS',
        Icon: SiNextdotjs,
        color: 'black'
    },
    {
        name: 'TAILWINDCSS',
        Icon: SiTailwindcss,
        color: 'black'
    },
    {
        name: 'THREEJS',
        Icon: SiThreedotjs,
        color: 'black'
    },
    {
        name: 'MOTION',
        Icon: SiFramer,
        color: 'black'
    }
]

export default function Footer() {
    return (
        <footer className="relative bg-white w-full">
            <div className="flex flex-col items-center z-[9999] pb-2 sm:pb-2 p-2 sm:p-8 relative bg-white w-full">
                <div className="w-full justify-center items-center max-w-7xl flex flex-col p-2 sm:p-8">
                    <h1 className="text-3xl font-bold text-center">How this website was built</h1>
                    <div className="flex flex-col flex-wrap max-w-5xl font-semibold p-2 pt-8 pb-8">
                        <p>You can check github to see the full source code of this website. But here is a quick 
                            explanation of how things were done. As stated before, my portfolio was inspired by 
                            Project Hail Mary, a book by Andy Weir, writer of The Martian. After reading the book, I 
                            made the decision of making a space themed portfolio.
                        </p>
                        <p>For this project, I used these technologies:</p>
                        <div className="flex flex-wrap flew-col justify-center">
                            {techs.map((tech, index) => <SkillsItem key={index} name={tech.name} Icon={tech.Icon} color={tech.color} />)}
                        </div>
                        <p>There are other dependencies used on the project like "react-intersection-observer" and 
                            "react-icons", if you wanna know all of them, check the source code.
                        </p>
                        <p>Next.js was used because I prefer it over plain React, but the project does not need it at
                            all and it's not even taking advantage of its capabilities. Why TAILWIND? It makes the
                            development process faster for me and that's the main reason. Three.js was used to render
                            the stars geometries in the background and the little astronaut that can be seen at the
                            beggining. I was planning on using more 3D objects on the scene but i really want devices
                            without a GPU to be able to expirience the website. I plan on making other 3D experiences
                            more GPU intensive, more visually stunning, but i wanted this portfolio to be accessible.
                            That's why it lacks 3D objects. That's why the astronaut is low-poly.
                        </p>
                        <p>
                            Framer motion was used to make the DOM elements animate. The library react-intersection-observer
                            was used to intercept when an object came into view, so i could use framer motion to animate
                            it.
                        </p>
                    </div>
                </div>
                <div className="flex w-full justify-center border-t-[1px] border-black">
                    <p className="p-2 pt-3 text-xs text-bold">© Copyright | Yuri Corredor </p>
                </div>
            </div>
        </footer>
    )
}