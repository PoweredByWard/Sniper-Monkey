import Button from "../filter/comps/button";
import headerImage from "../../public/header.jpg";
import Image from "next/image";
function Header() {
	return (
		<section className="relative h-full w-full shadow-md">
			<div className="w-full h-full  object-center object-fill absolute ">
				<Image
					src={headerImage}
					layout="fill"
					alt="city view"
					objectFit="cover"
				/>
			</div>

			<div className="text-xl px-10 py-24 relative bg-gradient-to-r from-indigo-700 to-transparent w-full h-full flex flex-col pl-20 justify-center">
				<div>
					<h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
						The Ultimate NFT tool place
					</h1>
					<p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
						A good idiom for kids is "It's raining cats and dogs." Kids know
						what both cats and dogs are from an early age.
					</p>
				</div>
				<div className="md:mt-12 mt-20">
					<button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4  hover:bg-gray-100 ">
						Explore More
					</button>
				</div>
			</div>
		</section>
	);
}

export default Header;
