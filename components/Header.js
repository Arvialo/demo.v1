import { isMobile } from "react-device-detect";

import { useState } from "react";

function Header({ isMobile }) {
  const [isOpen, setIsOpen] = useState(0);

  console.log(isMobile);

  return !isMobile ? (
    <header>
      <div className="header-container">
        <img src="logo.svg" alt="" className="logo" />
        {/* <nav>
          <div className="nav-item">Accueil</div>
          <div className="nav-item">Nos offres</div>
          <div className="nav-item">Nos créations</div>
          <div className="nav-item-button">Contactez-nous</div>
        </nav> */}
        {/* <h3 className="accueil">Accueil</h3> */}

        <nav>
          <img src="hamburger.svg" alt="" className="toggle" />
        </nav>
      </div>
    </header>
  ) : (
    <div>oko</div>
  );
}

export async function getServerSideProps() {
  return { props: { isMobile } };
}

export default Header;
