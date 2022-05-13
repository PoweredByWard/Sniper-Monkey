import React from "react";

interface NumberProps {
	number: number;
	numberType: NumberType;
}

type NumberType = "short" | "dots";

const Number = ({ number, numberType }: NumberProps) => {
	let numberString = "";
	switch (numberType) {
		case "short":
			numberString = getShort(number);
			break;
		case "dots":
			numberString = number.toLocaleString();
	}

	function getShort(number: number): string {
		if (number >= 1e9) {
			return (number / 1e9).toFixed(1) + "B";
		} else if (number >= 1e6) {
			return (number / 1e6).toFixed(1) + "M";
		} else if (number >= 1e3) {
			return (number / 1e3).toFixed(2) + "K";
		} else if (number >= 1e1){
			return number.toFixed(0).toString();
		}else{
                        return number.toFixed(1).toString();
                }
	}
	return <> {numberString} </>;
};

export default Number;
