import React, { useEffect, useState } from "react";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { Collection } from "@sniper-monkey/types/build";
import { loadCollections } from "../../lib/collections";
import Image from "next/image";
import CollectionRow from "./row";

const Table = () => {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		loadCollections().then((collections) => {
			setCollections(collections);
		});
	}, []);
	console.log(collections);
	return (
		<>
			<div className="w-full sm:px-6">
				<div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
					<div className="sm:flex items-center justify-between">
						<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
							Collections
						</p>
						<div>
							{/* <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
								<p className="text-sm font-medium leading-none text-white">
									New Project
								</p>
							</button> */}
						</div>
					</div>
				</div>
				<div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5">
					<div className="overflow-y-auto">
						<table className="w-full whitespace-nowrap">
							<thead>
								<tr className="h-16 w-full text-sm leading-none text-gray-800">
									<th className="font-normal text-left pl-4 left-0 sticky bg-white"></th>
									<th className="font-normal text-left pl-16"></th>
									<th className="font-normal text-left pl-16">Status</th>
									<th className="font-normal text-right pl-12">Floor</th>
									<th className="font-normal text-right pl-12">24h</th>
									<th className="font-normal text-right pl-12">7d</th>
									<th className="font-normal text-right pl-12">1m</th>
									<th className="font-normal text-right pl-12">
										Volume 24h | 7d | 1m
									</th>
									<th className="font-normal text-left pl-12">24h</th>
									<th className="font-normal text-left pl-12">7d</th>
									<th className="font-normal text-left pl-12">1m</th>
								</tr>
							</thead>
							<tbody className="w-full">
								{collections.map((collection: Collection) => {
									return <CollectionRow collection={collection} />;
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Table;
