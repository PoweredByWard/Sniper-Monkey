import React from "react";

interface ChangeProps {
	number: number;
}

const Change = ({ number }: ChangeProps) => {
	if (number >= 0) {
		return (
			<div className="font-medium flex justify-end text-green-600">
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g>
						<path fill="none" d="M0 0h24v24H0z"></path>
						<path d="M12 8l6 6H6z"></path>
					</g>
				</svg>
				{number.toFixed(2)}%
			</div>
		);
	} else {
		return (
			<div className="font-medium flex justify-end text-red-600">
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g>
						<path fill="none" d="M0 0h24v24H0z"></path>
						<path d="M12 16l-6-6h12z"></path>
					</g>
				</svg>
				{number.toFixed(2)}%
			</div>
		);
	}
};

export default Change;
