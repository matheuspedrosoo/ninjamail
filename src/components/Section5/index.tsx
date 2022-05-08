import styles from "./styles.module.scss";

export function Section5() {
  return (
    <div className={styles.container}>
      <h1>
        All the best brands <br /> already use us.
      </h1>

      <div className={styles.containerLogos}>
        <img src="/section5/logoLast.png" alt="" />
        <img src="/section5/logoDragon.png" alt="" />
        <img src="/section5/logoQuest.png" alt="" />
        <img src="/section5/logoRadio.png" alt="" />
        <img src="/section5/logoGame.png" alt="" />
      </div>
    </div>
  );
}
