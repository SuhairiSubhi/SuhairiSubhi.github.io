import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Angular</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">MySQL</span>
            <span className="chip">Git</span>
            <span className="chip">C#</span>
            <span className="chip">Docker</span>
            <span className="chip">Tailwind</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Java</span>
            <span className="chip">C++</span>
            <span className="chip">Go</span>
            <span className="chip">Hyperledger Fabric</span>
            <span className="chip">Metaplex</span>
            <span className="chip">Adobe Lightroom</span>
            <span className="chip">Adobe Photoshop</span>
            <span className="chip">Python</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">Keras</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
