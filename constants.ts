// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { avatar } from "@material-tailwind/react";

export const METADATA = {
	title: "Portfolio | Mark Pham",
	description: "I bridge the gap between data and actionable insights",
	siteUrl: "",
};

export const NAVBARITEMS = [
	{
		name: "Home",
		ref: "home",
	},
	{
		name: "Skillset",
		ref: "skills",
	},
	{
		name: "Experience",
		ref: "timeline",
	},
	{
		name: "Projects",
		ref: "works",
	},
	{
		name: "Articles",
		ref: "articles",
	},
	{
		name: "Passion",
		ref: "/aboutme/passion",
	},
	{
		name: "Start-up",
		ref: "/aboutme/startup",
	},
];

export const MENULINKS = [
	{
		name: "Home",
		ref: "home",
	},
	{
		name: "Projects",
		ref: "works",
	},
	{
		name: "Skillset",
		ref: "skills",
	},
	{
		name: "Articles",
		ref: "articles",
	},
	{
		name: "Experience",
		ref: "timeline",
	},
];

export const COMMENTS = [
	{
		comment: "Minh's exceptional documentation skills stood out significantly. He always meticulously documented every process and project he worked on, ensuring that his contributions would continue to benefit the team long after his internship concluded. His proactive approach and willingness to go above and beyond what was expected of his position truly set him apart.",
		author: "Josef, Cohen",
		position: "Associate Data Engineer - Meta (Ex-Lazard)",
		recomendationType: "college",
		avatar: "/person/josef.jpg",
	},
	{
		comment: "Hi. How are you doing?? I was out with covid last week and misses your last day in the office.I'd have to say that you were the best intern ever! Willingness to learn and more than enthusiastic to get dropped into anything we could come up with. Hell, you got code and queries into PRD. Nice work!! Hope to see you again in the spring.",
		author: "Tom, Kinch",
		position: "Senior Data Engineer - Lazard",
		recomendationType: "college",
		avatar: "/person/default.jpg",
	},
	{
		comment: "Hey Mark, you did a great job overall! The work linking the models to Snowflake and PowerBI are both big improvements in the overall process. The presentation to Joe also went well and I appreciated the preperation and work you put in for that!",
		author: "Luo, Hubert",
		position: "Data Analytic Vice President - Lazard",
		recomendationType: "college",
		avatar: "/person/hubert.jpg",
	}

]

export const TYPED_STRINGS = [
	"1000+ SQL questions solved",
	"Analytics Engineer @Insurify",
	"TCU class of 2025",
	'Boston, MA'
];

export const EMAIL = "minh.b.pham@tcu.edu@gmail.com";

export const SOCIAL_LINKS = {
	linkedin: "https://www.linkedin.com/in/minhbphamm/",
	github: "https://github.com/MarkPhamm",
	leetcode: "https://leetcode.com/u/markphammm/",
	gmail: "mailto:minh.pham@insurify.com",
};

export interface IProject {
	name: string;
	category: string;
	image: string;
	blurImage: string;
	description: string;
	gradient: [string, string];
	url: string;
	tech: string[];
}

export const ProjectTypes = {
	ENDTOEND: "End-to-End Data Analytics",
	BIDASHBOARDVIZ: "BI - Dashboard - Visualization",
	STATISTICSML: "Statistics - ML - AI Project",
}

