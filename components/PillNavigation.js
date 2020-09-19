import Link from 'next/link';
import styles from '../styles/PillNavigation.module.scss';

export default function PillNavigation(props) {
  const items = props.items.map((item) => {
    if (item.name === props.active) {
      return (
        <Link href={item.href}>
          <a className={`${styles.button} ${styles.active}`}>{item.name}</a>
        </Link>
      );
    }
    return (
      <Link href={item.href}>
        <a className={styles.button}>{item.name}</a>
      </Link>
    );
  });

  return <nav className={styles.nav}>{items}</nav>;
}
