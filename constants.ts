// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
	title: "Portfolio | Ayush Singh",
	description:
		"I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
	siteUrl: "https://ayushsingh.net/",
};

export const NAVBARITEMS = [
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
	{
		name: "Passions",
		ref: "passions",
	},
	{
		name: "Start-ups",
		ref: "Start-ups",
	},
];

export const MENULINKS = [
	{
		name: "Projects",
		ref: "works",
	},
	{
		name: "Articles",
		ref: "articles",
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
		name: "Passions",
		ref: "passions",
	},
	{
		name: "Start-ups",
		ref: "Start-ups",
	},
];

export const TYPED_STRINGS = [
	"738 SQL questions solved",
	"BI & Analytics Enthusiast",
	"TCU Math and MIS class of 2025",
	"Certified Scrum Product Owner",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
	linkedin: "https://www.linkedin.com/in/alphaayush/",
	github: "https://github.com/ayush013",
};

export interface IProject {
	name: string;
	image: string;
	blurImage: string;
	description: string;
	gradient: [string, string];
	url: string;
	tech: string[];
}

export const PROJECTS: IProject[] = [
	{
		name: "Sample Sales Dashboard",
		image: "/projects/samplesale.png",
		blurImage: "/projects/samplesale.png",
		description: "Sales Dashboard with key metrics for Global Superstore",
		gradient: ["#ffddaa", "#49789d"],
		url: "https://public.tableau.com/app/profile/minh.pham1154/viz/GlobalSuperstoreSalesDashboard_16962776044380/SalesDashboard",
		tech: ["excel", "alteryx", "tableau-software"],
	},
	{
		name: "Uber Analytics (GCP)",
		image: "/projects/gcpuber.png",
		blurImage: "/projects/gcpuber.png",
		description: "end-to-end ETL data pipeline integrating Uber data",
		gradient: ["#1fbad6", "#09091a"],
		url: "https://github.com/MarkPhamm/Uber-BI-Engineering-Project",
		tech: ["python", "gcp", "bigquery", "compute_engine"],
	},
	{
		name: "AWS Spotify Analytics",
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
		image: "/projects/segment.png",
		blurImage: "/projects/segment.png",
		description: "K-Means Clustering Algorithm for Market Segmentation",
		gradient: ["#ccb08f", "#f2ece4"],
		url: "https://github.com/MarkPhamm/Python-Segment-Shopping-Customers",
		tech: ["python", "numpy", "Pandas", "Matplotlib"],
	},

	{
		name: "Stock Analysis (Coming soon)",
		image: "/projects/comingsoon.jpg",
		blurImage: "/projects/comingsoon.jpg",
		description: "Coming soon",
		gradient: ["#003052", "#167187"],
		url: "",
		tech: [],
	},

	// {
	// 	name: "Coming soon",
	// 	image: "/projects/ngx-quill-upload.jpg",
	// 	blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
	// 	description: "NPM Package for Quill JS uploads from Angular",
	// 	gradient: ["#245B57", "#004741"],
	// 	url: "",
	// 	tech: ["npm", "angular", "typescript"],
	// },
];

export const SKILLS = {
	technical: [
		"mysql",
		"postgresql",
		"microsql",
		"numpy-1",
		"pandas",
		"matplotlib",
		"seaborn",
	],
	statistic: ["abtest", "ttest", "square", "regression", "confi"],
	visualization: ["amazon-quicksight", "tableu", "powerbi", "looker"],
	clouds: [
		"aws-s3",
		"aws-ec2",
		"aws-cloudwatch",
		"aws-glue",
		"aws-athena",
		"aws-lambda",
		"aws-redshift",
		"compute_engine",
		"google-bigquery",
	],
	other: ["alteryx", "SNOW", "databricks", "mageai", "sap-icon"],
	sqlprob: [
		{ count: "602", title: "Stratascratch problems" },
		{ count: "87", title: "Leetcode problems" },
		{ count: "45", title: "Hackerrank problems" },
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
};

export const COURSES = {
	bi: ["tableu", "alteryx", "looker"],
	dbms: ["microsql", "mongodb", "datamodel", "datapipe"],
	stats: ["abtest", "ttest", "square", "regression", "confi"],
	sysplan: ["agile", "scrum", "kanban", "jira", "sdlc", "lean"],
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
		title: "January 2023",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "BI and Analytics Intern - Corning Inc., (Fortune 500)",
		size: ItemSize.SMALL,
		subtitle:
			"BI & Analytics intern @Global Supply Chain Team, focusing on Logistic cost Analysis and Warehouse’s Location optimization",
		image: "/timeline/Corning 1.jpg",
		slideImage: "/timeline/Corning 1.jpg",
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
		title: "Stealth Startup - Product Management Intern",
		size: ItemSize.SMALL,
		subtitle:
			"Product Management @Payment Team, focusing on cryptocurrency payments",
		image: "/timeline/Stealth.jpg",
		slideImage: "/timeline/Stealth.jpg",
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
		title: "KPIM Consulting - Data Analyst intern",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst @ BI team, focusing on creating ad-hoc report and dashboards for the Sales team",
		image: "/timeline/KPIM.jpg",
		slideImage: "/timeline/KPIM.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "UNAPAS Vietnam - Data Analyst intern",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst @ IT team, focusing on data house modeling and data visualization",
		image: "/timeline/NAPAS.jpg",
		slideImage: "/timeline/NAPAS.jpg",
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
		title: "The Coconut Consulting Academy - CEO, Founder",
		size: ItemSize.SMALL,
		subtitle:
			"CEO, Founder @The Coconut consulting Academy, managed team of 10 consultants to generate 10000$ in yearly revenue",
		image: "/timeline/Coconut.png",
		slideImage: "/timeline/Coconut.png",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
];

export const SKILLCERTI: Array<TimelineNodeV2> = [
	{
		type: NodeTypes.CHECKPOINT,
		title: "My certifications",
		size: ItemSize.LARGE,
		shouldDrawLine: false,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "KPIM Consulting - Data Analyst intern",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst @ BI team, focusing on creating ad-hoc report and dashboards for the Sales team",
		image: "/timeline/KPIM.jpg",
		slideImage: "/timeline/KPIM.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "UNAPAS Vietnam - Data Analyst intern",
		size: ItemSize.SMALL,
		subtitle:
			"Data Analyst @ IT team, focusing on data house modeling and data visualization",
		image: "/timeline/NAPAS.jpg",
		slideImage: "/timeline/NAPAS.jpg",
		shouldDrawLine: true,
		alignment: Branch.LEFT,
	},
	{
		type: NodeTypes.CHECKPOINT,
		title: "The Coconut Consulting Academy - CEO, Founder",
		size: ItemSize.SMALL,
		subtitle:
			"CEO, Founder @The Coconut consulting Academy, managed team of 10 consultants to generate 10000$ in yearly revenue",
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
