import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./slider.module.scss";

interface Props {
  text: string;
  width?: "fit-content" | "100%";
}

export const TextSlider = ({ text, width = "fit-content" }: Props) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-180%",
      opacity: 1,
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 20,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div style={{ overflow: "hidden", maxWidth: "90vw" }}>
      <motion.div
        className={styles.slider}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {text}
      </motion.div>
    </div>
  );
};
