import unity_spacer from './images/unity_spacer.gif';
import unity_garden_gnomes from './images/unity_garden_gnome_tower_defense.gif';
import unity_laser_defender from './images/unity_laser_defender.gif';
import email from './images/email.png';
import address from './images/address.png';
import linkedIn from './images/linkedin.png';
import github from './images/github.png';
import tourismappandroid from './images/tourismapp.PNG';
import tourismappjapan from './images/tourismappjapan.PNG';
import portfolio_site from './images/portfolio_site.PNG';
import admin_app from './images/admin.png';
import face_scanner from './images/face_scanner.PNG';

export const projects = [
    {
        id: 1,
        name: "Administration App",
        img: admin_app,
        description: "WPF App created using .NET for an independent record label.",
        technologies: [
            "C#",
            ".NET",
            "WPF",
            "SQLite"
        ]
    },
    {
        id: 2,
        name: "Portfolio Website",
        link: "#",
        img: portfolio_site,
        description: "This portfolio site was made using React",
        technologies: [
            "React",
            "Javascript",
            "Html",
            "CSS"
        ]
    },
    {
        id: 3,
        name: "Face Scanner",
        link: "https://dimitrismalliaris.github.io/face-scanner/",
        img: face_scanner,
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
        id: 4,
        name: "Spacer",
        img: unity_spacer,
        description: "A 3D video game made in Unity.",
        technologies:
        [
            "Unity",
            "C#",
        ]
    },
    {
        id: 5,
        name: "Garden gnomes",
        img: unity_garden_gnomes,
        description: "A 2D video game made in Unity.",
        technologies:
        [
            "Unity",
            "C#",
        ]
    },
    {
        id: 6,
        name: "Laser Defender",
        img: unity_laser_defender,
        description: "A 2D video game made in Unity.",
        technologies:
        [
            "Unity",
            "C#",
        ]
    },
    {
        id: 7,
        name: "Explore Santorini",
        img: tourismappandroid,
        description: "An android app containing the main attractions of Santorini. Supports google maps geolocation.",
        technologies:
        [
            "Android Studio",
            "Java",
        ]
    },
    {
        id: 8,
        name: "Explore Japan",
        img: tourismappjapan,
        description: "A desktop Japan-guide app.",
        technologies:
        [
            "Win Forms",
            "C#",
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
