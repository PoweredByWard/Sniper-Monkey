import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/navigations/navigation";
import { NftProvider } from "../components/filter/providers/nftFilters";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
	console.log(process.env.NEXT_PUBLIC_MORALIS_API_KEY)
	console.log(process.env.NEXT_PUBLIC_MORALIS_API_URL)
	return (
		<MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
			<NftProvider>
				<div>
					<Nav />
					<div className="pt-14 h-screen">
						<Component {...pageProps} />
					</div>
				</div>
			</NftProvider>
		</MoralisProvider>
	);
}

export default MyApp;
