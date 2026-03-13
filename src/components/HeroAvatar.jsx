import { motion } from "framer-motion";
import character from "../assets/hero-character.png";

export default function HeroAvatar() {
  return (
    <motion.div
      className="hero-avatar-wrap"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img
        src={character}
        alt="Friendly developer illustration"
        className="hero-avatar-image"
        loading="eager"
        whileHover={{
          rotate: [0, -5, 5, -3, 3, 0],
          x: [0, 2, -2, 1, -1, 0],
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
