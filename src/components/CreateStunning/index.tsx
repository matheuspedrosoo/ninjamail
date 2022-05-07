import { Button } from "../Button";
import styles from "./styles.module.scss";

export function CreateStunning() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.container_icons}> */}
      <img
        className={styles.icon1}
        src="/createStunning/ellipseTopLeft.svg"
        alt="circulo esquerda"
      />
      <img
        className={styles.icon2}
        src="/createStunning/ellipseTopRight.svg"
        alt="circulo direita"
      />
      <img
        className={styles.icon3}
        src="/createStunning/ellipseBottom.svg"
        alt="circulo borda"
      />
      <img
        className={styles.icon4}
        src="/createStunning/circleBlue.svg"
        alt="circulo azul"
      />
      <img
        className={styles.icon5}
        src="/createStunning/squadBlack.svg"
        alt="quadrado preto"
      />
      <img
        className={styles.icon6}
        src="/createStunning/squadLeft.svg"
        alt="quadrado esquerda"
      />
      <img
        className={styles.icon7}
        src="/createStunning/squadRight.svg"
        alt="quadrado direita"
      />
      <img
        className={styles.icon8}
        src="/createStunning/squadYellow.svg"
        alt="quadrado amarelo "
      />
      <img
        className={styles.icon9}
        src="/createStunning/squadRed.svg"
        alt="quadrado vermelho "
      />
      <img
        className={styles.icon10}
        src="/createStunning/ellipseLeftBottom.svg"
        alt="circulo transparent"
      />
      {/* </div> */}

      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Create Stunning Email Campaigns</h1>
          <p>
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </p>
          <div className={styles.buttons}>
            <Button
              title="try now"
              href="#"
              classNameStyle={styles.buttonTry}
            />
            <Button
              title="get a demo"
              href="#"
              classNameStyle={styles.buttonGet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
