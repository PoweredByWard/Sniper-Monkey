import type { NextPage } from "next";

const Tabs: NextPage = () => {
	return (
		<>
			<div className="sm:hidden bg-white w-full relative">
				<div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-selector"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#A0AEC0"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<polyline points="8 9 12 5 16 9" />
						<polyline points="16 15 12 19 8 15" />
					</svg>
				</div>
				<select
					aria-label="Selected tab"
					className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
				>
					<option selected className="text-sm text-gray-600">
						All{" "}
					</option>
					<option className="text-sm text-gray-600">Revealed </option>
					<option className="text-sm text-gray-600">Unrevealed </option>
					<option className="text-sm text-gray-600">Revealing </option>
				</select>
			</div>
			<ul className="hidden sm:flex flex-row pt-8">
				<li className="rounded-t w-32 h-12 flex items-center justify-center bg-white text-sm text-gray-800">
					All
				</li>
				<li className="rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 mx-1 text-sm text-gray-800">
					Revealed
				</li>
				<li className="rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 mr-1 text-sm text-gray-800">
					Unrevealed
				</li>
				<li className="rounded-t w-32 h-12 flex items-center justify-center bg-gray-300 text-sm text-gray-800">
					Revealing
				</li>
			</ul>
		</>
	);
};
export default Tabs;