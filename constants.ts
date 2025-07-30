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
		position: "Associate Data Engineer",
		recomendationType: "college",
		avatar: "/person/josef.jpg",
	},
	{
		comment: "Hi. How are you doing?? I was out with covid last week and misses your last day in the office.I'd have to say that you were the best intern ever! Willingness to learn and more than enthusiastic to get dropped into anything we could come up with. Hell, you got code and queries into PRD. Nice work!! Hope to see you again in the spring.",
		author: "Tom, Kinch",
		position: "Senior Data Engineer",
		recomendationType: "college",
		avatar: "/person/default.jpg",
	},
	{
		comment: "Hey Mark, you did a great job overall! The work linking the models to Snowflake and PowerBI are both big improvements in the overall process. The presentation to Joe also went well and I appreciated the preperation and work you put in for that!",
		author: "Luo, Hubert",
		position: "Senior Data Scientist",
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
	ENDTOEND: "End-to-End data analytics",
	BIDASHBOARDVIZ: "BI - Dashboard - Visualization",
	STATISTICSML: "Statistics - ML - AL project",
}

export const PROJECTS: IProject[] = [
	{
		name: "British Airways Review",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/brit_airway_review.png",
		blurImage: "/projects/brit_airway_review.png",
		description: "Analyzing British Airways Customer's review",
		gradient: ["#1b1b1b", "#d8d8d8"],
		url: "https://github.com/MarkPhamm/British-Airway",
		tech: ["python", "PowerBI", "Lambda", "Microsoft SQL Server"],
	},
	{
		name: "Marketing Campaign Analysis",
		category: ProjectTypes.BIDASHBOARDVIZ,
		image: "/projects/marketing.jpg",
		blurImage: "/projects/marketing.jpg",
		description: "Marketing Campaign Analysis for a retail company",
		gradient: ["#f2ece4", "#09091a"],
		url: "https://mavenanalytics.io/project/19447",
		tech: ["PowerBI", "alteryx", "Excel", "powerquery"],
	},
	{
		name: "Alcon Competitors Analysis",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/alcon.jpg",
		blurImage: "/projects/alcon.jpg",
		description: "Competitor Analysis Dashboard and Chatbot for Alcon",
		gradient: ["#167187", "#09091a"],
		url: "https://github.com/MarkPhamm/Alcon-Financial-Assistant",
		tech: ["python", "Pandas", "streamlit", "langchain", "openai"],
	},
	{
		name: "Streamlit Statistics App",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/StatCal.jpg",
		blurImage: "/projects/StatCal.jpg",
		description: "Streamlit Statistics Calculator for fellow student",
		gradient: ["#191414", "#f5f5f5"],
		url: "https://github.com/MarkPhamm/Stats-Calculator",
		tech: ["python", "streamlit", "normalDis"],
	},
	{
		name: "Sample Sales Dashboard",
		category: ProjectTypes.BIDASHBOARDVIZ,
		image: "/projects/samplesale.png",
		blurImage: "/projects/samplesale.png",
		description: "Sales Dashboard with key metrics for Global Superstore",
		gradient: ["#ffddaa", "#49789d"],
		url: "https://public.tableau.com/app/profile/minh.pham1154/viz/GlobalSuperstoreSalesDashboard_16962776044380/SalesDashboard",
		tech: ["excel", "alteryx", "tableau-software"],
	},
	{
		name: "AdventureWorks Analytics",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/adventure-analytics.png",
		blurImage: "/projects/comingsoon.jpg",
		description: "AdventureWorks revenue analysis: interactive, dynamic, data-driven insights",
		gradient: ["#003052", "#167187"],
		url: "https://github.com/MarkPhamm/Adventureworks-Analytics",
		tech: ["python", "Microsoft SQL Server", "PowerBI", "azure"],
	},
	{
		name: "Uber Analytics (GCP)",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/gcpuber.png",
		blurImage: "/projects/gcpuber.png",
		description: "End-to-end ETL data pipeline integrating Uber data",
		gradient: ["#1fbad6", "#09091a"],
		url: "https://github.com/MarkPhamm/Uber-BI-Engineering-Project",
		tech: ["python", "gcp", "bigquery", "compute_engine"],
	},
	{
		name: "Spotify Analytics (AWS)",
		category: ProjectTypes.ENDTOEND,
		image: "/projects/awsspoti.png",
		blurImage: "/projects/awsspoti.png",
		description:
			"Automated ETL pipeline integrating Spotify data via Spotify API",
		gradient: ["#1DB954", "#191414"],
		url: "https://github.com/MarkPhamm/Spotify-BI-Engineering-Project",
		tech: ["Lambda", "amazons3", "Athena", "Glue", "aws"],
	},
	
	{
		name: "Segment Shopping Customers",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/segment.png",
		blurImage: "/projects/segment.png",
		description: "K-Means Clustering Algorithm for Market Segmentation",
		gradient: ["#ccb08f", "#f2ece4"],
		url: "https://github.com/MarkPhamm/Python-Segment-Shopping-Customers",
		tech: ["python", "numpy", "Pandas", "Matplotlib"],
	},
	
	{
		name: "EaseMyTrip Airline Dashboard",
		category: ProjectTypes.BIDASHBOARDVIZ,
		image: "/projects/easeMyTrip.jpg",
		blurImage: "/projects/easeMyTrip.jpg",
		description: "Airline Dashboard for EaseMyTrip",
		gradient: ["#167187", "#49789d"],
		url: "https://mavenanalytics.io/project/19418",
		tech: ["PowerBI", "alteryx", "Excel", "powerquery"],
	},
	{
		name: "United Ways Tax Advisor Chatbot",
		category: ProjectTypes.STATISTICSML,
		image: "/projects/comingsoon.jpg",
		blurImage: "/projects/comingsoon.jpg",
		description: "Tax Advisor Chatbot using NLP and Machine Learning",
		gradient: ["#49789d", "#ffddaa"],
		url: "",
		tech: ["python", "langchain", "openai"],
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
