import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { TextSlider } from "@/components/utils/TextSlider";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/suhairi-subhi/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:&#115;&#117;&#104;&#097;&#105;&#114;&#105;&#046;&#115;&#117;&#098;&#104;&#105;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>
                &#115;&#117;&#104;&#097;&#105;&#114;&#105;&#046;&#115;&#117;&#098;&#104;&#105;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
