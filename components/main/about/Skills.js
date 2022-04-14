import { SiExpress } from 'react-icons/si'
import SkillsItem from './SkillsItem'

const skills = [
    {
        name: 'expressjs',
        Icon: SiExpress
    }
]

export default function Skills() {
    return (
        <div>
            {skills.map((skill, index) => <SkillsItem key={index} Icon={skill.Icon} name={skill.name} hoverColor={skill.hoverColor} />)}
        </div>
    )
}
