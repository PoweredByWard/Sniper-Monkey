import { Collection, Nft } from "@sniper-monkey/types/build";
import Image from "next/image";
import { useContext } from "react";
import { pastel_colour } from "../../lib/colors";
import EthIcon from "../ethIcon";
import { NftContext } from "../filter/providers/nftFilters";
import { TraitElement } from "@sniper-monkey/types/build";
import { LimitTag } from "./tag";

interface NftRowProps {
	nft: Nft;
	collection: Collection;
}

const NftRowElement = ({ children }) => {
	return <td className="px-4 border-b border-gray-900">{children}</td>;
};

const NftRow = ({ nft, collection }: NftRowProps) => {
	//usecontext of nftFilter
	const nftContextData = useContext(NftContext);

	const limits = {
		green: {
			start: 1,
			end: collection.amount / 100,
		},
		orange: {
			start: collection.amount / 100,
			end: collection.amount / 10,
		},
	};
	return (
		<tr className="h-12 text-sm leading-none text-gray-80 hover:bg-gray-600 align-middle group">
			<td className="px-4 left-0 sticky border-r border-b border-gray-900 group-hover:bg-gray-600 bg-gray-700 ">
				<div className="w-10 h-10">
					<Image
						src={nft.imageUrl}
						className="rounded-md"
						height={50}
						width={50}
					/>
				</div>
			</td>
			<NftRowElement>{nft.name}</NftRowElement>
			<NftRowElement>
				<LimitTag number={10} limits={limits}>
					#
				</LimitTag>
			</NftRowElement>
			<NftRowElement>
				<button
					onClick={() => {
						nftContextData.updateFunctions.setPriceFilter({
							min: 10,
							max: 10,
						});
					}}
					className="flex"
				>
					<EthIcon />
					10
				</button>
			</NftRowElement>
			<NftRowElement>
				<p className="flex">
					<EthIcon />2
				</p>
			</NftRowElement>

			<NftRowElement>
				<div className="flex ">
					{nft.attributes.map((attributeOnNft: any) => {
						const attribute = attributeOnNft.attribute;
						const property = attribute.property.name;
						const trait: TraitElement = {
							attribute: attribute.value,
							property: property,
						};

						return (
							<button
								onClick={() => {
									nftContextData.updateFunctions.addPropertyFilter(trait);
								}}
								style={{ backgroundColor: pastel_colour(property) }}
								className=" leading-3 font-medium mx-1 text-white text-opacity-90 p-2 rounded-md"
							>
								{property}: {attribute.value} {"["}
								{attribute.nfts.length == 1
									? "1/1"
									: ((attribute.nfts.length / collection.amount) * 100).toFixed(
											2
									  ) + "%"}
								{"]"}
							</button>
						);
					})}
				</div>
			</NftRowElement>
		</tr>
	);
};

export default NftRow;
