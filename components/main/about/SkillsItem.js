export default function SkillsItem({ name, Icon, hoverColor }) {
    return (
        <>
            <div>
                <Icon color size={38} />
            </div>
            <p>{name}</p>
        </>
    )
}
