import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowRightFromBracket,
	faBell,
	faCrown,
	faRobot,
	faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../filter/comps/button";
import logo from "../../public/logo.png";
import { useMoralis } from "react-moralis";

const Nav: NextPage = () => {
	const { isAuthenticated, authenticate, logout, account } = useMoralis();
	return (
		<nav className="h-14 w-full fixed text-white bg-gray-900 shadow-lg z-20 flex justify-around items-center">
			<div className="flex gap-20">
				<div className="flex gap-4 h-full items-center">
					<Image src={logo} height={45} width={45} className="rounded-full" />
					<div>
						<p className="font-medium text-md">Sniper monkey</p>
						<p className="text-xs text-gray-400">Beta</p>
					</div>
				</div>
				<ul className="flex gap-10">
					<li className="h-full flex gap-2 items-center font-medium hover:text-gray-300">
						<FontAwesomeIcon icon={faTableList} />
						<Link href="/">Dashboard</Link>
					</li>
					<li className="h-full flex gap-2 items-center font-medium hover:text-gray-300">
						<FontAwesomeIcon icon={faRobot} />
						<Link href="/">Ai sniper</Link>
					</li>
					<li className="h-full flex gap-2 items-center font-medium hover:text-gray-300">
						<FontAwesomeIcon icon={faDiscord} />
						<Link href="/">Discord</Link>
					</li>
					<li className="h-full flex gap-2 items-center font-medium text-yellow-500 hover:text-yellow-400">
						<FontAwesomeIcon icon={faCrown} />
						<Link href="/">Subscriptions</Link>
					</li>
				</ul>
			</div>
			<div className="pl-10 h-full flex items-center">
				<div className="px-10 mx-10 border-x border-gray-800 h-full flex flex-col justify-center">
					<FontAwesomeIcon icon={faBell} size="lg" />

					<span className="absolute h-3 w-3 bg-red-600 border-2 ml-2 mb-3.5 rounded-full border-red-500"></span>
					<span className="absolute h-3 w-3 animate-ping border-red-600 border-2 ml-2 mb-3.5 rounded-full"></span>
				</div>
				{!isAuthenticated && (
					<Button
						onClick={() => {
							authenticate({
								signingMessage: "Authorize linking of your wallet",
							});
						}}
					>
						Connect wallet
					</Button>
				)}

				{isAuthenticated && (
					<div className="flex gap-3">
						<div>
							<p>
								{account.substring(0, 5)}...
								{account.substring(account.length - 5, account.length)}
							</p>
							<p className="uppercase text-right font-bold text-green-500">
								User
							</p>
						</div>
						<Button
							className="bg-red-500 hover:bg-red-400 px-2"
							onClick={() => {
								logout();
							}}
						>
							<FontAwesomeIcon icon={faArrowRightFromBracket} />
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
