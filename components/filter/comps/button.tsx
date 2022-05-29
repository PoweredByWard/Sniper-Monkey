import { useState } from "react";

const FilterButton = ({ children, onClick = null }) => {
	return (
		<button
			onClick={onClick}
			className="bg-indigo-700 p-2 rounded-md hover:bg-indigo-600 px-5 font-semibold"
		>
			{children}
		</button>
	);
};

export default FilterButton;
