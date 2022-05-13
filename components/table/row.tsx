import Image from "next/image";
import React, { useState } from "react";
import { Collection } from "@sniper-monkey/types/build";
import Change from "./change";
import Tag from "./tag";
import Number from "../number";
import EthIcon from "../ethIcon";
import Status from "./status";
import Link from "next/link";

interface TableItemProps {
	collection: Collection;
}

const CollectionRow = ({ collection }: TableItemProps) => {
	const [show, setShow] = useState(null);
	const floor_change_24h =
		((collection.floor - collection.avg_floor_24h) / collection.floor) * 100;
	const floor_change_7d =
		((collection.floor - collection.avg_floor_7d) / collection.floor) * 100;
	const floor_change_1m =
		((collection.floor - collection.avg_floor_1m) / collection.floor) * 100;
	return (
		<tr className="h-12 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
			<td className="px-4 cursor-pointer left-0 sticky bg-white">
				<Link href={`collection/${collection.slug}`}>
					<div className="w-10 h-10">
						<Image
							className="rounded-md"
							height={50}
							width={50}
							src={collection.imageUrl}
						/>
					</div>
				</Link>
			</td>
			<td className="cursor-pointer">
				<Link href={`collection/${collection.slug}`}>
					<div className="pl-4">
						<p className="font-medium">{collection.name}</p>
						<p className="text-xs leading-3 text-gray-600 pt-2">
							Supply: <Number number={collection.amount} numberType={"dots"} />
						</p>
					</div>
				</Link>
			</td>

			<td className="pl-16">
				<Status status={collection.status} />
			</td>
			<td className="pl-12 text-right">
				<p className="font-medium flex text-gray-700">
					<EthIcon />
					{collection.floor}
				</p>
			</td>
			<td className="pl-12">
				<Change number={floor_change_24h} />
			</td>
			<td className="pl-12">
				<p className="font-medium">
					<Change number={floor_change_7d} />
				</p>
			</td>
			<td className="pl-12">
				<p className="font-medium">
					<Change number={floor_change_1m} />
				</p>
			</td>
			<td>
				<div className="text-right flex justify-end">
					<Tag
						number={collection.avg_volume_24h}
						limits={{ green: 30, orange: 5 }}
					/>
					<Tag
						number={collection.avg_volume_7d}
						limits={{ green: 210, orange: 35 }}
					/>
					<Tag
						number={collection.avg_volume_1m}
						limits={{ green: 900, orange: 150 }}
					/>
				</div>
			</td>
			<td className="pl-12">
				<Change number={collection.avg_volume_change_24h} />
			</td>
			<td className="pl-12">
				<Change number={collection.avg_volume_change_7d} />
			</td>
			<td className="pl-12">
				<Change number={collection.avg_volume_change_1m} />
			</td>
			{/* <td className="pl-12">
				<p className="font-medium">32/47</p>
				<p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
			</td>
			<td className="pl-20">
				<p className="font-medium">$13,000</p>
				<p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
			</td> */}
			{/* <td className="pl-20">
				<p className="font-medium">22.12.21</p>
				<p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
			</td> */}
			<td className="px-7 2xl:px-0">
				{show == 0 ? (
					<button
						onClick={() => setShow(null)}
						className="focus:outline-none pl-7"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={20}
							height={20}
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
								stroke="#A1A1AA"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
								stroke="#A1A1AA"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
								stroke="#A1A1AA"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				) : (
					<button
						onClick={() => setShow(0)}
						className="focus:outline-none pl-7"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={20}
							height={20}
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
								stroke="#A1A1AA"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
								stroke="#A1A1AA"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
								stroke="#A1A1AA"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				)}
				{show == 0 && (
					<div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
						<div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
							<p>Edit</p>
						</div>
						<div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
							<p>Delete</p>
						</div>
					</div>
				)}
			</td>
		</tr>
	);
};

export default CollectionRow;
