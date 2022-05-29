import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FilterOption = ({ icon = null, children }) => {
	return (
		<div className="flex text-sm items-left gap-3 w-full mr-4">
			{icon && (
				<div className="">
					<FontAwesomeIcon icon={icon} />
				</div>
			)}
			<p className="w-full text-left">{children}</p>
		</div>
	);
};

export default FilterOption;
