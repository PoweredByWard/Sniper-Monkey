import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Number from "../../components/number";
import { loadCollection } from "../../lib/collections";

const Collection: NextPage = () => {
	const router = useRouter();
	const { slug }: any = router.query;

	const [collection, setCollection]: any = useState();
	useEffect(() => {
		if (!slug) return;
		loadCollection(slug).then((collectionData) => {
			setCollection(collectionData);
		});
	}, [slug]);
	return (
		<>
			<div className="bg-gray-200 pb-10">
				{/* Page title starts */}
				<div className="bg-gray-800 pt-8 pb-16 relative z-10">
					<div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
						<div className="flex-col flex lg:flex-row items-start lg:items-center">
							<div className="flex items-center">
								{collection && (
									<>
										<img
											className="border-2 shadow border-gray-600 rounded-full mr-3 h-16 w-16"
											src={collection.imageUrl}
											alt="logo"
										/>

										<div>
											<h5 className="text-sm text-white leading-4 mb-1">
												{collection.name}
											</h5>
											<p className="text-xs text-gray-400 leading-4">
												Suply: <Number
													number={collection.amount}
													numberType={"dots"}
												/>
											</p>
										</div>
									</>
								)}
							</div>
							{/* <div className="ml-0 lg:ml-20 my-6 lg:my-0">
								<h4 className="text-2xl font-bold leading-tight text-white mb-2">
									Dashboard
								</h4>
								<p className="flex items-center text-gray-300 text-xs">
									<span>Portal</span>
									<span className="mx-2">&gt;</span>
									<span>Dashboard</span>
									<span className="mx-2">&gt;</span>
									<span>KPIs</span>
								</p>
							</div> */}
						</div>
						<div>
							<a
								href="/"
								className="cursor-pointer focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white"
							>
								Back
							</a>
							<button className="focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">
								Edit Profile
							</button>
						</div>
					</div>
				</div>
				{/* Page title ends */}
				<div className="container px-6 mx-auto">
					{/* Remove class [ h-64 ] when adding a card block */}
					<div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-64">
						{/* Place your content here */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Collection;
