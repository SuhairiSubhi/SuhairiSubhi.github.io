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
      x: "-140%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        duration: 10,
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
    <motion.div
      className={styles.slider}
      variants={sliderVariants}
      initial="initial"
      animate="animate"
    >
      {text}
    </motion.div>
  );
};
