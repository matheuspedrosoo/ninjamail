import { Button } from "../Button";
import styles from "./styles.module.scss";

export function SectionGetStarted() {
  return (
    <div className={styles.container}>
      <h1>Get started today!</h1>
      <Button title="PICK A PLAN" classNameStyle={styles.button} href="#" />
    </div>
  );
}
