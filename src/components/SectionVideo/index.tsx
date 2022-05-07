import { Button } from "../Button";
import styles from "./styles.module.scss";

export function SectionVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Reach More Customers</h1>
        <Button title="LEARN HOW" href="#" classNameStyle={styles.button} />
      </div>
    </div>
  );
}
