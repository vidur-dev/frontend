import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>vidur.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1 className={styles.text}>vidur.dev</h1>

      <div className={styles.nav}>
        <Link href="/about">
          <a className={styles.button}>about</a>
        </Link>
        <Link href="/Resume - Vidur Butalia.pdf">
          <a className={[styles.button, styles.resume].join(' ')}>resume</a>
        </Link>
        <Link href="https://github.com/vidurb">
          <a className={[styles.button, styles.code].join(' ')}>code</a>
        </Link>
      </div>
    </main>
  );
}
