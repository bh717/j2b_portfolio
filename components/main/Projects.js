import ProjectItem from "./projects/ProjectItem"
import { useMediaQuery } from "../../lib/useMediaQuery"

const projects = [
    {
        link: 'https://spotify-clone-yuri-corredor.vercel.app/',
        color: '#1ed760',
        title: "SPOTIFY 2.0 (clone)",
        description: "With the spotify API, I decided to clone their Web App spotify's interface and some of its main features.Because of their API limitations, to use the clone you've to have Spotify Premium and a spotify device running.",
        techs: [
            'Next.js',
            'NextAuth.js',
            'Tailwind',
            'Spotify Api',
            'Recoil'
        ],
        gitLink: 'https://github.com/YuriCorredor/spotify-clone',
        bgPath: '/spotify.jpg',
        inverted: false
    },
    {
        link: 'https://spotify-clone-yuri-corredor.vercel.app/',
        color: '#1ed760',
        title: "SPOTIFY 2.0 (clone)",
        description: "With the spotify API, I decided to clone their Web App spotify's interface and some of its main features.Because of their API limitations, to use the clone you've to have Spotify Premium and a spotify device running.",
        techs: [
            'Next.js',
            'NextAuth.js',
            'Tailwind',
            'Spotify Api',
            'Recoil'
        ],
        gitLink: 'https://github.com/YuriCorredor/spotify-clone',
        bgPath: '/spotify.jpg',
        inverted: true
    },
    {
        link: 'https://spotify-clone-yuri-corredor.vercel.app/',
        color: '#1ed760',
        title: "SPOTIFY 2.0 (clone)",
        description: "With the spotify API, I decided to clone their Web App spotify's interface and some of its main features.Because of their API limitations, to use the clone you've to have Spotify Premium and a spotify device running.",
        techs: [
            'Next.js',
            'NextAuth.js',
            'Tailwind',
            'Spotify Api',
            'Recoil'
        ],
        gitLink: 'https://github.com/YuriCorredor/spotify-clone',
        bgPath: '/spotify.jpg',
        inverted: false
    },
]

export default function Projects() {

    const md = useMediaQuery(768)

    return (
        <section className="flex justify-center items-center w-full">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14">
                <h1 className="text-4xl sm:text-6xl text-white font-home font-bold pb-8">PROJECTS</h1>
                {projects.map((project, index) => <ProjectItem 
                    key={index}
                    link={project.link}
                    color={project.color}
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    gitLink={project.gitLink}
                    bgPath={project.bgPath}
                    inverted={project.inverted}
                    md={md}
                />)}
            </div>
        </section>
    )
}