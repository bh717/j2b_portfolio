export default function SkillsItem({ name, Icon, color }) {
    return (
        <div className='flex flex-col justify-center items-center p-4 w-[120px]'>
            <div className='hover:scale-[1.3] transition-all duration-300'>
                <Icon color={color} size={45} />
            </div>
            <p className='text-bold p-2 text-xs'>{name}</p>
        </div>
    )
}
