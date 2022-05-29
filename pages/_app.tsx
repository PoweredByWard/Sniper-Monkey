import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/navigations/navigation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="h-screen">
			<Nav />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
