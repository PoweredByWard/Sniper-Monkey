export interface NftContextType { 
	state: NftFilterState;
	updateFunctions: NftFilterFunctions;
}

export type NftStatus = "For sale" | "Not for sale";

export interface NftFilterState {
	page: number;
	filters: NftFilters;
}

export interface NftFilters {
	status: NftStatus[];
	rank?: FilterRange;
	price?: FilterRange;
	properties: TraitElement[];
}

export interface FilterRange {
	min: number;
	max: number;
}

export interface TraitElement {
	property: string;
	attribute: string;
}

export interface NftFilterFunctions {
	toggleStatusFilter: (status: NftStatus[]) => void;
	setRankFilter: (rank: FilterRange) => void;
	setPriceFilter: (price: FilterRange) => void;
	addPropertyFilter: (traitElement:TraitElement) => void;
	removePropertyFilter: (traitElement:TraitElement) => void;
	removeFilter: (filterKey: string) => void;
}