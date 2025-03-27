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
    { name: 'TensorFlow',icon: 'fa-python' },
    { name: 'ScikitLearn',icon: 'fa-python' },
    { name: 'Keras',icon: 'fa-python' },
    { name: 'Python',icon: 'fa-python' },
    { name: 'TypeScript',icon: 'fa-ts' },
    { name: 'HTML',icon: 'fa-html5' },
    { name: 'CSS',icon: 'fa-css3-alt' },
    { name: 'JavaScript',icon: 'fa-js' },
    { name: 'MySQL',icon: 'fa-mysql' },
    { name: 'Git',icon: 'fa-git-alt' },
    { name: 'Github',icon: 'fa-github' },
    { name: 'AWS',icon: 'fa-aws' },
    { name: 'React',icon: 'fa-react' },
    { name: 'Docker',icon: 'fa-docker' },

];

export const ProjectSmash: Array<Project> = [
    { 
        title: 'Ai Journey', link: '', 
        //fav: true,
        show_url: true,
        url: 'https://github.com/anythinglord/ai-journey',
        description: 'Approach to construction of hybrid AI models optimized by Deep Neuroevolution, with ML, AI and DL', 
        notes: ['in development', 'ai', 'ML', 'cnn-vae', 'tensorflow'] 
    },
    { 
        title: 'Mind Money', link: '', 
        //fav: true,
        show_url: true,
        url: 'https://github.com/anythinglord/mind-money',
        description: 'A personal finance app to track expenses and manage budgets', 
        notes: ['in development', 'react', 'typescript', 'redux'] 
    },
    { 
        title: 'Mind Money API', link: '', 
        //fav: true,
        show_url: true,
        url: 'https://github.com/anythinglord/mind-money-api',
        description: 'Mind money`s API prowered by NodeJS', 
        notes: ['in development', 'express', 'typescript', 'node', 'prisma-orm', 'mongodb'] 
    },
    { 
        title: 'RT - Tilalaskenta', link: 'https://kustannuslaskenta.rakennustieto.fi/#/', 
        url: '',
        //fav: true,
        show_url: false,
        description: 'Cost calculation for building projects in finland     ', 
        notes: ['in production', 'react','symfony', '+2000 commits', 'GitLab'] 
    },
    { 
        title: 'MediCare', link: 'https://eps-journey.vercel.app', 
        url: '',
        //fav: true,
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
]