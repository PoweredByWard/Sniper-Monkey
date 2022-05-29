interface EthIconProps {
	height?: number;
	width?: number;
}

const EthIcon = ({ height = 15, width = 15 }: EthIconProps) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			stroke-width="0"
			role="img"
			viewBox="0 0 24 24"
			height={`${height}px`}
			width={`${width}px`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<title></title>
			<path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"></path>
		</svg>
	);
};
export default EthIcon;
