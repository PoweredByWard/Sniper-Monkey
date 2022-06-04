import { Collection } from "@sniper-monkey/types/build";
import { NftFilterState } from "@sniper-monkey/types/build";

export async function loadCollections() {
	const res = await fetch("http://localhost:3333/collections");
	const collections: Collection[] = await res.json();
	return collections;
}

export async function loadCollection(slug: string, state: NftFilterState) {
	const res = await fetch(`http://localhost:3333/collection/${slug}`, {
		method: "POST",
		body: JSON.stringify(state),
	});
	const collection: Collection = await res.json();
	return collection;
}
