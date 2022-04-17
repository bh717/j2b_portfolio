import ProjectItem from "./projects/ProjectItem"
import { useMediaQuery } from "../../lib/useMediaQuery"
import ProjectsTitle from "./projects/ProjectsTitle"

const projects = [
    {
        link: 'https://spotify-clone-yuri-corredor.vercel.app/',
        color: '#1ed760',
        title: "SPOTIFY 2.0 (clone)",
        description: "With the spotify API, I decided to clone their Web App spotify's interface and some of its main features. Because of their API limitations, to use the clone you've to have Spotify Premium and a spotify device running.",
        techs: [
            'Next.js',
            'NextAuth.js',
            'Tailwind',
            'Spotify Api',
            'Recoil'
        ],
        gitLink: 'https://github.com/YuriCorredor/spotify-clone',
        bgPath: '/spotify.jpg'
    },
    {
        link: 'https://front-end-challenge-lac.vercel.app/',
        color: '#5c16c5',
        title: "SEARCH TOP MOVIES",
        description: "With the TMDB API, I developed a website where the user can search for movies using filters. The app consumes the API and the site is server side rendered.",
        techs: [
            'Next.js',
            'React',
            'React-icons',
            'Tailwind',
            'TMDB API'
        ],
        gitLink: 'https://github.com/YuriCorredor/search-top-movies',
        bgPath: '/movies.jpg'
    },
    {
        link: 'https://fablec-site.vercel.app/',
        color: '#FF7A00',
        title: "FABLEC",
        description: "I was contracted to do a marketing campaign to this company and then they decided to extend the contract and asked for a simple website where they could display their services. So this was what I did.",
        techs: [
            'Next.js',
            'Nodemailer',
            'Tailwind',
            'Yup',
            'Formik'
        ],
        gitLink: 'https://github.com/YuriCorredor/fablec',
        bgPath: '/fablec.jpg'
    },
    {
        link: null,
        color: '#007FE3',
        title: "CHAT APP",
        description: "This app was created using Facebook's technology React Native and it's a study case for learning real time communication between users. It uses, of course, react native and a backend in Python with the Flask framework.",
        techs: [
            'React-native',
            'Redux',
            'Socket.io',
            'Python',
            'Flask',
            'SQLAlchemy',
            'Expo'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/chat.jpg'
    },
]

export default function Projects() {
    const md = useMediaQuery(768)

    return (
        <section id="projects" className="flex justify-center items-center w-full mt-8">
            <div className="max-w-7xl w-full flex flex-col justify-center items-center z-[9999] mt-14 overflow-hidden">
                <ProjectsTitle />
                {projects.map((project, index) => <ProjectItem 
                    key={index}
                    link={project.link}
                    color={project.color}
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    gitLink={project.gitLink}
                    bgPath={project.bgPath}
                    index={index}
                    md={md}
                />)}
            </div>
        </section>
    )
}