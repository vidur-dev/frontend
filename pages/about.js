import Head from 'next/head';
import PillNavigation from '../components/PillNavigation';
import menuItems from '../data/navMenu.json';
import styles from '../styles/Home.module.scss';

export default function About() {
  return (
    <main className={styles.main}>
      <Head>
        <title>about | vidur.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className={styles.title}>vidur.dev</h1>

      <PillNavigation items={menuItems} active="about" />
      <p className={styles.about}>
        This is the personal website of Vidur Butalia.
      </p>
    </main>
  );
}
