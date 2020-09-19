import Link from 'next/link';
import styles from '../styles/PillNavigation.module.scss';

export default function PillNavigation(props) {
  const items = props.items.map((item) => (
    <Link href={item.href}>
      <a
        className={
          item.name === props.active
            ? `${styles.button} ${styles.active}`
            : styles.button
        }
      >
        {item.name}
      </a>
    </Link>
  ));

  return <nav className={styles.nav}>{items}</nav>;
}
