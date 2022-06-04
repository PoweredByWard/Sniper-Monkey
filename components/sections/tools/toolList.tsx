import Button from "../../filter/comps/button";
// import b1 from "../../public/b1.jpg";
import Link from "next/link";
import Image from "next/image";
import ToolCard from "./card";
import { tools } from "./config";

function ToolList() {
	return (
		<section className="relative h-full w-full mt-12">
			<Title />
			{tools.map((toolType) => (
				<ToolRow title={toolType.name}>
					{toolType.tools.map((tool) => (
						<ToolCard tool={tool} />
					))}
				</ToolRow>
			))}
			{/* <ToolRow title="Sniping">
				<ToolCard></ToolCard>
			</ToolRow>
			<ToolRow title="Minting">
				<ToolCard></ToolCard>
			</ToolRow> */}
		</section>
	);
}

function ToolRow({ children, title }) {
	return (
		<section className="pl-10 pb-8">
			<h3 className="font-medium text-3xl text-white mb-2">{title}:</h3>
			<div className="flex gap-4">{children}</div>
		</section>
	);
}

function Title() {
	return (
		<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
			<div>
				<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-indigo-900 uppercase rounded-full bg-indigo-400">
					Tools
				</p>
			</div>
			<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
				<span className="relative inline-block">
					<svg
						viewBox="0 0 52 24"
						fill="currentColor"
						className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
					>
						<defs>
							<pattern
								id="bc9273ce-29bb-4565-959b-714607d4d027"
								x="0"
								y="0"
								width=".135"
								height=".30"
							>
								<circle cx="1" cy="1" r=".7" />
							</pattern>
						</defs>
						<rect
							fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
							width="52"
							height="24"
						/>
					</svg>
					<span className="relative">Choose</span>
				</span>{" "}
				between one of our tools.
			</h2>
			<p className="text-base text-gray-200 md:text-lg">
				Don't find the tool you need?{" "}
				<Link href="">
					<span className="text-indigo-400 hover:underline cursor-pointer">
						Suggest it
					</span>
				</Link>{" "}
				in our discord.
			</p>
		</div>
	);
}

export default ToolList;
