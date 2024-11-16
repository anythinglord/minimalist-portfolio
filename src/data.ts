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
        title: 'Fly diary', link: '', 
        url: 'https://github.com/anythinglord/flight-diary',
        show_url: true,
        description: 'Flight Diary built with React, Typescript + Integration with Nodejs API', 
        notes: ['in development', 'react', 'typescript', 'nodejs'] 
    },
    { 
        title: 'Minimalist porfolio', link: '', 
        url: 'https://github.com/anythinglord/minimalist-portfolio',
        show_url: true,
        description: 'Minimalist portfolio', 
        notes: ['in development','react' ,'typescript'] 
    },
    
]