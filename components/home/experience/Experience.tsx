import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Avanade",
    position: "Full Stack Intern Developer",
    time: "April 2023 - September 2023",
    location: "Toulouse",
    description:
      "Full Stack web development using Angular / HapiJs and conducting research of application of blockchain in various industry with Hyperledger Fabric",
    tech: [
      "Angular",
      "HapiJS",
      "NodeJS",
      "Hyperledger Fabric",
      "TypeScript",
      "Reactive Programming",
      "Git",
      "Jira",
    ],
  },
  {
    title: "Bedboat",
    position: "Back-end Intern Developer",
    time: "June 2022 - August 2022",
    location: "Toulouse",
    description:
      "Migrated old web application in Symfony framework to a modern JavaScript framework. Conducted a comprehensive analysis and presented diverse JavaScript frameworks as prospective options for the migration process",
    tech: [
      "NodeJS",
      "NextJS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Symfony",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Abys Medical",
    position: "Intern developer",
    time: "May 2020 - July 2020",
    location: "La Rochelle",
    description:
      "Developed an augmented reality application tailored for the Microsoft HoloLens 2 device, showcasing an innovative approach to immersive digital experiences",
    tech: [
      "C#",
      "Unity",
      "Mixed Reality Toolkit",
      "NodeJS",
      "3D Modelling",
      "Microsoft Hololens 2",
    ],
  },
];
