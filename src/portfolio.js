import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

import tailr from "./assets/img/tlr.png";
import roket from "./assets/img/rok.png";
import ies from "./assets/img/ies.png";
import redr from "./assets/img/redr.png";

export const greetings = {
	name: "Gustavo Medina",
	title: "Hi all, I'm Gustavo",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / ruby and some other cool libraries and frameworks and Mobile Apps With Java and Kotlin.",
	resumeLink: "https://drive.google.com/file/d/1C6DWMzsljA0wcaulCDkIzwYaWt8EFu-x/view?usp=sharinga",
};

export const openSource = {
	githubUserName: "gustavomc",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/gustavomc",
	instagram: "https://www.instagram.com/gustavoomedina",
	twitter: "https://twitter.com/gustavomediina",
	github: "https://github.com/gustavomc",
	linkedin: "https://www.linkedin.com/in/gustavo-medina/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Powerful backend running on NodeJS - Express / Koa"
		),
		emoji(
			"⚡ Integration of third party services such as Google Cloud Platform / AWS / Firebase"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "google-cloud",
			fontAwesomeClassname: "logos:google-cloud",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "99", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "99",
	},
	{
		Stack: "Programming",
		progressPercentage: "99",
	},
];

export const educationInfo = [
	{
		schoolName: "Universidad Autonoma de Sinaloa",
		subHeader: "Bachelor Degree in Software Engineering",
		duration: "August 2009 - December 2013",
		desc: "Participated in the Software Incubator.",
		descBullets: [
			"(Certified, Professional License. 8544019)"
		],
	},
	// {
	// 	schoolName: "Harvard",
	// 	subHeader: "Master of Science in Computer Science",
	// 	duration: "September 2017 - April 2019",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	schoolName: "Stanford University",
	// 	subHeader: "Bachelor of Science in Computer Science",
	// 	duration: "September 2013 - April 2017",
	// 	desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
	// 	descBullets: [
	// 		"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "Full Stack Software Engineer",
		company: "TailRecursive",
		companylogo: tailr,
		date: "Jan 2018 – Present",
		desc: "",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Software Engineer",
		company: "Soluciones Roket",
		companylogo: roket,
		date: "Feb 2016 – Jan 2018",
		desc: "",
	},
	{
		role: "Mobile Developer",
		company: "ie Soluciones",
		companylogo: ies,
		date: "Aug 2014 – Dec 2015",
		desc: "",
	},
	{
		role: "Web Developer",
		company: "RedRabbit",
		companylogo: redr,
		date: "May 2014 – Aug 2014",
		desc: "",
	},
];

export const projects = [
	{
		name: "QuickPass",
		desc: "Managed service provider to manage users and passwords.",
		link: "https://www.getquickpass.com/",
	},
	{
		name: "Alice",
		desc: "Application to get Pre-Tax Spending Automated.",
		link: "https://www.thisisalice.com/",
	},
	{
		name: "Jakroo",
		desc: "Worldwide webpage to design and buy custom sport clothes.",
		link: "https://designlab.jakroo.com/",
	},
	{
		name: "Ciudadano Digital Sinaloa",
		desc: "Portal to make online state tax/services payments for citizens.",
		link: "https://ciudadano.sinaloa.gob.mx/",
	},
	{
		name: "Empresario Digital Sinaloa",
		desc: "Portal to make online state tax/services payments for enterprises.",
		link: "https://empresario.sinaloa.gob.mx/",
	},
	{
		name: "Creditienda",
		desc: "Ecommerce for clients of a financial company.",
		link: "http://creditienda.mx/",
	},
	{
		name: "MiOficina®",
		desc: "Mobile application focused on the management of data and resources of distributors of Concredito Financial company.",
		link: "https://play.google.com/store/apps/details?id=com.concredito.express",
	},
	{
		name: "Distribuidores DpVale",
		desc: "Mobile application focused on the management of data and resources of distributors of DporTenis Store.",
		link: "https://play.google.com/store/apps/details?id=mx.dportenis.portaldistribuidoras",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Gustavo Medina has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Gustavo web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
