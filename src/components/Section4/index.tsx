import { Button } from "../Button";
import { Card } from "./Card";
import { DataCard } from "./DataCard";
import styles from "./styles.module.scss";

export function Section4() {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {DataCard &&
          DataCard.map((info) => (
            <Card
              key={info.id}
              src={info.src}
              name={info.name}
              description={info.description}
            />
          ))}
      </div>
      <div className={styles.containerFooter}>
        <h1>
          Learn how others are reaching their audience easier than ever before.
        </h1>
        <div>
          <input type="text" placeholder="Enter your email" />
          <Button
            title="join our list"
            href="#"
            classNameStyle={styles.button}
          />
        </div>
        <span>Thanks! Email received.</span>
      </div>
    </div>
  );
}
