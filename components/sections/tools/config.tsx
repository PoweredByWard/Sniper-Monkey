import { StaticImageData } from "next/image";
import b1 from "../../../public/b1.jpg";
import b2 from "../../../public/b2.jpg";
import b3 from "../../../public/b3.jpg";
import b4 from "../../../public/b4.jpg";
import b5 from "../../../public/b5.jpg";

export type ToolStatus =
	| "online"
	| "offline"
	| "suggested"
	| "coming soon"
	| "under development";

interface ToolTypes {
	name: string;
	tools: Tool[];
}

export interface Tool {
	name: string;
	path?: string;
	premium: boolean;
	rating: number;
	image: StaticImageData;
	status: ToolStatus;
}

export const tools: ToolTypes[] = [
	{
		name: "General",
		tools: [
			{
				name: "Floor sweeper",
				path: "floor-sweeper",
				premium: true,
				rating: 4.5,
				image: b4,
				status: "under development",
			},
			{
				name: "Trend finder",
                                path: "trend-finder",
				premium: true,
				rating: 64,
				image: b4,
				status: "coming soon",
			},
			{
				name: "Notifier",
                                path: "notifier",
				premium: true,
				rating: 50,
				image: b4,
				status: "suggested",
			},
		],
	},
	{
		name: "Sniping",
		tools: [
			{
				name: "Rarity sniper (beta)",
                                path: "rarity-sniper",
				premium: false,
				rating: 4.5,
				image: b1,
				status: "online",
			},
			{
				name: "AI sniper",
                                path: "ai-sniper",
				premium: true,
				rating: 5,
				image: b2,
				status: "under development",
			},
			{
				name: "Auto sniper",
                                path: "auto-sniper",
				premium: true,
				rating: 3,
				image: b3,
				status: "suggested",
			},
		],
	},
	{
		name: "Minting",
		tools: [
			{
				name: "Fast minter",
                                path: "fast-minter",
				premium: false,
				rating: 5,
				image: b5,
				status: "under development",
			},
		],
	},
];
