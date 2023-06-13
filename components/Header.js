import { useState } from "react";
import Link from "next/link";

import {
	BsLaptop,
	BsMoonFill,
	BsSun,
	BsMoon,
	BsLaptopFill,
} from "react-icons/bs";
import useColorTheme from "@/hooks/useColorTheme";
import classNames from "@/hooks/classNames";

function Header() {
	const { theme, setTheme, isLight } = useColorTheme();
	const [isOpen, setIsOpen] = useState(0);

	console.log(isLight);

	const themes = {
		light: <BsSun />,
		dark: <BsMoonFill style={{ color: "white" }} />,
		system: isLight ? (
			<BsLaptop />
		) : (
			<BsLaptop style={{ color: "white" }} />
		),
	};

	let navItem = isLight ? "nav-item-light" : "nav-item-dark";

	return (
		<header>
			<div
				className={classNames(
					"header-container",
					isLight ? "light_theme-header" : ""
				)}
			>
				<img
					src={isLight ? "logoDark.svg" : "logo.svg"}
					alt=""
					className="logo"
				/>
				<img
					src={isOpen ? "cross.svg" : "hamburger.svg"}
					alt=""
					className="toggle"
					onClick={() => setIsOpen(!isOpen)}
				/>
				<nav className={!isOpen ? "hidden" : "visible"}>
					<Link
						style={{ textDecoration: "none" }}
						href="/"
						className={navItem}
					>
						Accueil
					</Link>
					<Link
						style={{ textDecoration: "none" }}
						href="/offers"
						className={navItem}
					>
						Nos offres
					</Link>
					<Link
						style={{ textDecoration: "none" }}
						href="creations"
						className={navItem}
					>
						Nos créations
					</Link>
					<div
						className={classNames(
							isLight ? "nav-item-button-light" : "",
							"nav-item-button"
						)}
					>
						Contactez-nous
					</div>
					<button
						style={{
							border: "none",
							outline: "none",
							background: "none",
							fontSize: "20px",
						}}
						onClick={() =>
							setTheme(
								Object.keys(themes)[
									(Object.keys(themes).indexOf(theme) + 1) % 3
								]
							)
						}
					>
						{themes[theme]}
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Header;
