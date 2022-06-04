import { ButtonHTMLAttributes, useState } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
		{...props}
			className={"bg-indigo-700 p-2 rounded-md hover:bg-indigo-600 px-5 font-semibold "+props.className}
		>
			{props.children}
		</button>
	);
};

export default Button;
