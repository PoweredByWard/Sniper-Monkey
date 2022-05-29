import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FilterTogle = ({ children, onClick = null, active }) => {
	return (
		<>
			{!active && (
				<button
					onClick={onClick}
					
					className="w-full border border-gray-800 hover:bg-gray-600 bg-gray-700 rounded-md p-2 flex justify-between items-center"
				>
					{children}
					<div className="h-6 w-6 bg-gray-300 rounded-md border-2 border-gray-800"></div>
				</button>
			)}
			{active && (
				<button
					onClick={onClick}
					className="w-full border border-gray-800 bg-indigo-700 hover:bg-indigo-600 rounded-md p-2 flex justify-between"
				>
					{children}
					<div className="h-6 w-6 bg-indigo-700 rounded-md border-2 border-gray-800">
						<FontAwesomeIcon icon={faCheck} />
					</div>
				</button>
			)}
		</>
	);
};

export default FilterTogle;
