import { useState } from "react";
import Link from "next/link";

import { BsLaptop, BsMoonFill, BsSun } from "react-icons/bs";
import useLocalStorage from "@/hooks/useLocalStorage";

function Header() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");
	const [isOpen, setIsOpen] = useState(0);

	const themes = {
		light: <BsSun />,
		dark: <BsMoonFill />,
		system: <BsLaptop />,
	};

	return (
		<header>
			<div className="header-container light_theme-header">
				<img src="logo.svg" alt="" className="logo" />
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
						className="nav-item"
						// state={{ theme: { theme }, setTheme: { setTheme } }}
					>
						Accueil
					</Link>
					<Link
						style={{ textDecoration: "none" }}
						href="/offers"
						className="nav-item"
						// state={{ theme: theme }}
					>
						Nos offres
					</Link>
					<Link
						style={{ textDecoration: "none" }}
						href="creations"
						className="nav-item"
					>
						Nos créations
					</Link>
					<div
						className={
							"nav-item-button" +
							(theme && " nav-item-button-light")
						}
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
