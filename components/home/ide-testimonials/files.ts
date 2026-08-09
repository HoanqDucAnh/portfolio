import { COMMENTS } from "../../../constants";

// Each recommendation becomes a fake markdown "file" in the IDE window.
export interface ITestimonialFile {
	id: string; // "noah-pelberg"
	fileName: string; // "noah_pelberg.md"
	folder: string; // company: insurify | lazard | academia | mentorship
	tag: string; // recomendationType: work | college | mentee
	displayName: string; // "Noah Pelberg"
	rawAuthor: string; // "Noah, Pelberg" — the COMMENTS/THEMES join key
	role: string;
	avatar: string;
	quoteLines: string[]; // one sentence per editor line
}

// Per-folder accent (material-icon-theme spirit): folder icons, file icons,
// and quick-open dots all pick up their company's color.
export const FOLDER_COLORS: Record<string, string> = {
	insurify: "#BF94FF",
	lazard: "#38bdf8",
	academia: "#fbbf24",
	mentorship: "#34d399",
};

export const folderColor = (folder: string): string =>
	FOLDER_COLORS[folder] ?? "#BF94FF";

// "Noah, Pelberg" → ["noah", "pelberg"]
const nameParts = (author: string): string[] =>
	author
		.split(",")
		.map((part) => part.trim().toLowerCase().replace(/[^a-z0-9]/g, ""))
		.filter(Boolean);

// Sentence-per-line split (no regex lookbehind — old Safari throws at parse
// time, which would crash the whole chunk).
const toLines = (comment: string): string[] =>
	(comment.match(/[^.!?]+[.!?]*/g) || [comment]).map((s) => s.trim());

export const FILES: ITestimonialFile[] = COMMENTS.map((c) => {
	const parts = nameParts(c.author);
	return {
		id: parts.join("-"),
		fileName: `${parts.join("_")}.md`,
		folder: c.company,
		tag: c.recomendationType,
		displayName: c.author.replace(", ", " "),
		rawAuthor: c.author,
		role: c.position,
		avatar: c.avatar,
		quoteLines: toLines(c.comment),
	};
});

// Folders grouped by company, in first-encounter order.
export const FOLDERS: { name: string; files: ITestimonialFile[] }[] =
	FILES.reduce<{ name: string; files: ITestimonialFile[] }[]>(
		(folders, file) => {
			const existing = folders.find((f) => f.name === file.folder);
			if (existing) existing.files.push(file);
			else folders.push({ name: file.folder, files: [file] });
			return folders;
		},
		[]
	);

// TESTIMONIAL_THEMES.authors keeps the raw "First, Last" strings — this lookup
// bridges them to files without touching the constants.ts contract.
export const FILE_BY_AUTHOR: Record<string, ITestimonialFile> = COMMENTS.reduce(
	(acc, c, i) => {
		acc[c.author] = FILES[i];
		return acc;
	},
	{} as Record<string, ITestimonialFile>
);