export const PROJECTS: IProject[] = [
	{
		name: "Consumer Complaint Pipeline",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/consumer_complaint.png",
		blurImage: "/projects/consumer_complaint.png",
		description: "",
		gradient: ["#0a4c6a", "#1b7fa1"],
		url: "https://github.com/MarkPhamm/consumer_complaint_pipeline",
		tech: ["python", "Apache Airflow", "Dbt", "Snowflake", "Docker"],
	},
	{
		name: "Housing Purchase Predictor",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/housing_predictor.png",
		blurImage: "/projects/housing_predictor.png",
		description: "",
		gradient: ["#2a5298", "#1e3a5f"],
		url: "https://github.com/MarkPhamm/housing_purchase_predictor",
		tech: ["python", "streamlit", "Pandas", "Matplotlib", "numpy"],
	},
	{
		name: "Skytrax Airways Review Project",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/brit_airway_review.png",
		blurImage: "/projects/brit_airway_review.png",
		description: "",
		gradient: ["#1b1b1b", "#d8d8d8"],
		url: "https://github.com/MarkPhamm/British-Airway",
		tech: ["python", "Snowflake", "Dbt", "Mode Reporting", "Apache Airflow"],
	},
	{
		name: "Marketing Campaign Analysis",
		category: ProjectTypes.BIDASHBOARDVIZ,
		image: "/projects/marketing.jpg",
		blurImage: "/projects/marketing.jpg",
		description: "",
		gradient: ["#f2ece4", "#09091a"],
		url: "https://mavenshowcase.com/project/19447",
		tech: ["PowerBI", "alteryx", "excel", "powerquery", "Microsoft SQL Server"],
	},
	{
		name: "Streamlit Statistics App",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/StatCal.jpg",
		blurImage: "/projects/StatCal.jpg",
		description: "",
		gradient: ["#191414", "#f5f5f5"],
		url: "https://github.com/MarkPhamm/Stats-Calculator",
		tech: ["python", "streamlit", "normalDis", "Pandas", "Matplotlib"],
	},
	{
		name: "Alcon Competitors Analysis",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/alcon.jpg",
		blurImage: "/projects/alcon.jpg",
		description: "",
		gradient: ["#167187", "#09091a"],
		url: "https://github.com/MarkPhamm/Alcon-Financial-Assistant",
		tech: ["python", "Pandas", "streamlit", "langchain", "openai"],
	},
	{
		name: "Sample Sales Dashboard",
		category: ProjectTypes.BIDASHBOARDVIZ,
		image: "/projects/samplesale.png",
		blurImage: "/projects/samplesale.png",
		description: "",
		gradient: ["#ffddaa", "#49789d"],
		url: "https://public.tableau.com/app/profile/minh.pham1154/viz/GlobalSuperstoreSalesDashboard_16962776044380/SalesDashboard",
		tech: ["excel", "alteryx", "tableau", "powerquery", "Microsoft SQL Server"],
	},
	{
		name: "AdventureWorks Analytics",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/adventure-analytics.png",
		blurImage: "/projects/comingsoon.jpg",
		description: "",
		gradient: ["#003052", "#167187"],
		url: "https://github.com/MarkPhamm/Adventureworks-Analytics",
		tech: ["python", "Microsoft SQL Server", "PowerBI", "azure", "Git"],
	},
	{
		name: "Segment Shopping Customers",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/segment.png",
		blurImage: "/projects/segment.png",
		description: "",
		gradient: ["#ccb08f", "#f2ece4"],
		url: "https://github.com/MarkPhamm/Python-Segment-Shopping-Customers",
		tech: ["python", "numpy", "Pandas", "Matplotlib", "Git"],
	},
	{
		name: "EaseMyTrip Airline Dashboard",
		category: ProjectTypes.BIDASHBOARDVIZ,
		image: "/projects/easeMyTrip.jpg",
		blurImage: "/projects/easeMyTrip.jpg",
		description: "",
		gradient: ["#167187", "#49789d"],
		url: "https://mavenshowcase.com/project/19418",
		tech: ["PowerBI", "alteryx", "excel", "powerquery", "Microsoft SQL Server"],
	},
	{
		name: "United Ways Tax Advisor Chatbot",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/comingsoon.jpg",
		blurImage: "/projects/comingsoon.jpg",
		description: "",
		gradient: ["#49789d", "#ffddaa"],
		url: "",
		tech: ["python", "langchain", "openai", "streamlit", "Github"],
	}
];

export const SKILLS = {
	"Business Intelligence": [
		"PowerBI",
		"Tableau",
		"Mode",
		"Hex"
	],
	"Data Warehousing": [
		"Snowflake",
		"AWS Redshift",
		"Google Bigquery",
		"Databricks"
	],
	"Data Integration": [
		"Airbyte",
		"Dlt",
		"Fivetran",
		"Stich"
	],
	"Orchestration": [
		"Apache Airflow",
		"Dagster",
		"MageAI",
		"Orchestra"
	],
	"Data Processing and Transformation": [
		"dbt",
		"Spark",
		"Kafka",
		"Astronomer"
	],
	"DevOps": [
		"Docker",
		"Kubernetes",
		"Github",
		"Terraform"
	],

	certified: [
		"Certified Scrum Product Owner",
		"SQL Advanced Hackerrank Certification",
		"DataCamp Certified Data Analyst",
	],
	relevant: [
		"Business Intelligence (Tableau, Alteryx, Google Looker Studio)",
		"Database Management System (SQL Server, MongoDB, Data Modelling, ETL Pipelines)",
		"Statistical Modelling (A/B test, T-test, Chi-Square, Linear Regression)",
		"System planning (Agile, Scrum, Kanban, Jira, SDLC, Lean 6σ)",
	],
	sqlprob: [
		"602 SQL questions solved",
		"87 Leetcode problems solved",
		"45 Hackerrank problems solved",
	],
	alteryx: "Alteryx",
	hackerank: "HackerRank",
	airflow: "Airflow",
};

