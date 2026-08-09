// Derives the "warehouse" tables the SQL terminal section queries from the
// canonical data in constants.ts, so the terminal never drifts from the rest
// of the site. Pure data — no React, no browser APIs.
import {
	CERTIFICATES,
	COMMENTS,
	ItemSize,
	NodeTypes,
	PROJECTS,
	SKILLS,
	TIMELINE,
} from "../constants";

const stripHtml = (s: string): string => s.replace(/<[^>]*>/g, "");

const MONTHS: Record<string, string> = {
	january: "01",
	february: "02",
	march: "03",
	april: "04",
	may: "05",
	june: "06",
	july: "07",
	august: "08",
	september: "09",
	october: "10",
	november: "11",
	december: "12",
};

// "June 2025" -> "2025-06-01" (ISO so ORDER BY works even as plain strings)
const parseStartDate = (label: string): string | null => {
	const [month, year] = label.trim().split(/\s+/);
	const mm = month && MONTHS[month.toLowerCase()];
	if (!mm || !year || !/^\d{4}$/.test(year)) return null;
	return `${year}-${mm}-01`;
};

interface ExperienceRow {
	role: string;
	company: string;
	location: string;
	start_date: string;
	started: string;
	is_current: number;
	blurb: string;
}

// TIMELINE alternates LARGE date checkpoints ("June 2025") with the SMALL
// role entry they belong to. Pair each SMALL node with the LARGE node before
// it; skip anything unpaired so a future data edit can't crash the terminal.
const buildExperience = (): ExperienceRow[] => {
	const rows: ExperienceRow[] = [];
	let lastDate: string | null = null;
	for (const node of TIMELINE) {
		if (node.type !== NodeTypes.CHECKPOINT) continue;
		if (node.size === ItemSize.LARGE) {
			lastDate = node.title;
			continue;
		}
		if (!lastDate) continue;
		const startDate = parseStartDate(lastDate);
		if (!startDate) continue;
		const plain = stripHtml(node.title).trim();
		const sep = plain.lastIndexOf(" - ");
		rows.push({
			role: sep >= 0 ? plain.slice(0, sep).trim() : plain,
			company: sep >= 0 ? plain.slice(sep + 3).trim() : "",
			location: node.location || "",
			start_date: startDate,
			started: lastDate,
			is_current: rows.length === 0 ? 1 : 0,
			blurb: node.subtitle || "",
		});
		lastDate = null;
	}
	return rows;
};

export const experience = buildExperience();

export const projects = PROJECTS.map((p) => ({
	name: p.name,
	category: p.category,
	tech: p.tech.join(", "),
	featured: p.featured ? 1 : 0,
	url: p.url,
}));

// Canonical display casing for tech names that appear with mixed casing
// across PROJECTS ("Dbt"/"dbt", "python", "Github"...).
const TECH_DISPLAY: Record<string, string> = {
	dbt: "dbt",
	python: "Python",
	github: "GitHub",
	alteryx: "Alteryx",
	excel: "Excel",
	powerquery: "Power Query",
	prefect: "Prefect",
	duckdb: "DuckDB",
	dlt: "dlt",
	streamlit: "Streamlit",
	numpy: "NumPy",
	shell: "Shell",
	normaldis: "Statistics",
};

// One row per project × tool — exploded from PROJECTS so GROUP BY tech
// gives genuinely varied counts (how often each tool actually gets used).
export const project_tech = PROJECTS.reduce<
	{ project: string; tech: string }[]
>(
	(rows, p) =>
		rows.concat(
			p.tech.map((t) => {
				const key = t.trim().toLowerCase();
				return { project: p.name, tech: TECH_DISPLAY[key] || t.trim() };
			})
		),
	[]
);

// One row per (category, skill) — the shape that makes GROUP BY and JOINs fun.
export const skills = Object.entries(SKILLS)
	.filter(([, v]) => Array.isArray(v))
	.filter(([k]) => !["certified", "relevant", "sqlprob"].includes(k))
	.reduce<{ category: string; skill: string }[]>(
		(rows, [category, list]) =>
			rows.concat((list as string[]).map((skill) => ({ category, skill }))),
		[]
	);

export const testimonials = COMMENTS.map((c) => ({
	author: c.author.replace(", ", " "),
	position: c.position,
	company: c.company,
	type: c.recomendationType,
	words: c.comment.split(/\s+/).length,
}));

export const certificates = CERTIFICATES.map((c) => ({
	name: c.name,
	issuer: c.issuer,
}));

const TABLES: Record<string, object[]> = {
	experience,
	projects,
	project_tech,
	skills,
	testimonials,
	certificates,
};

export interface ISchemaTable {
	table: string;
	columns: string[];
}

export const SCHEMA: ISchemaTable[] = Object.entries(TABLES).map(
	([table, rows]) => ({
		table,
		columns: rows.length ? Object.keys(rows[0]) : [],
	})
);

export interface IPresetQuery {
	label: string;
	sql: string;
}

export const PRESET_QUERIES: IPresetQuery[] = [
	{
		label: "Where has he worked?",
		sql: "SELECT role, company, location, started\nFROM experience\nORDER BY start_date DESC;",
	},
	{
		label: "Projects by category",
		sql: "SELECT category, COUNT(*) AS n\nFROM projects\nGROUP BY category\nORDER BY n DESC;",
	},
	{
		label: "Featured work",
		sql: "SELECT name, tech\nFROM projects\nWHERE featured = 1;",
	},
	{
		label: "Who vouches for him? (JOIN)",
		sql: "SELECT t.author, t.position, e.role\nFROM testimonials t\nJOIN experience e ON t.company = LOWER(e.company)\nORDER BY e.start_date DESC;",
	},
	{
		label: "Most-used tools",
		sql: "SELECT tech, COUNT(*) AS used_in_projects\nFROM project_tech\nGROUP BY tech\nORDER BY used_in_projects DESC\nLIMIT 12;",
	},
];

/** Registers every table with a (lazily imported) AlaSQL instance. */
export const registerTables = (alasql: any): void => {
	for (const [name, rows] of Object.entries(TABLES)) {
		if (alasql.tables && alasql.tables[name]) continue;
		alasql(`CREATE TABLE ${name}`);
		alasql.tables[name].data = rows;
	}
};
