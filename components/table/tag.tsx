import Image from "next/image";
import React from "react";
import EthIcon from "../ethIcon";
import Number from "../number";

interface TagProps {
	children: JSX.Element | JSX.Element[] | string;
}

interface LimitTagProps {
	number: number;
	limits: Limits;
	children: JSX.Element | JSX.Element[] | string;
}

type Limit = {
	start?: number;
	end?: number;
};

type Limits = {
	orange: Limit;
	green: Limit;
};

export const Tag = ({ children }: TagProps) => {
	return (
		<span className="bg-indigo-600 font-medium text-indigo-100 py-1 px-2 rounded-md mx-1 flex gap-2">
			{children}
		</span>
	);
};

export const LimitTag = ({ number, limits, children }: LimitTagProps) => {
	if (limits.green.start <= number && number <= limits.green.end) {
		return (
			<span className="bg-green-600 font-medium text-green-100 py-1 px-2 rounded-md mx-1 flex">
				{children}
				<Number number={Math.round(number)} numberType={"dots"} />
			</span>
		);
	} else if (limits.orange.start <= number && number <= limits.orange.end) {
		return (
			<span className="bg-orange-600 font-medium text-orange-100 py-1 px-2 rounded-md mx-1 flex">
				{children}
				<Number number={Math.round(number)} numberType={"dots"} />
			</span>
		);
	} else {
		return (
			<span className="bg-red-600 font-medium text-red-100 py-1 px-2 rounded-md mx-1 flex">
				{children}
				<Number number={Math.round(number)} numberType={"dots"} />
			</span>
		);
	}
};
