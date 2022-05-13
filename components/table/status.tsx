import { Status } from "@sniper-monkey/types/build";
import Image from "next/image";
import React from "react";
import EthIcon from "../ethIcon";
import Number from "../number";

interface StatusProps {
	status: Status;
}

const Status = ({ status }: StatusProps) => {
	if (status === "Revealed") {
		return (
			<span className="bg-green-600 font-medium text-green-100 py-1 px-2 rounded-md max-w">
				{status}
			</span>
		);
	} else if (status === "Unrevealed") {
		return (
			<span className="bg-red-600 font-medium text-red-100 py-1 px-2 rounded-md">
				{status}
			</span>)
	} else {
		return (
			<span className="bg-purple-600 font-medium text-purple-100 py-1 px-2 rounded-md">
				{status}
			</span>
		)
	}
};

export default Status;
