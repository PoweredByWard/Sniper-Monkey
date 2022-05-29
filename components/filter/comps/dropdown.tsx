import {
	faAngleDown,
	faAngleUp,
	faArrowUp,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface FilterSelectProps {
	children: React.ReactNode | React.ReactNode[];
	callback: void;
	placeholder: string;
}

const FilterSelect = ({ children, callback, placeholder = null }) => {
	const icons = {
		open: faAngleUp,
		closed: faAngleDown,
	};
	const [icon, setIcon] = useState(icons["closed"]);
	function togleOpen() {
		if (open) {
			setIcon(icons["closed"]);
		} else {
			setIcon(icons["open"]);
		}
		setOpen(!open);
	}

	function changeChoice(index: number) {
		setChoice(index);
		togleOpen();
	}

	let initialChoice = null;
	if(!placeholder) {
		initialChoice = 0;
		callback(0);
	}

	const [choice, setChoice] = useState(initialChoice);
	const [open, setOpen] = useState(false);
	return (
		<div className="relative">
			<button
				onClick={() => togleOpen()}
				className="bg-gray-800 border border-gray-900 focus:border-indigo-700 rounded-md w-full p-2"
			>
				<div className="flex justify-between items-center">
					{placeholder && choice === null && <p className="text-sm">{placeholder}</p>}
					{choice !== null &&
						children.map((child, index) => {
							if (index === choice) {
								return child;
							}
						})}
					<FontAwesomeIcon icon={icon} />
				</div>
			</button>
			{open && (
				<div className="absolute bg-gray-800 w-full mt-1 border border-gray-900 rounded-md">
					<div className="p-1 max-h-36 overflow-auto scrollbar-thin scrollbar-thumb-gray-900">
						{placeholder && (
							<FilterSelectButton
								onClick={() => {
									changeChoice(null);
									callback(null);
								}}
								choice={choice}
								index={null}
							>
								<p className="text-left text-sm">{placeholder}</p>
							</FilterSelectButton>
						)}
						{children.map((child, index) => {
							return (
								<FilterSelectButton
									onClick={() => {
										changeChoice(index);
										callback(child.key);
									}}
									choice={choice}
									index={index}
								>
									{child}
								</FilterSelectButton>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

const FilterSelectButton = ({ onClick, index, choice, children }) => {
	return (
		<button
			onClick={onClick}
			className=" p-1.5 hover:bg-indigo-700 w-full rounded-sm"
		>
			{index === choice && (
				<div className="font-semibold flex justify-between gap-0.5  items-center">
					{children}
					<FontAwesomeIcon icon={faCheck} />{" "}
				</div>
			)}
			{index !== choice && <div className="mr-8">{children}</div>}
		</button>
	);
};

export default FilterSelect;
