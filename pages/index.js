import Head from 'next/head';
import PillNavigation from '../components/PillNavigation';
import styles from '../styles/Home.module.scss';
import menuItems from '../data/navMenu.json';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>vidur.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className={styles.text}>vidur.dev</h1>

      <PillNavigation items={menuItems} active="home" />
    </main>
  );
}
