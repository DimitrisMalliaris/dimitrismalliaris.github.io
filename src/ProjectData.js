import unity_spacer from './images/unity_spacer.gif';
import email from './images/email.png';
import address from './images/address.png';
import linkedIn from './images/linkedin.png';
import github from './images/github.png';
import music_record from './images/icons8_music_record_96px.png';

export const projects = [
    {
        id: 1,
        name: "Master Thesis",
        img: "https://user-images.githubusercontent.com/73944749/172878730-954ceed8-4524-4923-b8e9-11301f607306.gif",
        link: "https://github.com/DimitrisMalliaris/master-thesis",
        description: "Master thesis project. It is a personal implementation of GOAP.",
        technologies: [
            "Unity3d",
            "C#",
            "GOAP",
            "Inteligent Agents",
            "Blender"
        ]
    },
    {
        id: 2,
        name: "Administration App",
        img: music_record,
        description: "WPF App created using .NET for an independent record label.",
        technologies: [
            "C#",
            ".NET",
            "WPF",
            "SQLite"
        ]
    },
    {
        id: 3,
        name: "Portfolio Website",
        link: "https://github.com/DimitrisMalliaris/dimitrismalliaris.github.io",
        img: "https://user-images.githubusercontent.com/73944749/176410832-4e1463d4-8015-4f90-91f2-3f98f5acc1bb.png",
        description: "This portfolio site was made using React",
        technologies: [
            "React",
            "Javascript",
            "Html",
            "CSS"
        ]
    },
    {
        id: 4,
        name: "Face Scanner",
        link: "https://github.com/DimitrisMalliaris/face-scanner",
        img: "https://user-images.githubusercontent.com/73944749/176224893-434b6141-6ca8-47c2-8181-119c32427ce4.png",
        description: "Face recognition app created using React, Express and the clarifai API",
        technologies: [
            "React",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "Html",
            "CSS"
        ]
    },
    {
        id: 5,
        name: "Spacer",
        img: unity_spacer,
        description: "A prototype 3D video game made in Unity.",
        technologies: [
            "Unity",
            "C#",
        ]
    },
    {
        id: 6,
        name: "Block Breaker: Mania",
        link: "https://github.com/DimitrisMalliaris/block-breaker-mania",
        img: "https://user-images.githubusercontent.com/73944749/176411513-cb4bc2fb-98be-46c4-a187-d7acc2f117c0.png",
        description: "A prototype 2D video game made in Unity.",
        technologies: [
            "Unity",
            "C#",
        ]
    },
    {
        id: 7,
        name: "Star Fighter",
        link: "https://github.com/DimitrisMalliaris/star-fighter",
        img: "https://user-images.githubusercontent.com/73944749/176432729-9eb6cd81-6602-4fd3-9e8d-1e078c832d36.png",
        description: "A prototype 2D video game made in Unity.",
        technologies: [
            "Unity",
            "C#",
        ]
    },
    {
        id: 8,
        name: "Diet Planner",
        img: "https://user-images.githubusercontent.com/73944749/176214754-00d6e6c6-e942-4d0b-a1cb-50d0ebe68c2e.png",
        link:"https://github.com/DimitrisMalliaris/diet-app",
        description: "Android app for keeping track of your dietary needs. Created in Android Studio.",
        technologies: [
                "Java",
                "Android Studio",
                "Firebase"
        ]
    },
    {
        id: 9,
        name: "Librarian",
        img: "https://user-images.githubusercontent.com/73944749/176171615-3fb3cc62-5313-4c19-9505-255c6c82c83b.png",
        link: "https://github.com/DimitrisMalliaris/librarian",
        description: "Desktop app created with Winforms & PostgreSQL",
        technologies: [
            ".NET framework",
            "Winforms",
            "PostgreSQL"
        ]
    }
]

export const collaborations = [
    {
        id: 1,
        name: "Maria Traga",
        img: "https://mariatraga.github.io/static/media/me2.1fa6a1d0518bacde0954.png",
        link: "https://mariatraga.github.io/"
    }
]

export const aboutme = {
    title: "Who am I?",
    subtitle: "",
    description: <div><span>Having a passion for computers, after my Bachelor's in Agriculture, I completed my Master's Degree in Informatics and am currently pursuing my carreer as a developer.</span><br/>
    <span>I have developed a variety of web apps as well as desktop apps throughout my studies be it assignments or personal projects.</span><br/><span> Oh! I am also very intrigued by game development.</span></div>,
    technologies: [
        "Python",
        "C#",
        "Javascript",
        "HTML",
        "CSS",
        "Express",
        "NodeJS",
        "React",
        "SQLite",
        "PostgreSQL",
        "NoSQL",
        "Unity",
        ".NET"
    ]
}

export const introduction = {
    introtext: "Hello my name is",
    name: "Dimitris Malliaris",
    description: "Aspiring developer.",
    titles: [
        "Web Apps",
        "Frontend",
        "Backend",
        "Desktop",
        "Mobile",
        "Unity"
    ],
    resume: "https://drive.google.com/file/d/1PGq59QVJFH58Na55JaxJ2iT-5J-wcbeg/view?usp=sharing"
}

export const contact = {
    title: "Contact Info",
    description: "Send me a message!",
    message: "Thank you! Your message has been received.",
    items: [
        {
            id: 1,
            link: "mailto:dimitris.mlr@outlook.com",
            info: "Email",
            img: email
        },
        {
            id: 2,
            link: "https://www.google.com/maps?q=athens&rlz=1C1JZAP_enGR931GR931&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj-sbvI-vL0AhW_hf0HHcj4DFQQ_AUoAXoECAEQAw",
            info: "Athens, Greece",
            img: address
        },
        {
            id: 3,
            link: "https://www.linkedin.com/in/dimitris-malliaris-a65047177/",
            info: "LinkedIn",
            img: linkedIn
        },
        {
            id: 4,
            link: "https://github.com/DimitrisMalliaris",
            info: "GitHub",
            img: github
        }
    ]

}
