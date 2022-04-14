import { useState } from "react"

export default function SkillsItem({ name, Icon, hoverColor }) {

    const [hover, setHover] = useState(false)

    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <div
                className={`cursor-pointer hover:scale-125 transition-all duration-300`} 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}>
                <Icon style={hover ? {color: hoverColor} : {color: 'white'}} size={45} />
            </div>
            <p className='text-white text-bold p-2 text-xs font-home'>{name}</p>
        </div>
    )
}
