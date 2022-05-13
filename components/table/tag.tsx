import Image from "next/image";
import React from "react";
import EthIcon from "../ethIcon";
import Number from "../number";

interface TagProps {
	number: number;
	limits: Limits;
}

type Limits = {
	orange: number;
	green: number;
};

const Tag = ({ number, limits }: TagProps) => {
	if (number >= limits.green) {
		return (
			<span className="bg-green-600 font-medium text-green-100 py-1 px-2 rounded-md mx-1 flex">
				<EthIcon />
				<Number number={Math.round(number)} numberType={"dots"} />
			</span>
		);
	} else if (number >= limits.orange) {
		return (
			<span className="bg-orange-600 font-medium text-orange-100 py-1 px-2 rounded-md mx-1 flex">
                                <EthIcon />
				<Number number={Math.round(number)} numberType={"dots"} />
			</span>
		);
	} else {
		return (
			<span className="bg-red-600 font-medium text-red-100 py-1 px-2 rounded-md mx-1 flex">
                                <EthIcon />
				<Number number={Math.round(number)} numberType={"dots"} />
			</span>
		);
	}
};

export default Tag;
