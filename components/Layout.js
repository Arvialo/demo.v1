import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <motion.div
        className="page-transition page-transition-top"
        initial={{ height: 0 }}
        animate={{ height: 0 }}
        exit={{ height: "100%" }}
        transition={{ duration: 1, ease: "circOut" }}
      >
        <Image src={Logo} height={100} width={"auto"}></Image>
      </motion.div>
      <motion.div
        className="page-transition page-transition-bottom"
        initial={{ height: "100%" }}
        animate={{ height: 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "circIn" }}
      >
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }}>
          <Image src={Logo} height={100} width={"auto"}></Image>
        </motion.div>
      </motion.div>
    </>
  );
}
