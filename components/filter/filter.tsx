import FilterTogle from "./comps/togleButton";
import FilterItem from "./item";
import FilterInput from "./comps/textInput";
import FilterButton from "./comps/button";
import FilterSelect from "./comps/dropdown";
import FilterOption from "./comps/option";
import {
	faAngleRight,
	faAnglesLeft,
	faAnglesRight,
	faBars,
	faClose,
	faUsd,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Collection } from "@sniper-monkey/types/build";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { Pages, SmallPages } from "./pages";
import { NftContextType, NftStatus, TraitElement } from "./providers/types";
import { NftContext } from "./providers/nftFilters";

interface FilterProps {
	collection: Collection;
}

const Filter = ({ collection }) => {
	const [open, setOpened] = useState(true);
	const [attributes, setAttributes] = useState([]);
	const [property, setProperty] = useState(null);
	const [attributeSearch, setAttributeSearch] = useState("");

	const NftContextData: NftContextType = useContext(NftContext);
	const { state } = NftContextData;
	const filters = state.filters;

	const rankingMin = useRef<HTMLInputElement>(null);
	const rankingMax = useRef<HTMLInputElement>(null);
	useEffect(() => {
		console.log("rankingMin", rankingMin);
		console.log("rankingMax", rankingMax);
	}, []);

	const updateStatus = (status: NftStatus) => {
		let newStatus = filters.status;

		if (newStatus.includes(status)) {
			newStatus = newStatus.filter((item) => item !== status);
		} else {
			newStatus = [...newStatus, status];
		}

		NftContextData.updateFunctions.toggleStatusFilter(newStatus);
	};

	return (
		<div className="bg-gray-700 text-white border border-gray-900 flex flex-col justify-between">
			{open && (
				<>
					<h2 className="text-center p-4 font-semibold text-2xl bg-gray-700 border-y border-gray-900 flex items-center justify-between">
						<p>Filters</p>
						<button onClick={() => setOpened(false)}>
							<FontAwesomeIcon size="sm" icon={faAnglesLeft} />
						</button>
					</h2>
					<ul className="w-96 sticky top-0 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800 flex-1">
						<FilterItem text="Status">
							<div className="grid grid-cols-2 gap-4">
								<FilterTogle
									active={filters.status.includes("For sale")}
									onClick={() => {
										updateStatus("For sale");
									}}
								>
									For sale
								</FilterTogle>
								<FilterTogle
									active={filters.status.includes("Not for sale")}
									onClick={() => {
										updateStatus("Not for sale");
									}}
								>
									Not for sale
								</FilterTogle>
							</div>
						</FilterItem>
						<FilterItem text="Ranking">
							<p className="text-lg font-medium mb-3">Shortcuts</p>
							<div className="flex justify-between mb-5">
								<FilterButton
									onClick={() =>
										NftContextData.updateFunctions.setRankFilter({
											min: 1,
											max: Math.floor(collection.amount / 100),
										})
									}
								>
									Top 1%
								</FilterButton>
								<FilterButton
									onClick={() =>
										NftContextData.updateFunctions.setRankFilter({
											min: 1,
											max: Math.floor(collection.amount / 20),
										})
									}
								>
									Top 5%
								</FilterButton>
								<FilterButton
									onClick={() =>
										NftContextData.updateFunctions.setRankFilter({
											min: 1,
											max: Math.floor(collection.amount / 10),
										})
									}
								>
									Top 10%
								</FilterButton>
							</div>
							<p className="text-lg font-medium  mb-3">Input</p>
							<div className="grid grid-cols-2 gap-4 my-2">
								<FilterInput
									ref={rankingMin}
									type={"number"}
									placeholder={"min"}
								/>
								<FilterInput
									ref={rankingMax}
									type={"number"}
									placeholder={"max"}
								/>
							</div>
							<FilterButton
								onClick={() => {
									let min = Number(rankingMin.current.value);
									let max = Number(rankingMax.current.value);
									if (min <= 0) {
										min = 1;
									}
									if (max === 0 || max > collection.amount) {
										max = collection.amount;
									}
									if (min > max) {
										min = 0;
									}
									if (min != 1 || max != collection.amount) {
										rankingMin.current.value = String(min);
										rankingMax.current.value = String(max);
										NftContextData.updateFunctions.setRankFilter({
											min: min,
											max: max,
										});
									} else {
										rankingMin.current.value = "";
										rankingMax.current.value = "";
										NftContextData.updateFunctions.removeFilter("rank");
									}
								}}
							>
								Apply
							</FilterButton>
						</FilterItem>
						<FilterItem text="Price">
							<FilterSelect callback={() => {}}>
								<FilterOption icon={faUsd}>USD</FilterOption>
								<FilterOption icon={faEthereum}>ETH</FilterOption>
							</FilterSelect>
							<div className="grid grid-cols-2 gap-4 my-2 mb-4">
								<FilterInput type="number" placeholder="min" />
								<FilterInput type="number" placeholder="max" />
							</div>
							<FilterButton>Apply</FilterButton>
						</FilterItem>
						<FilterItem text="Properties">
							{collection && (
								<FilterSelect
									placeholder="(Select a property)"
									callback={(value) => {
										console.log("value", value);
										const property = collection.properties
											.filter((p) => p.name === value)
											.shift();
										

										setProperty(property?.name);
										setAttributes(property?.attributes);
									}}
								>
									{collection.properties.map((property) => {
										return (
											<FilterOption key={property.name}>
												<div className="flex justify-between w-full">
													<p>{property.name}</p>
													<p>({property.attributes.length})</p>
												</div>
											</FilterOption>
										);
									})}
								</FilterSelect>
							)}
							{property && (
								<>
									<h4 className="font-medium mt-3">Attributes</h4>
									<div className="mb-2 mt-3 w-full">
										<FilterInput
											type="text"
											onChange={(e) => {
												setAttributeSearch(e.target.value);
											}}
											placeholder="Search attribute..."
										/>
									</div>
									<div className="max-h-56 scrollbar-thin scrollbar-thumb-gray-900 flex flex-col bg-gray-800 p-2 rounded-sm gap-2 overflow-y-scroll">
										{attributes.map((attribute) => {
											const trait: TraitElement = {
												property: property,
												attribute: attribute.value,
											};

											const hasTrait =
												NftContextData.state.filters.properties.find(
													(property) =>
														property.property === trait.property &&
														property.attribute === trait.attribute
												);

												if(!attribute.value.toLowerCase().includes(attributeSearch.toLowerCase())){
													return null;
												}
											return (
												<FilterTogle
													active={hasTrait}
													onClick={() => {
														console.log(
															"filters.properties",
															filters.properties
														);
														console.log("filters.properties", trait);
														if (hasTrait) {
															NftContextData.updateFunctions.removePropertyFilter(
																trait
															);
														} else {
															NftContextData.updateFunctions.addPropertyFilter(
																trait
															);
														}
														console.log("filters", filters);
													}}
												>
													<div className="flex justify-between w-full mr-2">
														<span>{attribute.value}</span>
														<span>({attribute._count.nfts})</span>
													</div>
												</FilterTogle>
											);
										})}
									</div>
								</>
							)}
						</FilterItem>
					</ul>
					<Pages page={1} max={22} />
				</>
			)}

			{/* {!open && (
				<>
					<h2 className="text-center p-4 font-semibold text-2xl bg-gray-700 border-y border-gray-900 flex items-center justify-between">
						<p>Filters</p>
						<button onClick={() => setOpened(true)}>
							<FontAwesomeIcon icon={faAnglesRight} />
						</button>
					</h2>
					<ul className="w-44 sticky top-0 overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800 flex-1">
						<FilterItem text="Status">
							<div className="flex flex-col gap-2">
								<FilterTogle>Buy now</FilterTogle>
								<FilterTogle>Buy now</FilterTogle>
								<FilterTogle>Buy now</FilterTogle>
							</div>
						</FilterItem>
						<FilterItem text="Ranking">
							<p className="text-lg font-medium mb-3">Shortcuts</p>
							<div className="flex flex-col gap-2 mb-5">
								<FilterButton>Top 1%</FilterButton>
								<FilterButton>Top 5%</FilterButton>
								<FilterButton>Top 10%</FilterButton>
							</div>
							<p className="text-lg font-medium mb-3">Input</p>
							<div className="flex flex-col gap-2 mb-4">
								<FilterInput type="number" placeholder="min" />
								<FilterInput type="number" placeholder="max" />
							</div>
							<FilterButton>Apply</FilterButton>
						</FilterItem>
						<FilterItem text="Price">
							<FilterSelect>
								<FilterOption icon={faUsd}>USD</FilterOption>
								<FilterOption icon={faEthereum}>ETH</FilterOption>
							</FilterSelect>
							<div className="flex flex-col gap-2 mb-4 mt-3">
								<FilterInput type="number" placeholder="min" />
								<FilterInput type="number" placeholder="max" />
							</div>
							<FilterButton>Apply</FilterButton>
						</FilterItem>
						<FilterItem text="Properties">
							{collection && (
								<FilterSelect>
									{collection.properties.map((property) => {
										return (
											<FilterOption>
												<div className="flex justify-between w-full">
													<p>{property.name}</p>
													<p>({property.attributes.length})</p>
												</div>
											</FilterOption>
										);
									})}
								</FilterSelect>
							)}
						</FilterItem>
					</ul>
					<SmallPages page={1} max={22} />
				</>
			)} */}
		</div>
	);
};

export default Filter;
