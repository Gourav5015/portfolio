
import photo from './css/photo.jpg'
import myimage from './css/myself.jpg'
import whatsapp from './css/whatsapp.png'
import linkedin from './css/linkedin.png'
import facebook from './css/facebook.png'
import instagram from './css/instagram.png'
import react from './css/react.png'
import android from './css/android.png'
import mongodb from './css/mongodb.webp'
import mysql from './css/mysql.png'
import project1 from "./css/project1.jpg"
import project2 from "./css/project2.avif"
import project3 from "./css/project3.jpg"
import project4 from "./css/project5.png"
import project5 from "./css/project4.jpg"
import kotlin from "./css/kotlin.png"
export const data = {
    config:{
        showIntroSection:true,
        showAboutSection:true,
        showEducationSection:true,
        showCodingSection:true,
        showProjectsSection:true,
        showSkillsSection:true,
        showContactSection:true,
        showFooterSection:true,
    },
    intro: {
        heading:"I am",
        name: "gourav agarwal",
        about: "To know more scroll down😎",
        image: photo,
        buttonText:"Know More...",
    },
    about: {
        image: photo,
        aboutme: "Hey reader. My name is Gourav Agarwal. A B.Tech student in CSE from Techno International Newtown I love to work on projects. I am open to explore new technologies.",
        education: [{
            class: "Class:10",
            board: "Board:CBSE",
            name: "School:Burnpur Riverside School",
            pass: "Passing Year:2018",
            percentage: "Percentage:86.6%",
        },
        {
            class: "Class:12",
            board: "Board:CBSE",
            name: "School:Burnpur Riverside School",
            pass: "Passing Year:2020",
            percentage: "Percentage:93.4%",
        },
        {
            class: "B.Tech",
            board: "University:MAKAUT",
            name: "College:Techno International Newtown",
            pass: "Passing Year:2024",
            percentage: "CGPA:9.17",
        }
        ],
    },
    coding:{
        leetcodeUsername:"aggourav5015",
        leetcodeUrl:"https://leetcode.com/aggourav5015/",
        showContestRating:true,
    },
    projects: [
        {
            name: "SharedSpace",
            image: project1,
            about: " Developed a user-friendly website with login and signup functionality, allowing users to access and utilize the platform for blog posting,reading, and deletion. Developed a secure and efficient web platform with user authentication, database management, and CRUD operations for seamless management of blog content, enhancing the user experience",
            tags: [
                'https://img.icons8.com/color/48/000000/html-5--v1.png',
                "https://img.icons8.com/color/48/000000/css3.png",
                "https://img.icons8.com/color/48/000000/javascript--v1.png",
                "https://img.icons8.com/color/48/000000/python--v1.png",
                "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png",
                "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
                android,
                mysql,
            ],
            view: "https://sharedspace.pythonanywhere.com/",
            repo: "https://github.com/Gourav5015/sharedspace",
            download: "https://drive.google.com/file/d/1QC_ROcBlAI-5RskjgvHY_Tvbj2gPevls/view?usp=sharing",
        },
        {
            name: "GetUrBill- Online Billing System",
            image: project2,
            about: "Led the development of the back end for a robust billing system, including designing and creating database models for efficient data storage and retrieval. Implemented complex business logic, ensuring accurate calculations, data validation, and seamless integration with the front-end interface",
            tags: [
                "https://img.icons8.com/color/48/000000/html-5--v1.png",
                "https://img.icons8.com/color/48/000000/css3.png",
                "https://img.icons8.com/color/48/000000/javascript--v1.png",
                "https://img.icons8.com/color/48/000000/python--v1.png",
                "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png",
                mysql,
            ],
            view: "",
            repo: "https://github.com/Gourav5015/getUrBill",
            download: "",
        },
        {
            name: "LeetCodeApi",
            image: project3,
            about: "Created a restful Api to get the profile details of any leetcode users. it can be used to show their leetcode profile dynamically in their portfolio website.",
            tags: [
                "https://img.icons8.com/color/48/000000/python--v1.png",
                "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png",
            ],
            view: "https://leetcodeprofileapi.vercel.app/api/aggourav5015/",
            repo: "https://github.com/Gourav5015/LeetcodeApi",
            download: "",
        },
        {
            name: "Easty- A food Delivery App",
            image: project4,
            about: "It is collaborative project made with my college friend to learn the fundamentals of Android development and to build a production lvel app interface with all the backend features including integrating payment gateway , showing the map from delivery partner to the user ",
            tags: [
                android,
                kotlin,
            ],
            view: "",
            repo: "https://github.com/Ankitsh-rtx/Eatsy",
            download: "https://drive.google.com/file/d/1j9FdOAbwTR0s_NkU9fOsG9WpCWWk0f68/view?usp=drive_link",
        },
        {
            name: "Attendance Management System",
            image: project5,
            about: "It is 2nd year college minor project assigned to us. in this project we have developed a system to track the attandance , leaves , working hours etc of the employee's to help the company to manage their workforce and help them to create a good working environment",
            tags: [
                "https://img.icons8.com/color/48/000000/html-5--v1.png",
                "https://img.icons8.com/color/48/000000/css3.png",
                "https://img.icons8.com/color/48/000000/javascript--v1.png",
                "https://img.icons8.com/color/48/000000/python--v1.png",
                "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png",
                mysql,
            ],
            view: "",
            repo: "https://github.com/Shreyansh2500/attendance",
            download: "",
        },
        
        {
            name: "Portfolio- For Everyone ",
            image: project1,
            about: "It is a Portfolio website template for everyone in this the who wants to have a portfolio website just need to update their details and done your website is ready in minutes without knowing any coding knowledge anyone can have their own  portfolio website.",
            tags: [
                "https://img.icons8.com/color/48/000000/html-5--v1.png",
                "https://img.icons8.com/color/48/000000/css3.png",
                "https://img.icons8.com/color/48/000000/javascript--v1.png",
                react,
            ],
            view: "https://portfolio-tq9y.vercel.app/#about",
            repo: "https://github.com/Gourav5015/portfolio",
            download: "",
        }
    ],
    skill: [{
        name: "C",
        image: "https://img.icons8.com/color/48/000000/c-programming.png",
    },
    {
        name: "Python",
        image: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
        name: "JavaScript",
        image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
        name: "C++",
        image: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
        name: "Java",
        image: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
    },
    {
        name: "Django",
        image: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png",
    },
    {
        name: "HTML",
        image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
        name: "CSS",
        image: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
        name: "Android",
        image: android,
    },
    {
        name: "ReacrJs",
        image: react,
    },
    {
        name: "MongoDB",
        image: mongodb,
    },
    {
        name: "MySQL",
        image: mysql,
    },
    ],
    contact: {
        heading1:"Message Me",
        heading2:"For work you can fill the form below" ,
        addressl1: "Near Community Hall ,Rambandh",
        addressl2: "Burnpur",
        addressl3: "Asansol",
        pincode: "713325",
        location: "https://maps.google.com/maps?ll=23.6641742,86.94676199999999&q=Rambandh&t=&z=14&ie=UTF8&iwloc=&output=embed",
    },
    footer: {
        social: [
            {
                platform: "Whatsapp",
                icon: whatsapp,
                link: "http://wa.me/+917001805799",
            },
            {
                platform: "Facebook",
                icon: facebook,
                link: "https://www.facebook.com/gourav.agarwal.5015",
            },
            {
                platform: "linkedin",
                icon: linkedin,
                link: "https://www.linkedin.com/in/gourav-agarwal-49987b21a",
            },
            {
                platform: "instagram",
                icon: instagram,
                link: "https://instagram.com/gourav_5015?utm_medium=copy_link",
            },
        ],
        mail: "aggourav5015@gmail.com",
        footerdesc: "Do connect with me on my social accounts too",
        copyright: "2023&copy;Gourav Agarwal",
        phone: "7001805799"
    }
}
