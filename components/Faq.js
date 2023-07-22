import { useState } from "react";
import Image from "next/image";
import DownArrow from "@/public/down-arrow.svg";

export default function Faq() {
  const [faqActive, setFaqActive] = useState(0);

  const handleFaqQuestionClick = (index) => {
    if (index === faqActive) {
      setFaqActive(0);
    } else {
      setFaqActive(index);
    }
  };
  return (
    <>
      <section className="faq">
        <div className="faq-item">
          <div
            className="faq-question"
            onClick={() => handleFaqQuestionClick(1)}
          >
            <h3>Qu'est-ce que le SEO ?</h3>
            <Image
              src={DownArrow}
              className={faqActive === 1 ? "active-arrow" : ""}
            ></Image>
          </div>
          <div
            className={
              "faq-reponse " + (faqActive === 1 ? "faq-reponse-active" : "")
            }
          >
            Nous proposons de prendre en charge complètement votre site web, des
            premières étapes de conception jusqu'au déploiement de celui-ci et
            même après. Nous proposons de prendre en charge complètement votre
            site web, des premières étapes de conception jusqu'au déploiement de
            celui-ci et même après. Nous proposons de prendre en charge
            complètement votre site web, des premières étapes de conception
            jusqu'au déploiement de celui-ci et même après.
          </div>
        </div>
        <div className="faq-item">
          <div
            className="faq-question"
            onClick={() => handleFaqQuestionClick(2)}
          >
            <h3>Comment mettez-vous en place mon site ?</h3>
            <Image
              src={DownArrow}
              className={faqActive === 2 ? "active-arrow" : ""}
            ></Image>
          </div>
          <div
            className={
              "faq-reponse " + (faqActive === 2 ? "faq-reponse-active" : "")
            }
          >
            Nous proposons de prendre en charge complètement votre site web, des
            premières étapes de conception jusqu'au déploiement de celui-ci et
            même après. Nous proposons de prendre en charge complètement votre
            site web, des premières étapes de conception jusqu'au déploiement de
            celui-ci et même après. Nous proposons de prendre en charge
            complètement votre site web, des premières étapes de conception
            jusqu'au déploiement de celui-ci et même après.
          </div>
        </div>
      </section>
    </>
  );
}
