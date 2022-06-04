import b2 from "../../../public/b2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCrown,
	faLock,
	faStar,
	faStarHalfStroke,
	faArrowUp,
	faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Button from "../../filter/comps/button";
import { Tool } from "./config";

interface ToolCardProp {
	tool: Tool;
}

function getStars(rating: number) {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			stars.push(<FontAwesomeIcon icon={faStar} className="text-yellow-500" />);
		} else if (i === Math.ceil(rating)) {
			stars.push(
				<FontAwesomeIcon icon={faStarHalfStroke} className="text-yellow-500" />
			);
		} else {
			stars.push(
				<FontAwesomeIcon icon={emptyStar} className="text-yellow-500" />
			);
		}
	}
	return stars;
}

function ProgressBar({ progress }) {
	return (
		<div className="relative h-1 mt-1 bg-gray-200 rounded-full w-full">
			{progress <= 25 && (
				<div
					style={{
						width: `${progress}%`,
					}}
					className="absolute h-full bg-red-400 rounded-full flex items-center justify-end"
				></div>
			)}
			{25 < progress && progress <= 50 && (
				<div
					style={{
						width: `${progress}%`,
					}}
					className="absolute h-full bg-orange-400 rounded-full flex items-center justify-end"
				></div>
			)}
			{50 < progress && (
				<div
					style={{
						width: `${progress}%`,
					}}
					className="absolute h-full bg-green-400 rounded-full flex items-center justify-end"
				></div>
			)}
		</div>
	);
}

function ToolCard({ tool }: ToolCardProp) {
	const stars = getStars(tool.rating);
	return (
		<figure className="w-60 relative rounded-md shadow-xl">
			<div className="w-full h-full absolute">
				<Image
					src={tool.image}
					layout="fill"
					className="rounded-md"
					alt="city view"
					objectFit="cover"
				/>
			</div>
			{tool.premium && (
				<div className="right-2 top-2 absolute text-yellow-500">
					<FontAwesomeIcon icon={faCrown} />
				</div>
			)}

			<div className="h-full w-full relative rounded-md bg-gradient-to-t from-gray-800 via-gray-800 to-transparent pt-12">
				<figcaption
					className="uppercase text-white text-center text-xl font-bold font-mono"
					style={{ textShadow: "0 0 10px black" }}
				>
					{tool.name}
				</figcaption>
				<ul className="p-2 text-white font-medium">
					{tool.status === "suggested" && (
						<li className="flex gap-1">
							<p>Votes:</p>
							{tool.rating > 0 && (
								<div className="text-green-400">{tool.rating}</div>
							)}
							{tool.rating === 0 && (
								<div className="text-orange-400">{tool.rating}</div>
							)}
							{tool.rating < 0 && (
								<div className="text-red-400">{tool.rating}</div>
							)}
						</li>
					)}
					{tool.status === "coming soon" && (
						<li className="flex items-center gap-1">
							<p>Progress:</p>
							<ProgressBar progress={51} />
						</li>
					)}
					{tool.status !== "suggested" && tool.status !== "coming soon" && (
						<li className="flex gap-1">
							<p>Rating:</p>
							<div className="text-yellow-400">{stars}</div>
						</li>
					)}
					<li className="flex gap-1 items-center whitespace-nowrap flex-wrap">
						<p className="">Status: </p>
						{tool.status === "online" && (
							<span className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-400">
								{tool.status}
							</span>
						)}
						{tool.status === "offline" && (
							<span className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-red-400">
								{tool.status}
							</span>
						)}
						{tool.status === "under development" && (
							<span className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-400">
								{tool.status}
							</span>
						)}
						{tool.status === "suggested" && (
							<span className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-indigo-900 uppercase rounded-full bg-indigo-400">
								{tool.status}
							</span>
						)}
						{tool.status === "coming soon" && (
							<span className="inline-block px-3 py-px text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-red-400">
								{tool.status}
							</span>
						)}
					</li>
					{tool.status !== "suggested" && (
						<li className="mt-2 flex gap-2 justify-between">
							{tool.premium && (
								<Button className="w-full bg-yellow-500 hover:bg-yellow-400 ">
									<FontAwesomeIcon icon={faLock} /> Subscribe
								</Button>
							)}
							{!tool.premium && tool.status === "online" && (
								<Button className="w-full ">Use</Button>
							)}
							{!tool.premium && tool.status !== "online" && (
								<Button className="w-full bg-indigo-800 hover:bg-indigo-800 cursor-not-allowed">
									<FontAwesomeIcon icon={faLock} /> Locked
								</Button>
							)}
							{/* <Button className="w-full">Rate</Button> */}
						</li>
					)}
					{tool.status === "suggested" && (
						<li className="mt-2 flex gap-2 justify-between">
							<Button className="w-full bg-green-500 hover:bg-green-400">
								<FontAwesomeIcon icon={faArrowUp} />
							</Button>
							<Button className="w-full bg-red-500 hover:bg-red-400">
								<FontAwesomeIcon icon={faArrowDown} />
							</Button>
						</li>
					)}
				</ul>
			</div>
		</figure>
	);
}

export default ToolCard;
