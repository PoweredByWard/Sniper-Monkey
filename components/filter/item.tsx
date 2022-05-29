import {
	faAngleDown,
	faAngleUp,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FilterItem = ({ text, children }) => {
	const icons = {
		open: faAngleUp,
		closed: faAngleDown,
	};

	const [open, setOpen] = useState(false);
	const [icon, setIcon] = useState(icons["closed"]);
	function togleOpen() {
                if (open) {
                        setIcon(icons["closed"]);
		} else {
                        setIcon(icons["open"]);
		}
                setOpen(!open);
	}
	return (
		<li>
			<button
				onClick={() => {
					togleOpen();
				}}
				className="p-5 w-full border-b border-gray-900 bg-gray-800 justify-between flex items-center font-semibold text-xl text-center shadow-md"
			>
				<p>{text}</p>
				<FontAwesomeIcon icon={icon} />
			</button>
			{open && <div className="p-4 border-b border-gray-900">{children}</div>}
		</li>
	);
};

export default FilterItem;
