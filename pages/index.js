import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import useColorTheme from "@/hooks/useColorTheme";
import classNames from "@/hooks/classNames";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/hero.png";
import Fleche from "@/public/fleche.svg";
import Icon1 from "@/public/icon1.png";
import Icon2 from "@/public/icon2.png";
import Icon3 from "@/public/icon3.png";
import RealImage1 from "@/public/real-image1.png";
import RealImage2 from "@/public/real-image2.jpg";
import RealImage3 from "@/public/real-image3.jpg";
import RealImage4 from "@/public/real-image4.jpg";

export default function Home() {
  const { isLight } = useColorTheme();

  const [faqActive, setFaqActive] = useState(0);

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>AAA</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Header />
      <main>
        <section
          className={classNames(
            "hero-banner",
            isLight ? "hero-banner-light" : ""
          )}
        >
          <div className="hero-banner-texte">
            <h1 className="slogan">
              <span
                className={classNames(
                  "slogan-gradient",
                  isLight ? "slogan-gradient-light" : ""
                )}
              >
                A
              </span>
              mbition{" "}
              <span
                className={classNames(
                  "slogan-gradient",
                  isLight ? "slogan-gradient-light" : ""
                )}
              >
                A
              </span>
              nd{" "}
              <span
                className={classNames(
                  "slogan-gradient",
                  isLight ? "slogan-gradient-light" : ""
                )}
              >
                A
              </span>
              daptation
              <span
                className={classNames(
                  "slogan-gradient",
                  isLight ? "slogan-gradient-light" : ""
                )}
              >
                .
              </span>
            </h1>
            <h3
              className="slogan-sous-texte"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              Laissez votre empreinte sur le Web avec{" "}
              <span
                className={classNames(
                  "slogan-gradient",
                  isLight ? "slogan-gradient-light" : ""
                )}
              >
                Arion.
              </span>
            </h3>
          </div>
          <Image
            src={HeroImage}
            alt="dessin appareil web"
            className={classNames(
              "hero-banner-image",
              isLight ? "hero-banner-image-light" : ""
            )}
            priority="true"
          />
          <Image src={Fleche} alt="" className="fleche" onClick={handleClick} />
          <img
            src={"wave" + (isLight ? "-light1" : "") + ".svg"}
            alt=""
            className="wave"
            priority="true"
          />
        </section>
        <span ref={ref}></span>
        <section className="nos-services-banner nos-services-banner-light">
          <div className="nos-services-image">
            <div className="nos-services-image-item">
              <Image src={Icon1} height={150} width={150}></Image>
              <h3>Design</h3>
              <p>Un design de qualité tout comme votre business</p>
            </div>
            <div className="nos-services-image-item">
              <Image src={Icon2}></Image>
              <h3>Design</h3>
              <p>Un design de qualité tout comme votre business</p>
            </div>
            <div className="nos-services-image-item">
              <Image src={Icon3}></Image>
              <h3>Design</h3>
              <p>Un design de qualité tout comme votre business</p>
            </div>
            <div className="nos-services-image-item">
              <Image src={Icon2}></Image>
              <h3>Design</h3>
              <p>Un design de qualité tout comme votre business</p>
            </div>
          </div>
          <div className="nos-services-texte">
            <h2>La manière la plus rapide d'ouvrir votre projet au monde</h2>
            <p>
              Nous proposons de prendre en charge complètement votre site web,
              des premières étapes de conception jusqu'au déploiement de
              celui-ci et même après.
            </p>
            <Link href="/offers">
              <button className="ensavoirplus-button">Voir nos offres</button>
            </Link>
          </div>
        </section>
        <section className="nos-realisations-banner nos-realisations-banner-light"></section>
        <section className="faq">
          <div className="faq-item">
            <div className="faq-question">Comment tu t'appelles ?</div>
            <div
              className={
                "faq-reponse " + (faqActive === 1 ? "faq-reponse-active" : "")
              }
            >
              Nous proposons de prendre en charge complètement votre site web,
              des premières étapes de conception jusqu'au déploiement de
              celui-ci et même après. Nous proposons de prendre en charge
              complètement votre site web, des premières étapes de conception
              jusqu'au déploiement de celui-ci et même après. Nous proposons de
              prendre en charge complètement votre site web, des premières
              étapes de conception jusqu'au déploiement de celui-ci et même
              après.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question" onClick={() => setFaqActive(1)}>
              Comment tu t'appelles ?
            </div>
            <div
              className={
                "faq-reponse " + faqActive === 1 ? "faq-reponse-active" : null
              }
            >
              Nous proposons de prendre en charge complètement votre site web,
              des premières étapes de conception jusqu'au déploiement de
              celui-ci et même après. Nous proposons de prendre en charge
              complètement votre site web, des premières étapes de conception
              jusqu'au déploiement de celui-ci et même après. Nous proposons de
              prendre en charge complètement votre site web, des premières
              étapes de conception jusqu'au déploiement de celui-ci et même
              après.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
