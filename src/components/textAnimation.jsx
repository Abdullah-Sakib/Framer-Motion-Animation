import { motion } from "framer-motion";

const TextAnimation = () => {
  return (
    <div>
      <motion.h2
        initial={{ x: -1000, scale: 0.5, opacity: 0.5 }} // initial position of the element
        animate={{ x: 0, scale: 1.5, opacity: 1 }} // where it will go after the animation
        transition={{
          duration: 2,
        }} // transition of the animation
        whileHover={{ scale: 1.5, opacity: 0.5 }} // animate on hover
      >
        Hakuna Matata
      </motion.h2>
    </div>
  );
};

export default TextAnimation;
