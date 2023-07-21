import { useState } from "react";
import { useRouter } from "next/router";

export default function Fetch() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numero, setNumero] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/AeLbJkHNt_", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nom: nom,
        Prenom: prenom,
        Numero: numero,
        Email: email,
        Message: message,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
          router.push("/merci");
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="nom">Nom</label>
      <input
        id="nom"
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <label htmlFor="prenom">Prenom</label>
      <input
        id="prenom"
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />
      <label htmlFor="numero">Numero</label>
      <input
        id="numero"
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        placeholder="ECRIVEZ-NOUS VOTRE MESSAGE? NOUS VOUS RECONTACTERONS DANS LES PLUS BREFS DELAIS..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
