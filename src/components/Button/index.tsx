import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
  href: string;
  title: string;
  classNameStyle?: string;
}

export function Button({ href, title, classNameStyle }: ButtonProps) {
  return (
    <Link href={href}>
      <a
        className={`${classNameStyle} ? ${classNameStyle} : ${styles.styleButton}`}
      >
        {title}
      </a>
    </Link>
  );
}
