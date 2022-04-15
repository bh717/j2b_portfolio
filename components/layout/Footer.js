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
        <footer className="relative bg-white w-full mt-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fillOpacity="1" d="M0,64L36.9,128L73.8,160L110.8,96L147.7,288L184.6,288L221.5,256L258.5,192L295.4,224L332.3,224L369.2,0L406.2,96L443.1,128L480,96L516.9,192L553.8,64L590.8,192L627.7,160L664.6,288L701.5,96L738.5,256L775.4,192L812.3,128L849.2,96L886.2,288L923.1,224L960,256L996.9,32L1033.8,288L1070.8,0L1107.7,32L1144.6,256L1181.5,192L1218.5,160L1255.4,256L1292.3,192L1329.2,128L1366.2,224L1403.1,96L1440,128L1440,0L1403.1,0L1366.2,0L1329.2,0L1292.3,0L1255.4,0L1218.5,0L1181.5,0L1144.6,0L1107.7,0L1070.8,0L1033.8,0L996.9,0L960,0L923.1,0L886.2,0L849.2,0L812.3,0L775.4,0L738.5,0L701.5,0L664.6,0L627.7,0L590.8,0L553.8,0L516.9,0L480,0L443.1,0L406.2,0L369.2,0L332.3,0L295.4,0L258.5,0L221.5,0L184.6,0L147.7,0L110.8,0L73.8,0L36.9,0L0,0Z"></path>
            </svg>
            <div className="flex flex-col items-center z-[9999] p-2 sm:p-8 pb-2 relative bg-white w-full">
                <div className="w-full justify-center items-center max-w-7xl flex flex-col p-2 sm:p-8">
                    <h1 className="text-3xl font-bold text-center">How this website was built</h1>
                    <div className="flex flex-col flex-wrap max-w-5xl font-semibold p-2 pt-8">
                        <p>You can check github to see the full source code of this website. But here is a quick explanation of how things were done.</p>
                        <p>As stated before, my portfolio was inspired by Project Hail Mary, a book by Andy Weir, writer of The Martian. After reading the book, I made the decision of making a space themed portfolio.</p>
                        <p>For this project, I used these technologies:</p>
                        <div className="flex flex-wrap flew-col justify-center">
                            {techs.map((tech, index) => <SkillsItem key={index} name={tech.name} Icon={tech.Icon} color={tech.color} />)}
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center border-t-[1px] border-black">
                    <p className="p-2 pt-3 text-xs text-bold">© Copyright | Yuri Corredor </p>
                </div>
            </div>
        </footer>
    )
}