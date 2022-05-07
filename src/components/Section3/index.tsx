import { Card } from "./Card";
import { DataCard } from "./DataCard";
import styles from "./styles.module.scss";

export function Section3() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {DataCard &&
            DataCard.map((info) => (
              <Card
                key={info.id}
                src={info.src}
                alt={info.alt}
                description={info.description}
                linkTitle={info.linkTitle}
                href={info.href}
              />
            ))}

          <div className={styles.contentText}>
            <h1>The source for proven, engaging email campaigns</h1>
            <p>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </p>
          </div>
        </div>

        <img className={styles.icon1} src="/section3/icon1.svg" alt="" />
        <img className={styles.icon2} src="/section3/icon2.svg" alt="" />
        <img className={styles.icon3} src="/section3/icon3.svg" alt="" />
        <img className={styles.icon4} src="/section3/icon4.svg" alt="" />
        <img className={styles.icon5} src="/section3/icon5.svg" alt="" />
        <img className={styles.icon6} src="/section3/icon6.svg" alt="" />
        <img className={styles.icon7} src="/section3/icon7.svg" alt="" />
        <img className={styles.icon7} src="/section3/icon7.svg" alt="" />
        <img className={styles.icon8} src="/section3/icon8.svg" alt="" />
        <img className={styles.icon9} src="/section3/icon9.svg" alt="" />
        <img
          className={styles.imgBackground}
          src="/section3/imgBackground.png"
          alt=""
        />
      </div>
      <div className={styles.teste}></div>
    </>
  );
}
