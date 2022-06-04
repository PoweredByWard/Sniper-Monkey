import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Nav from "../../components/navigations/navigation";
import Tabs from "../../components/navigations/tabs";
import Table from "../../components/table/table";
import { loadCollections } from "../../lib/collections";

import { Collection } from "@sniper-monkey/types/build";
import CollectionRow from "../../components/table/row";

const Index: NextPage = () => {
	const [collections, setCollections] = useState([]);

	useEffect(() => {
		loadCollections().then((collections) => {
			setCollections(collections);
		});
	}, []);

	const columns = [
		,"",
		,"",
		,"Status",
		,"Floor",
		,"24h",
		,"7d",
		,"1m",
		,"Volume 24h | 7d | 1m",
		,"24h",
		,"7d",
		,"1m",
	];
	return (
		<>
			<div>
				{/* Page title starts */}
				<div className="bg-gray-200 w-full">
					<div className="container px-6 py-6 sm:py-0 mx-auto">
						<Tabs />
					</div>
				</div>
				{/* Page title ends */}
				{/* Remove class [ h-64 ] when adding a card block */}
				<div className="container mx-auto px-6 mt-10 h-64">
					<div className="w-full h-full rounded ">
						<Table columns={columns}>
							{collections.map((collection: Collection) => {
								return <CollectionRow collection={collection} />;
							})}
						</Table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
