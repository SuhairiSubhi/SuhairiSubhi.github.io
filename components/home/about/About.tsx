import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey there! My name is Suhairi and I have always been enthusiastic
              about applying my academic expertise,{" "}
              <span className={styles.highlightText}>strong work ethic</span>,
              and dedication to contribute to a dynamic team as a{" "}
              <span className={styles.highlightText}>team player</span> and
              foster{" "}
              <span className={styles.highlightText}>professional growth</span>.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I am adept at{" "}
              <span className={styles.highlightText}>
                full-stack development
              </span>
              , with a strong focus on delivering{" "}
              <span className={styles.highlightText}> high-quality code </span>
              and
              <span className={styles.highlightText}> scalable solutions </span>
              with a proven track record of collaborating with cross-functional
              teams to meet project goals and deadlines.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love{" "}
              <span className={styles.highlightText}>travelling</span> and{" "}
              <span className={styles.highlightText}>taking photos</span>. My
              next destination would be the North or South America for sure! You
              can find my work on my instagram&nbsp;
              <a
                className={styles.highlightText}
                target="_blank"
                rel="nofollow"
                href="https://www.instagram.com/suhairishots/"
              >
                @suhairishots
              </a>
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively looking for a new position where I can merge my
              love for code with my love for the cutting edge technology,
              notably in{" "}
              <span className={styles.highlightText}>Software Engineering</span>
              . If you think you&apos;ve got an opening that I might like,
              let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
