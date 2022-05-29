import { createContext, useState } from "react";
import {
	NftContextType,
	NftFilterState,
	NftStatus,
	TraitElement,
} from "./types";

const NftContext = createContext<NftContextType>(null);

const NftProvider = ({ children }) => {
	const standardStatus: NftStatus[] = ["For sale", "Not for sale"];

	const initialState: NftFilterState = {
		page: 1,
		filters: {
			status: standardStatus,
			properties: [],
		},
	};
	const [context, setContext] = useState<NftContextType>({
		state: initialState,
		updateFunctions: {
			toggleStatusFilter: (status: NftStatus[]) => {
				const newContext = context;
				newContext.state.filters.status = status;
				setContext({ ...newContext });
			},
			setRankFilter: (rank) => {
				const newContext = context;
				newContext.state.filters.rank = rank;
				setContext({ ...newContext });
			},
			setPriceFilter: () => {},
			addPropertyFilter: (trait: TraitElement) => {
				const newContext = context;
				newContext.state.filters.properties.push(trait);
				setContext({ ...newContext });
			},
			removePropertyFilter: (trait: TraitElement) => {
				const newContext = context;
				const index = newContext.state.filters.properties.findIndex(
					(t) =>
						t.property === trait.property && t.attribute === trait.attribute
				);
				if (index > -1) {
					newContext.state.filters.properties.splice(index, 1);
				}
				setContext({ ...newContext });
			},
			removeFilter: (key: string) => {
				const newContext = context;
				if (key === "status") {
					newContext.state.filters.status = standardStatus;
				} else {
					delete newContext.state.filters[key];
				}
				setContext({ ...newContext });
			},
		},
	});

	return <NftContext.Provider value={context}>{children}</NftContext.Provider>;
};

export { NftProvider, NftContext };
