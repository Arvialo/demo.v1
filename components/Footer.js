function Footer() {
  return (
    <>
      <footer>
        <img src="logo.svg" alt="" className="logo" />
        <h3>Arion</h3>
        <div className="footer-coordonnees">
          <p>3 Avenue Michelin Paris 75001</p>
          <p>arion.web@gmail.com</p>
          <p>07 82 52 63 67</p>
        </div>
        <div className="footer-plan">
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            Accueil
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="50"
            data-aos-anchor-placement="center-bottom"
          >
            Services
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="100"
            data-aos-anchor-placement="center-bottom"
          >
            Réalisations
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="150"
            data-aos-anchor-placement="center-bottom"
          >
            Contactez-nous
          </h2>
        </div>
        <div className="footer-end">
          <p>c 2023</p>
          <p>Agence Web Arion. Tous droits réservés</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
