import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Number from "../../components/number";
import Filter from "../../components/filter/filter";
import NftRow from "../../components/table/nftRow";
import Table from "../../components/table/table";
import { loadCollection } from "../../lib/collections";
import FilterList from "../../components/filter/filterList";
import { NftContextType } from "../../components/filter/providers/types";
import { NftProvider } from "../../components/filter/providers/nftFilters";
import LoadingNftRow from "../../components/table/loading/loadingNftRow";

const Collection: NextPage = () => {
	const router = useRouter();
	const { slug }: any = router.query;

	const [collection, setCollection]: any = useState();
	useEffect(() => {
		if (!slug) return;
		loadCollection(slug).then((collectionData) => {
			setCollection(collectionData);
			console.log(collectionData);
		});
	}, [slug]);

	const columns = [
		"",
		"Name",
		"Rank",
		"Price",
		"Last sold",
		"Attributes",
	];

	return (
		<NftProvider>
			<div className="h-full pt-14 flex">
				<Filter collection={collection} />

				{/* Page title starts */}
				<div className="overflow-hidden w-full">
					<div className="bg-gray-800  relative z-10 h-1/6 flex flex-col justify-between">
						<div className="container px-6 mx-auto flex flex-col lg:flex-row lg:items-center justify-between flex-1">
							<div className="flex-col flex lg:flex-row items-start lg:items-center">
								<div className="flex items-center">
									{collection && (
										<>
											<img
												className="border shadow border-gray-600 rounded-full mr-3 h-16 w-16"
												src={collection.imageUrl}
												alt="logo"
											/>
											<div>
												<h5 className="text-sm text-white leading-4 mb-1">
													{collection.name}
												</h5>
												<p className="text-xs text-gray-400 leading-4">
													Suply:{" "}
													<Number
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
									Edit Collection
								</button>
							</div>
						</div>
						<FilterList />
					</div>
					{/* Page title ends */}
					<div className="flex bg-white w-full h-5/6">
						<Table columns={columns} title={null}>
							{collection?.nfts &&
								collection.nfts.map((nft) => {
									return <NftRow nft={nft} collection={collection} />;
								})}
								
							{(!collection || !collection?.nfts) &&
								[...Array(15)].map(() => <LoadingNftRow />)}
						</Table>
					</div>
				</div>
			</div>
		</NftProvider>
	);
};

export default Collection;
