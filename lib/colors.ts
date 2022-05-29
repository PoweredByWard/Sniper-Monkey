//magic to convert strings to a nice pastel colour based on first two chars
//
// every string with the same first two chars will generate the same pastel colour
export function pastel_colour(input_str) {
	//TODO: adjust base colour values below based on theme
	var baseRed = 200;
	var baseGreen = 0;
	var baseBlue = 256;

	//lazy seeded random hack to get values from 0 - 256
	//for seed just take bitwise XOR of first two chars
	var seed = input_str.charCodeAt(0) ^ input_str.charCodeAt(1);
	var rand_1 = Math.abs(Math.sin(seed++) * 10000) % 256;
	var rand_2 = Math.abs(Math.sin(seed++) * 10000) % 256;
	var rand_3 = Math.abs(Math.sin(seed++) * 10000) % 256;

	//build colour
	var red = Math.round((rand_1 + baseRed) / 2);
	var green = Math.round((rand_2 + baseGreen) / 2);
	var blue = Math.round((rand_3 + baseBlue) / 2);
	return `rgb(${red},${green},${blue})`;
	// return { red: red, green: green, blue: blue };
}

