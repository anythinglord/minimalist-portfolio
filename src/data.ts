interface Skill {
    name: string
    icon: String
}

interface Project {
    title: string
    link?: string
    github?: string // github link
    description: string
    notes?: Array<string>
}

export const SkillSmash: Array<Skill> = [
    { name: 'Python',icon: 'fa-python' },
    { name: 'TensorFlow',icon: 'fa-python' },
    { name: 'ScikitLearn',icon: 'fa-python' },
    { name: 'Keras',icon: 'fa-python' },
    { name: 'Django',icon: 'fa-python' },
    { name: 'Git',icon: 'fa-git-alt' },
    { name: 'Github',icon: 'fa-github' },
    { name: 'Docker',icon: 'fa-docker' },
]

export const ProjectSmash: Array<Project> = [
    { 
        title: 'Ai Journey', link: '', 
        github: 'https://github.com/anythinglord/ai-journey',
        description: 'Approach to construction of hybrid AI models optimized by Deep Neuroevolution, with ML, AI and DL', 
        notes: ['in development', 'ai', 'cnn-vae', 'tensorflow'] 
    },
    { 
        title: 'Task Manager', link: '', 
        github: 'https://github.com/anythinglord/django-mysql',
        description: 'Task Management application built with Django, python and SQLite', 
        notes: ['in development', 'django','python'] 
    },
    { 
        title: 'Task Manager', link: '', 
        github: 'https://github.com/anythinglord/flask-api',
        description: 'Task Management application built with Flask, python', 
        notes: ['in development', 'flask','python'] 
    },
]