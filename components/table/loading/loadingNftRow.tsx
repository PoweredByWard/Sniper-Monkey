import { Collection, Nft } from "@sniper-monkey/types/build";
import Image from "next/image";
import { Tag } from "../tag";

const LoadingNftRow = () => {
	const nameWidth = Math.random() * 50 + 100;
	const priceWidth = Math.random() * 20 + 50;
	const lastSoldWidth = Math.random() * 20 + 50;

	const amountOfAttributes = Math.round(Math.random() * 5 + 1);
	const attributes = [];
	for (let i = 0; i < amountOfAttributes; i++) {
		const attributeWidth = Math.random() * 50 + 100;
		attributes.push(
			<div
				key={i}
				style={{ width: attributeWidth + "px" }}
				className="bg-gray-500 h-5 rounded-md"
			></div>
		);
	}

	return (
		<tr className="h-12 text-sm text-gray-80 hover:bg-gray-600 border-b border-t border-gray-900 align-middle">
			<td className="px-4 cursor-pointer left-0 sticky">
				<div className="rounded-md h-10 w-10 bg-gray-500"></div>
			</td>
			<td className="px-4 cursor-pointer">
				<div
					style={{ width: nameWidth + "px" }}
					className="bg-gray-500 h-4 rounded-sm"
				></div>
			</td>
			<td className="px-4 cursor-pointer">
				<div className="flex">
					<div className="bg-gray-500 font-medium h-6 w-12 text-orange-100 py-1 px-2 rounded-md mx-1 flex"></div>
				</div>
			</td>
			<td className="px-4 cursor-pointer">
				<div className="flex items-center gap-2">
					<div className="bg-gray-500 h-4 w-4 rounded-sm"></div>
					<div
						style={{ width: priceWidth + "px" }}
						className="bg-gray-500 h-5 rounded-sm"
					></div>
				</div>
			</td>
			<td className="px-4 cursor-pointer">
				<div className="flex items-center gap-2">
					<div className="bg-gray-500 h-4 w-4 rounded-sm"></div>
					<div
						style={{ width: lastSoldWidth + "px" }}
						className="bg-gray-500 h-5 rounded-sm"
					></div>
				</div>
				{/* <div
					style={{ width: lastSoldWidth + "px" }}
					className="bg-gray-500 h-5 rounded-sm"
				></div> */}
			</td>

			<td className="h-full items-center">
				<div className="flex gap-2">
					{[...Array(4)].map(() => (
						<div
							style={{ width: Math.random() * 50 + 100 + "px" }}
							className="bg-gray-500 h-5 rounded-md"
						></div>
					))}
				</div>
			</td>
		</tr>
	);
};

export default LoadingNftRow;
