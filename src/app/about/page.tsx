/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <div className={styles.aboutContainer}>
        <div className={styles.headlineContainer}>
          <h1>Hi, I&apos;m Isabela 👋🏼</h1>
          <div className={styles.tagContainer}>
            <p className={styles.tag}>Lead software engineer @ Disney</p>
            <p className={styles.tag}>Seattle, WA 🌲</p>
          </div>
        </div>
        <img
          src="./headshot.jpg"
          alt="Isabela's headshot"
          className={styles.headshotImage}
        />
      </div>
      <div className={styles.bioContainer}>
        <p>
          Isabela is a lead software engineer at Disney, helping build the
          future of Disney streaming services. Previously at Microsoft, Google,
          and various startups, she&apos;s focused her career in building
          delightful and accessible user-focused products.
        </p>
        <p>
          Isabela loves the intersection of code, design, and tooling. Her goal
          is to empower the community to create user-focused experiences by
          connecting the dots across these areas. You can find her on Twitter,
          posting about mechanical keyboards, plants, and the web.
        </p>
      </div>
    </div>
  );
}
