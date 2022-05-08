import styles from "./Card.module.scss";

interface CardProps {
  src: string;
  name: string;
  description: string;
}

export function Card({ name, description, src }: CardProps) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={styles.card_text}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
