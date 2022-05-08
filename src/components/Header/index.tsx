import { Button } from "../Button";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/header/logoHeader2.jpg" alt="Logo" />
          <h2>NinjaMail</h2>
        </div>

        <div className={styles.navMenu}>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <Button
                href="#"
                title="SIGN UP FREE"
                classNameStyle={styles.button}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
