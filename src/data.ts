interface Skill {
    name: string
    icon: String
}

interface Project {
    title: string
    link?: string
    url?: string // github link
    description: string
    notes?: Array<string>
    fav?: boolean 
}

export const SkillSmash: Array<Skill> = [
    { name: 'HTML',icon: 'fa-html5' },
    { name: 'CSS',icon: 'fa-css3-alt' },
    { name: 'JavaScript',icon: 'fa-js' },
    { name: 'TypeScript',icon: 'fa-ts' },
    { name: 'MySQL',icon: 'fa-mysql' },
    { name: 'Git',icon: 'fa-git-alt' },
    { name: 'Github',icon: 'fa-github' },
    { name: 'Gitlab',icon: 'fa-gitlab' },
    { name: 'React',icon: 'fa-react' },
    { name: 'Docker',icon: 'fa-docker' },
];

export const ProjectSmash: Array<Project> = [
    { 
        title: 'MediCare', link: 'https://eps-journey.vercel.app', 
        url: '',
        fav: true,
        description: 'Simple alternative to local health promoting entity', 
        notes: ['in development', 'typescript','mui', 'firebase'] 
    },
    { 
        title: 'Buiding app', link: 'https://building-app-six.vercel.app/', 
        url: 'https://github.com/anythinglord/building-app',
        description: 'area & costs calculator to simple building projects', notes: ['in development', 'typescript'] 
    },
    { 
        title: 'Micro frontend', link: '', 
        url: 'https://github.com/anythinglord/micro-frontend',
        description: 'Microfrontends implementation', notes: ['in development', 'mui'] 
    },
    { 
        title: 'Minimalist porfolio', link: '', 
        url: 'https://github.com/anythinglord/minimalist-portfolio',
        description: 'minimalist portfolio', notes: ['in development', 'typescript'] 
    },
    { 
        title: 'Minecraft clone', link: 'https://minecraft-clone-alpha.vercel.app/', 
        url: 'https://github.com/anythinglord/minecraft-clone',
        description: 'simple minecraft clone built with react', notes: ['in development', 'javascript'] 
    }
]