export const SQLCode = {
	sql1: `SELECT * FROM marketing_campaign
ORDER BY 1,2`,
};

export const COURSES = {
	bi: ["tableu", "alteryx", "GCP Looker"],
	dbms: ["Microsoft SQL Server", "mongodb", "datamodel", "datapipe"],
	stats: [
		"AB Test",
		"T-Test",
		"Chi-Square",
		"regression",
		"Confidence Interval",
	],
	sysplan: ["Agile", "Scrum", "Kanban", "Jira", "Sdlc", "Lean 6σ"],
};

export enum Branch {
	LEFT = "leftSide",
	RIGHT = "rightSide",
}

export enum NodeTypes {
	CONVERGE = "converge",
	DIVERGE = "diverge",
	CHECKPOINT = "checkpoint",
}

export enum ItemSize {
	SMALL = "small",
	LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
	{
		type: NodeTypes.CHECKPOINT,
		title: "June 2025",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "Analytics Engineer - <a class='underline underline-offset-2' href='https://insurify.com' target='_blank' rel='noopener noreferrer'><u>Insurify</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"Analytics Engineer @Insurify, Marketing Tech, Networks + Core Analytics, Boston",
		image: "/timeline/insurify.png",
		slideImage: "/timeline/insurify.png",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "June 2024",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "Data Engineering Intern - <a class='underline underline-offset-2' href='https://www.lazard.com/' target='_blank' rel='noopener noreferrer'><u>Lazard</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"Data Engineering Intern @FABT team, focusing on data engineering and ETL pipelines, NYC",
		image: "/timeline/lazard.jpg",
		slideImage: "/timeline/lazard.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "Janurary 2024",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title:
			"BI Engineering Intern - <a class='underline underline-offset-2' href='https://www.techsmith.com/' target='_blank' rel='noopener noreferrer'><u>Techsmith</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"BI Engineering Intern @Marketing/Sales teams, focusing on ROI/Revenue report and prediction, Remote",
		image: "/timeline/techsmith.jpg",
		slideImage: "/timeline/techsmith.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "January 2023",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title:
			"Data Analyst Intern - <a class='' href='https://www.corning.com/worldwide/en.html' target='_blank' rel='noopener noreferrer'><u>Corning Inc</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst intern @Global Supply Chain Team, focusing on Logistic cost Analysis and Warehouse's Location optimization, Keller",
		image: "/timeline/Corning.png",
		slideImage: "/timeline/Corning.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "October 2022",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "Product Management Intern - Stealth",
		size: ItemSize.SMALL,
		subtitle:
			"Product Management @Payment Team, focusing on cryptocurrency payments, Remote",
		image: "/timeline/Stealth1.jpg",
		slideImage: "/timeline/Stealth.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "June 2022",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title:
			"Data Analyst intern - <a class='' href='https://en.napas.com.vn/' target='_blank' rel='noopener noreferrer'><u>NAPAS Vietnam</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst @Information Technology team, focusing on data warehouse modeling and data visualization, Remote",
		image: "/timeline/NAPAS1.png",
		slideImage: "/timeline/NAPAS.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "May 2022",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},

	{
		type: NodeTypes.CHECKPOINT,
		title:
			"Data Analyst intern - <a class='' href='https://kpim.vn/' target='_blank' rel='noopener noreferrer'><u>KPIM Consulting</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst @BI team, focusing on creating ad-hoc report and dashboards for the Sales team, Remote",
		image: "/timeline/KPIM1.jpg",
		slideImage: "/timeline/KPIM.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},

	{
		type: NodeTypes.CHECKPOINT,
		title: "May 2020",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "CEO, Founder - <a class='underline underline-offset-2' href='https://www.facebook.com/thecoconut.vn/' target='_blank' rel='noopener noreferrer'><u>The Coconut Consulting Academy</u></a>",
		size: ItemSize.SMALL,
		subtitle:
			"CEO, Founder @The Coconut consulting Academy, managed team of 10 consultants to generate 10000$ in yearly revenue, Remote",
		image: "/timeline/Coconut.png",
		slideImage: "/timeline/Coconut.png",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},

];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
	type: NodeTypes.CHECKPOINT;
	title: string;
	subtitle?: string;
	size: ItemSize;
	image?: string;
	slideImage?: string;
	shouldDrawLine: boolean;
	alignment: Branch;
}

export interface BranchNode {
	type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
