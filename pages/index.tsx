import Header from "../components/sections/header";
import ToolList from "../components/sections/tools/toolList";

const Index = () => {
	return (
		<div className="bg-gradient-to-b from-gray-800 via-gray-800 to-gray-600 ">
			<header>
				<Header />
			</header>
			<main>
				<ToolList />
			</main>
		</div>
	);
};

export default Index;
