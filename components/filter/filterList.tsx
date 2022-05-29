import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import EthIcon from "../ethIcon";
import { Tag } from "../table/tag";
import { NftContext } from "./providers/nftFilters";
import {
	NftContextType,
	NftFilters,
	NftStatus,
	TraitElement,
} from "./providers/types";

const FilterList = () => {
	const filter: NftContextType = useContext(NftContext);
	const status = filter.state.filters.status;
	const rank = filter.state.filters.rank;
	const properties = filter.state.filters.properties;
	return (
		<div className="w-full items-center px-2 h-10 whitespace-nowrap text-white bg-gray-900 flex">
			<h3 className="mr-1 font-medium mb-1">Active filters:</h3>
			<div className="flex overflow-x-scroll scrollbar-thin">
				{status.length <= 1 && (
					<FilterListItem type="status">
						Status: {status[0] ? status[0] : "None"}
					</FilterListItem>
				)}
				{rank && (
					<FilterListItem type="rank">
						Rank: {rank.min}-{rank.max}
					</FilterListItem>
				)}
				{properties &&
					properties.map((trait: TraitElement) => (
						<AttibuteListItem trait={trait} />
					))}
			</div>
		</div>
	);
};

const FilterListItem = ({ children, type }) => {
	const filter: NftContextType = useContext(NftContext);
	return (
		<button onClick={() => filter.updateFunctions.removeFilter(type)}>
			<Tag>
				<div className="flex gap-2 hover:text-red-600 cursor-pointer items-center font-semibold">
					<p className="flex items-center gap-2 text-white">{children}</p>
					<FontAwesomeIcon icon={faClose} />
				</div>
			</Tag>
		</button>
	);
};

interface AttibuteListItemProps {
	trait: TraitElement;
}

const AttibuteListItem = ({ trait }) => {
	const filter: NftContextType = useContext(NftContext);
	console.log(trait);
	return (
		<button onClick={() => filter.updateFunctions.removePropertyFilter(trait)}>
			<Tag>
				<div className="flex gap-2 hover:text-red-600 cursor-pointer items-center font-semibold">
					<p className="flex items-center gap-2 text-white">
						{trait.property}: {trait.attribute}
					</p>
					<FontAwesomeIcon icon={faClose} />
				</div>
			</Tag>
		</button>
	);
};

export default FilterList;
