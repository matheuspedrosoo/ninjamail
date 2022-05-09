import styles from "./styles.module.scss";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.left}>
          <img src="/header/logoHeader2.jpg" alt="Logo" />
          <h2>NinjaMail</h2>
        </div>
        <div className={styles.right}>
          <div className={styles.box1}>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Services</li>
              <li>Partners</li>
            </ul>

            <ul>
              <li>About Us</li>
              <li>Tutorials</li>
              <li>Resources</li>
              <li>Help Center</li>
              <li>Templates</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className={styles.box2}>
            <ul>
              <li>Medium</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>

            <ul>
              <li>Contact Us</li>
              <li>Slack</li>
              <li>Jobs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.contentBottom}>
        <p>
          NinjaMail is a sample project for Quest AI. <br /> © 2019 Quest AI,
          All rights reserved.
        </p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}
