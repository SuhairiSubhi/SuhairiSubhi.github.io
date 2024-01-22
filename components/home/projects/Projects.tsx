import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "PastryML",
    imgSrc: "project-imgs/pastryml.png",
    code: "#",
    projectLink: "#",
    tech: ["TensorFlow", "Keras", "Python", "Pandas"],
    description:
      "A self-trained Artificial Intelligence Model(Convoluted Neural Network) on self collected dataset(images) to identify pastries between 4 countries: France, Portugal, Morocco and Malaysia based on given images",
    modalContent: "",
  },
  {
    title: "CountryGuessr",
    imgSrc: "project-imgs/countryguessr.png",
    code: "https://github.com/ghr00/country-guesser-ihm",
    projectLink: "#",
    tech: ["JavaScript", "JQuery", "Python", "Concurrent System"],
    description:
      "A basic front end web application for handling concurrent response from the users, based on first-come-first-serve basis",
    modalContent: "",
  },
  {
    title: "BedBoat",
    imgSrc: "project-imgs/bedboat.png",
    code: "#",
    projectLink: "https://bedboat.fr/",
    tech: ["NodeJS", "Express", "NextJS", "TypeScript"],
    description:
      "Managed migration of the old web application on Symfony PHP to modern framework Express",
    modalContent: "",
  },
  {
    title: "Zpheres NFT",
    imgSrc: "project-imgs/zpheres.jpg",
    code: "#",
    projectLink: "#",
    tech: ["React", "TypeScript", "Metaplex", "Solana"],
    description:
      "Web application using React and Metaplex for minting new NFT on Solana blockchain",
    modalContent: "",
  },
  {
    title: "MASAF",
    imgSrc: "project-imgs/masaf.png",
    code: "#",
    projectLink: "https://masafrance.org",
    tech: ["WordPress", "Elementor", "CSS", "PHP"],
    description:
      "Portfolio website for students' association in France built using Elementor and WordPress",
    modalContent: "",
  },
];
