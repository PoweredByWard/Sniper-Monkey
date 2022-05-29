import React, { useEffect, useState } from "react";

interface TableProps {
	title?: string;
	columns: string[];
	children: JSX.Element[];
}

const Table = ({ title, columns, children }: TableProps) => {
	return (
		<div className="overflow-auto w-full scrollbar-thin scrollbar-thumb-gray-900 border-y border-gray-900 scrollbar-track-gray-800">
			<table className="w-full whitespace-nowrap bg-gray-700 text-white border-separate">
				<thead className="sticky top-0 z-10">
					<tr className="h-16 w-full text-sm leading-none shadow-xl bg-gray-700">
						{columns &&
							columns.map((column) => {
								return <th className="font-normal border-b border-gray-900 text-left pl-4 left-0 sticky bg-gray-700">{column}</th>;
							})}
					</tr>
				</thead>
				<tbody className="w-full">{children}</tbody>
			</table>
		</div>
	);
};

export default Table;
