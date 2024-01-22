import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
import { TextSlider } from "../utils/TextSlider";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <TextSlider text="Thank&nbsp;You&nbsp;Thank&nbsp;You&nbsp;Thank&nbsp;You"></TextSlider>
        </main>
      </div>
    </>
  );
};
