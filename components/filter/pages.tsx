import {
	faAngleLeft,
	faAngleRight,
	faAnglesLeft,
	faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterSelect from "./comps/dropdown";
import FilterOption from "./comps/option";

export const Pages = ({ page, max }) => {
	return (
		<div className="p-5 w-full border-b border-gray-900 bg-gray-800 justify-between font-semibold text-xl shadow-md">
			<p className="mb-4">Page</p>

			<ul className="flex justify-around w-full items-center bg-gray-600 rounded-md font-normal text-base">
				<li className="cursor-pointer">
					<button className="px-2 border border-gray-800 hover:bg-gray-700 rounded-md">
						1
					</button>
				</li>
				<li className="cursor-pointer">
					<FontAwesomeIcon size="xs" icon={faAnglesLeft} />
				</li>
				<li className="cursor-pointer">
					<FontAwesomeIcon size="xs" icon={faAngleLeft} />
				</li>
				<li>
					<input
						type="number"
						className="bg-gray-800 rounded-md px-1  w-10 text-center border border-gray-900 outline-none my-2 focus:border-indigo-700"
						placeholder={page}
						min={1}
						max={max}
					/>
				</li>
				<li className="cursor-pointer">
					<FontAwesomeIcon size="xs" icon={faAngleRight} />
				</li>
				<li className="cursor-pointer ">
					<FontAwesomeIcon size="xs" icon={faAnglesRight} />
				</li>
				<li className="cursor-pointer">
					<button className="px-2 border border-gray-800 hover:bg-gray-700 rounded-md">
						22
					</button>
				</li>
			</ul>
		</div>
	);
};

export const SmallPages = ({ page, max }) => {
	return (
		<div className="p-2 w-full border-b border-gray-900 bg-gray-800 justify-between font-semibold text-xl shadow-md">
			<p className="mb-4">Page</p>

			<ul className="flex justify-around w-full items-center bg-gray-600 rounded-md font-normal text-base">
				<li className="cursor-pointer">
					<button className="px-2 border border-gray-800 hover:bg-gray-700 rounded-md">
						1
					</button>
				</li>
				<li className="cursor-pointer">
					<FontAwesomeIcon icon={faAngleLeft} />
				</li>
				<li>
					<input
						type="number"
						className="bg-gray-800 rounded-md px-1  w-10 text-center border border-gray-900 outline-none my-2 focus:border-indigo-700"
						placeholder={page}
						min={1}
						max={max}
					/>
				</li>
				<li className="cursor-pointer">
					<FontAwesomeIcon icon={faAngleRight} />
				</li>
				<li className="cursor-pointer">
					<button className="px-2 border border-gray-800 hover:bg-gray-700 rounded-md">
						22
					</button>
				</li>
			</ul>
		</div>
	);
};
