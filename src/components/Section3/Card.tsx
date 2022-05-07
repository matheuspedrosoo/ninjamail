import Link from "next/link";
import styles from "./Card.module.scss";

interface CardProps {
  src: string;
  alt?: string;
  description: string;
  linkTitle: string;
  href: string;
}

export function Card({ src, alt, description, linkTitle, href }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card_image}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.card_footer}>
        <p>{description}</p>
        <Link href={href}>
          <a>{linkTitle}</a>
        </Link>
      </div>
    </div>
  );
}
