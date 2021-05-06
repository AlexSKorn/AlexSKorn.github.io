import React from 'react';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import map from "../images/map.jpg";
import gac from "../images/gacImage.png";
import chrome from "../images/ChromeLogo.png";
import discord from "../images/discord.png";

export interface Experience {
  time: string;
  position: string;
  location: string;
  companyUrl: string;
  company: string;
  details: Array<string>;
}

export interface Education {
  time: string,
  school: string,
  major: string,
  relevantCoursework: Array<string>
}

export interface TechnicalSkills {
  [key: string]: Array<string>
}

export interface ResumeData {
  workExperience: Array<Experience>,
  additionalExperience: Array<Experience>,
  technicalSkills: TechnicalSkills,
  educations: Array<Education>
}

export interface PortfolioItem {
  imageUrl: string,
  title: string,
  description: string,
  technologies: string,
}

export const coverText = {
  mainTitle: 'Alex Korn',
  subTtile: 'Full Stack Developer',
};

export const aboutText = {
  title: 'About Me',
  content: 'I am currently a Full Stack Software Engineer at Cox Automotive, I am also pursuing my Masters of Computer Science at Georgia Institute of Technology.'
}

export const socialMediaInfo = [
  {
    icon: <GithubFilled />,
    url: 'https://github.com/AlexSKorn'
  },
  {
    icon: <LinkedinFilled />,
    url: 'https://www.linkedin.com/in/alexander-korn-97510a11b/'
  }
];


export const resumeData: ResumeData = {
  workExperience: [
    {
      time: 'October 2020 - Present',
      position: 'Software Engineer II ',
      company: 'Cox Automotive',
      location: 'Austin, TX',
      companyUrl: 'https://www.coxautoinc.com/',
      details: [
        'Designed and implemented user interface functionality.',
        'Setup cloud infrastracture to support development via AWS.',
        'Investigated performance and optimization and setup plans to improve load times and efficiency issues.',
        'Setup CI/CD pipelines',
        'C#, .Net, Typescript, HTML, CSS, AWS, New Relic, REST API, ReactJS'
      ]
    },
    {
      time: 'January 2019 - October 2020',
      position: 'Software Engineer II ',
      company: 'Beckman Coulter',
      location: 'Chaska, MN',
      companyUrl: 'https://www.beckmancoulter.com/',
      details: [
        'Worked as part of a cross-functional agile, R&D software team',
        'Developed, designed, and tested REST APIs build in C#',
        'Designed and implemented web applications and tools for internal use.',
        'Successfully setup Azure infrastructure, VMs, functions, and Azure DeveOps CI/CD pipelines',
        'C#, Javascript, SQL Server, Razor Pages, WPF, HTML, CSS, Azure, Azure DevOps'
      ]
    },
    {
      time: 'June 2018 - Jan 2019',
      position: 'Java Developer at Ameriprise Financial',
      company: 'Genesis10',
      location: 'Minneapolis, MN',
      companyUrl: 'https://www.genesis10.com/',
      details: [
        'Worked as part of an agile software team focusing on the development of microservices consumed by Ameriprise Applications.',
        'Successfully aided in a transition from internal tools to AWS.',
        'Java, Scala, AWS, Spring, REST, Maven, Elasticsearch, Docker, Kubernetes'
      ]
    },
    {
      time: 'Summer 2017',
      position: 'Software Engineer Intern',
      location: 'Chaska, MN',
      company: 'Beckman Coulter',
      companyUrl: 'https://www.beckmancoulter.com/',
      details: [
        'Worked as part of a cross-functional agile, R&D software team',
        'Used Microsoft tools to design, test, and implement a troubleshooting system for customers to self-service their devices.'
      ]
    },
  ],
  additionalExperience: [
    {
      time: 'August 2016 - June 2018',
      position: 'Mobile Application Club President',
      company: 'Gustavus Adolphus College',
      location: 'St. Peter, MN',
      companyUrl: 'https://gustavus.edu/',
      details: [
        'Manage finances, setup club events, marketed the club to interested parties.',
        'Developed Android and iOS apps for students to use around campus.',
      ]
    }
  ],

  technicalSkills: {
    'Languages': ['Javascript', 'Typescript', 'Python', 'Java', 'C#', 'Scala', 'Swift', 'HTML & CSS'],
    'Web Frameworks': ['Spring', '.NET', 'React', 'Express', 'Flask'],
    'Database': ['SQL Server', 'Postgres SQL', 'MongoDB', 'Dynamo DB'],
    'Infrastracture': ['Git', 'AWS', 'Azure', 'New Relic', 'Elasticsearch'],
  },

  educations: [
    {
      time: 'Current',
      school: 'Georgia Institute of Technology',
      major: 'Masters of Science in Computer Science',
      relevantCoursework: ['Secure Computer Systems', 'Software Analysis', 'Database Design and Analysis']
    },
    {
      time: 'August 2014 - June 2018',
      school: 'Gustavus Adolphus College',
      major: 'Bachelors in Computer Science',
      relevantCoursework: ['Databases', 'Data Structures', 'Algorithms', 'Computer Architecture', 'Operating System', 'Object Oriented Programming', 'Human Computer Interaction', 'Cryptography']
    }
  ]
};

export const portfolioData: Array<PortfolioItem> = [
  {
    imageUrl: chrome,
    title: 'Email Tracker',
    description: 'A Chrome extension used to track the amount of time taken to open emails after recieving them.',
    technologies: 'Javascript, Node.js, JQuery, HTML, CSS',
  },
  {
    imageUrl: gac,
    title: 'Safe Rides',
    description: 'An app for students to schedule rides with the campus safe rides service.',
    technologies: 'Swift, Xcode, MySQL',
  },
  {
    imageUrl: map,
    title: 'Interactive Campus Map',
    description: 'A mobile android application to be used as a way for prospective students to explore campus.',
    technologies: 'Java, Android Studio, Gradle',
  },
  {
    imageUrl: discord,
    title: "Discord Info Bot",
    description: "An interactive discord bot to share information relevant to people in the discord server",
    technologies: "Python, DiscordAPI",
  }
];
