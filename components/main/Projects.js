import ProjectItem from "./projects/ProjectItem"
import { useMediaQuery } from "../../lib/useMediaQuery"
import ProjectsTitle from "./projects/ProjectsTitle"

const projects = [
    {
        link: 'https://polkawar.com/ ',
        color: '#007FE3',
        title: "POLKAWAR",
        description: "PolkaWar is a blockchain based NFT gaming platform and marketplace. Inspired by the recent crypto NFT and gaming narratives.",
        techs: [
            'React',
            'Web3',
            'Unity',
            'C#',
            'Smart Contract',
            'Solidity'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/polkawar.jpg'
    },
    {
        link: 'https://treedefi.com/',
        color: '#1ed760',
        title: "TREEDEFI",
        description: "Treedefi is the first ESG crypto space project. Our goal is to bring wealth to our users while having positive impact on our planet. TreeDefi is a defi protocol operating on the BSC (Binance Smart Chain) focused on Yield Farming. ",
        techs: [
            'React',
            'Web3',
            'MUI',
            'Smart Contract',
            'Solidity'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/treedefi.jpg'
    },
    {
        link: null,
        color: '#5c16c5',
        title: "AUTOSHARK",
        description: "We have launched a decentralized exchange powered by a new token, FINS. We envision the independence and flexibility of a decentralized exchange together with the ease and convenience of our yield optimization service. ",
        techs: [
            'DEFI',
            'Smart Contract',
            'Solidity'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/autoshark.jpg'
    },
    {
        link: 'https://primeapeplanet.com/',
        color: '#FF7A00',
        title: "PRIMEAPE",
        description: "Our Prime Ape Planet NFT’s have been created by three highly respected digital artists. You may not know it, but you probably have already seen their work!",
        techs: [
            'GSAP Project'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/primeape.jpg'
    },
    {
        link: 'https://bscpad.com/',
        color: '#007FE3',
        title: "BSCPAD",
        description: "The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart Chain Network. BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity.",
        techs: [
            'React.js',
            'Moralis',
            'Solidity',
            'Smart Contract'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/bscpad.jpg'
    },
    {
        link: 'https://somniumspace.com/',
        color: '#1ed760',
        title: "SOMNIUM SPACE",
        description: "We are creating an Open, Social, Virtual Reality world. A world with its own economy and its own currency. A VR world with its own Marketplace, Games, Social experiences and Virtual Land ownership.",
        techs: [
            'React.js(Ant Design)',
            'Unity'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/somnium.jpg'
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
        link: 'https://lostcenturia.gg/en',
        color: '#5c16c5',
        title: "LOSTCENTURIA",
        description: "Summoners War: Lost Centuria is a strategy game -with some RPG gameplay thrown in- that's a sequel to Summoners War: Sky Arena.",
        techs: [
            'Laravel',
            'PHP',
            'MySQL'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/lostcenturia.jpg'
    },
    {
        link: 'https://newportal.akademi.ws/',
        color: '#FF7A00',
        title: "GOBITO",
        description: "Korozo has become one of Turkey's most renowned industrial organisations, exporting flexible packaging and film products to 88 countries globally.",
        techs: [
            'Node.js',
            'Next.js',
            'Amazon S3',
            'MUI'
        ],
        gitLink: 'https://github.com/YuriCorredor/chat-app',
        bgPath: '/gabito.jpg'
    }
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