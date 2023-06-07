import { useState } from "react";

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
					<div className="nav-item">Accueil</div>
					<div className="nav-item">Nos offres</div>
					<div className="nav-item">Nos créations</div>
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
