import { forwardRef, InputHTMLAttributes, LegacyRef, useState } from "react";

const FilterInput: any = (
	props:InputHTMLAttributes<HTMLInputElement>,
	ref: LegacyRef<HTMLInputElement>
) => {
	return (
		<input
			{...props}
			ref={ref}
			className="p-2 w-full bg-gray-800 border border-gray-900 rounded-md outline-none focus:border-indigo-700"
		/>
	);
};

export default forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(FilterInput);
