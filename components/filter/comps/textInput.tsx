import { forwardRef, LegacyRef, useState } from "react";

interface FilterInputProps {
	placeholder?: string;
	type?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: any = (
	{ placeholder = "", type = "text", onChange = () => {} }: FilterInputProps,
	ref: LegacyRef<HTMLInputElement>
) => {
	return (
		<input
			onChange={onChange}
			type={type}
			ref={ref}
			placeholder={placeholder}
			className="p-2 w-full bg-gray-800 border border-gray-900 rounded-md outline-none focus:border-indigo-700"
		/>
	);
};

export default forwardRef<HTMLInputElement, FilterInputProps>(FilterInput);
