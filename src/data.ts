interface Skill {
    name: string
    icon: String
}

interface Project {
    title: string
    link?: string
    url?: string // github link
    show_url?: boolean
    description: string
    notes?: Array<string>
    fav?: boolean 
}

export const SkillSmash: Array<Skill> = [
    { name: 'HTML',icon: 'fa-html5' },
    { name: 'CSS',icon: 'fa-css3-alt' },
    { name: 'JavaScript',icon: 'fa-js' },
    { name: 'Python',icon: 'fa-python' },
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
        title: 'RT - Tilalaskenta', link: 'https://kustannuslaskenta.rakennustieto.fi/#/', 
        url: '',
        fav: true,
        show_url: false,
        description: 'Cost calculation for building projects in finland     ', 
        notes: ['in production', 'react','symfony', '+2000 commits', 'GitLab'] 
    },
    { 
        title: 'MediCare', link: 'https://eps-journey.vercel.app', 
        url: '',
        fav: true,
        show_url: false,
        description: 'Simple alternative to local health promoting entity', 
        notes: ['in development','react' ,'typescript','mui', 'firebase'] 
    },
    { 
        title: 'Buiding app', link: 'https://building-app-six.vercel.app/', 
        url: 'https://github.com/anythinglord/building-app',
        show_url: true,
        description: 'Area & costs calculator to simple building projects', 
        notes: ['in development', 'react', 'typescript'] 
    },
    { 
        title: 'Task Manager', link: '', 
        url: 'https://github.com/anythinglord/django-mysql',
        show_url: true,
        description: 'Simple task management app', notes: ['in development', 'django', 'python'] 
    },
    { 
        title: 'Micro frontend', link: '', 
        url: 'https://github.com/anythinglord/micro-frontend',
        show_url: true,
        description: 'Microfrontends implementation', notes: ['in development', 'mui'] 
    },
    { 
        title: 'Minimalist porfolio', link: '', 
        url: 'https://github.com/anythinglord/minimalist-portfolio',
        show_url: true,
        description: 'Minimalist portfolio', 
        notes: ['in development','react' ,'typescript'] 
    },
    
]