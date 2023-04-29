import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AAA</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      {/* <div className="background"></div> */}
      <Header />
      <main>
        <div className="hero-banner">
          <div className="hero-banner-texte">
            <h1 className="slogan">
              {/* Ambition And Adaptation. */}
              Ambition <span className="slogan-gradient">And</span> Adaptation.
            </h1>
            <h3 className="slogan-sous-texte">
              Laissez votre empreinte sur le{" "}
              <span className="slogan-gradient">Web.</span>
            </h3>
          </div>
          <img
            src="test1.svg"
            alt="dessin appareil web"
            className="hero-banner-image-mobile"
          />
          <button className="hero-banner-button">Découvrir</button>
        </div>
        <div className="presentation">
          <h2>AAA Corp</h2>
          <p>
            Nous sommes 3 ingénieurs de l'ESIEA qui avons décidé d'accompagner
            les entreprises voulant booster leurs ventes. De la création de
            sites web au référencement en ligne, nous proposons de nombreux
            services sur-mesure. Avec nous, la seule limite est votre
            imagination.
          </p>
        </div>

        <div className="nos-services-banner">
          <h2 className="service-titre">Nos Services</h2>
          <div className="nos-services-grid">
            <div className="service-item">
              <img src="test3.svg" alt="" />
              <h3>Creation de site web</h3>
              <p>
                Takimata dolore eos sea labore. Volutpat sanctus vero et sea et
                accusam ipsum. Est facilisis kasd et at est sed est sanctus in
                sit
              </p>
            </div>
            <div className="service-item">
              <img src="test4.svg" alt="" />
              <h3>SEO</h3>
              <p>
                Takimata dolore eos sea labore. Volutpat sanctus vero et sea et
                accusam ipsum. Est facilisis kasd et at est sed est sanctus in
                sit
              </p>
            </div>
          </div>
          <button className="ensavoirplus-button">En savoir plus</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
