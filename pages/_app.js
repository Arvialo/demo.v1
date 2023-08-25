import "@/styles/styles.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <main key={router.pathname}>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
}
