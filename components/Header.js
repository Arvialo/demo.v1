import { useState } from "react";
import Link from "next/link";

function Header({ theme, setTheme }) {
	const [isOpen, setIsOpen] = useState(0);
	console.log(theme);

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
					<img
						src="brightness.svg"
						onClick={() => setTheme(!theme)}
					/>
				</nav>
			</div>
		</header>
	);
}

export default Header;
