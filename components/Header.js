import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <header>
      <div className="header-container">
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
          <div className="nav-item-button">Contactez-nous</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
