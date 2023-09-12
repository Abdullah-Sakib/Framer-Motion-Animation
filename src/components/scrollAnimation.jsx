import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Scroll animation</h3>
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

function Box() {
  return (
    <motion.div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "orange",
        borderRadius: "10px",
        margin: "200px 0",
      }}
      initial={{ opacity: 0, scale: 0, x: 200 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }} // * animate the box while it is in view
      transition={{ duration: 1 }}
      viewport={{ once: true }} // * animation will be applied once on the first render
    ></motion.div>
  );
}

export default ScrollAnimation;
