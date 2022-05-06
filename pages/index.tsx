import React, { useState } from "react";
import type { NextPage } from "next";
import Nav from "../components/navigations/navigation";
import Tabs from "../components/navigations/tabs";
import Table from "../components/table/table";
const Index: NextPage = () => {
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
						<Table />
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;